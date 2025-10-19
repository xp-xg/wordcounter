import { useState, useEffect } from 'react';
import { Box, Button, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ConsentManagement from './ConsentManagement';
import { updateConsent as updateGoogleConsent } from '../lib/googleConsentMode';

// Consent types
export type ConsentType = 'necessary' | 'analytics' | 'advertising';

// Consent preferences interface
export interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  timestamp: number;
}

// Default consent preferences (necessary cookies always enabled)
const DEFAULT_CONSENT: ConsentPreferences = {
  necessary: true,
  analytics: false,
  advertising: false,
  timestamp: Date.now()
};

// Cookie name for storing consent
const CONSENT_COOKIE_NAME = 'word_counter_consent_preferences';

/**
 * Save consent preferences to localStorage
 */
export const saveConsentPreferences = (preferences: ConsentPreferences) => {
  try {
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(preferences));
    // Also set a simple cookie for server-side detection
    document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(preferences))};path=/;max-age=31536000`; // 1 year
    
    // Update Google Consent Mode if available
    updateGoogleConsent({
      analytics: preferences.analytics,
      advertising: preferences.advertising
    });
  } catch (error) {
    console.warn('Failed to save consent preferences', error);
  }
};

/**
 * Load consent preferences from localStorage
 */
export const loadConsentPreferences = (): ConsentPreferences | null => {
  try {
    const saved = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (saved) {
      return JSON.parse(saved);
    }
    
    // Try to get from cookie as fallback
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === CONSENT_COOKIE_NAME && value) {
        return JSON.parse(decodeURIComponent(value));
      }
    }
    
    return null;
  } catch (error) {
    console.warn('Failed to load consent preferences', error);
    return null;
  }
};

/**
 * Hook to manage consent state
 */
export const useConsent = () => {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadedConsent = loadConsentPreferences();
    setConsent(loadedConsent || DEFAULT_CONSENT);
    setInitialized(true);
    
    // Update Google Consent Mode with loaded preferences
    if (loadedConsent) {
      updateGoogleConsent({
        analytics: loadedConsent.analytics,
        advertising: loadedConsent.advertising
      });
    }
  }, []);

  const updateConsent = (newPreferences: Partial<ConsentPreferences>) => {
    const updatedConsent = {
      ...DEFAULT_CONSENT,
      ...(consent || {}),
      ...newPreferences,
      timestamp: Date.now()
    };
    
    setConsent(updatedConsent);
    saveConsentPreferences(updatedConsent);
  };

  const acceptAll = () => {
    updateConsent({
      analytics: true,
      advertising: true
    });
  };

  const rejectAll = () => {
    updateConsent({
      analytics: false,
      advertising: false
    });
  };

  const isOpen = initialized && (!consent || Date.now() - consent.timestamp > 30 * 24 * 60 * 60 * 1000); // Show again after 30 days

  return {
    consent,
    initialized,
    isOpen,
    updateConsent,
    acceptAll,
    rejectAll
  };
};

/**
 * Cookie Consent Banner Component
 */
const CookieConsentBanner = () => {
  const { t } = useTranslation();
  const { isOpen, acceptAll, rejectAll } = useConsent();
  const [showPreferences, setShowPreferences] = useState(false);

  // Handle hash changes for preferences modal
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#preferences') {
        setShowPreferences(true);
        // Remove hash from URL without refreshing
        if (window.history.replaceState) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'background.paper',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          zIndex: 9999,
          p: 2,
          borderTop: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
          <Typography variant="body1" paragraph>
            {t('cookieConsent.bannerText')}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={acceptAll}
              size="small"
            >
              {t('cookieConsent.acceptAll')}
            </Button>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={() => setShowPreferences(true)}
              size="small"
            >
              {t('cookieConsent.customize')}
            </Button>
            <Button 
              variant="text" 
              color="secondary" 
              onClick={rejectAll}
              size="small"
            >
              {t('cookieConsent.rejectAll')}
            </Button>
          </Box>
          
          <Box sx={{ mt: 1 }}>
            <Link 
              href="/privacy-policy" 
              color="secondary" 
              underline="hover"
              sx={{ fontSize: '0.8rem' }}
            >
              {t('cookieConsent.learnMore')}
            </Link>
          </Box>
        </Box>
      </Box>
      
      <ConsentManagement 
        open={showPreferences} 
        onClose={() => setShowPreferences(false)} 
      />
    </>
  );
};

export default CookieConsentBanner;