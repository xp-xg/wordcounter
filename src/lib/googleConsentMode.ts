/**
 * Google Consent Mode implementation for GDPR and CCPA compliance
 * This module handles consent management for Google services (Analytics, AdSense)
 */

// Define types for Google Consent Mode
type ConsentStatus = 'granted' | 'denied';

declare global {
  interface Window {
    gtag: ((...args: any[]) => void) | undefined;
    adsbygoogle: any[] | undefined;
    dataLayer: any[];
  }
}

// Default consent state
const DEFAULT_CONSENT_STATE = {
  ad_storage: 'denied' as ConsentStatus,
  analytics_storage: 'denied' as ConsentStatus,
  ad_user_data: 'denied' as ConsentStatus,
  ad_personalization: 'denied' as ConsentStatus,
};

/**
 * Initialize Google Consent Mode
 */
export const initializeConsentMode = () => {
  // Initialize dataLayer if not present
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  // Configure default consent states
  // Set default consent state - initially denying all for GDPR compliance
  if (window.gtag) {
    window.gtag?.('consent', 'default', DEFAULT_CONSENT_STATE);
  } else {
    // If gtag is not available yet, push the consent command to dataLayer
    // This will be processed when gtag script loads
    window.dataLayer.push({
      'event': 'consent',
      'consent': DEFAULT_CONSENT_STATE
    });
  }
};

/**
 * Update consent for Google services based on user preferences
 * @param preferences - User's consent preferences
 */
export const updateConsent = (preferences: {
  analytics: boolean;
  advertising: boolean;
}) => {
  if (typeof window === 'undefined') {
    console.warn('Window not available, skipping consent update');
    return;
  }

  const consentUpdate = {
    ad_storage: preferences.advertising ? 'granted' : 'denied',
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_user_data: preferences.advertising ? 'granted' : 'denied',
    ad_personalization: preferences.advertising ? 'granted' : 'denied',
  };

  // Update consent - try gtag first, fallback to dataLayer
  if (window.gtag) {
    window.gtag?.('consent', 'update', consentUpdate);
  } else {
    // If gtag is not available yet, push the consent command to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'consent',
      'consent': consentUpdate
    });
  }

  // Initialize AdSense if consent is granted
  if (preferences.advertising) {
    initializeAdSense();
  }
};

/**
 * Initialize AdSense properly according to consent mode
 */
export const initializeAdSense = () => {
  if (typeof window === 'undefined') return;

  // Ensure adsbygoogle array exists
  window.adsbygoogle = window.adsbygoogle || [];

  // Process existing ad units
  try {
    const adElements = document.querySelectorAll('.adsbygoogle');
    if (adElements.length > 0) {
      (window.adsbygoogle as any[]).push(...Array.from(adElements).map(() => ({})));
    }
  } catch (error) {
    console.error('Error initializing AdSense:', error);
  }
};

/**
 * Configure Google Analytics with consent
 * @param gaMeasurementId - Google Analytics Measurement ID
 */
export const configureAnalyticsWithConsent = (gaMeasurementId: string) => {
  if (typeof window === 'undefined') {
    console.warn('Window not available, skipping analytics configuration');
    return;
  }

  // Configure GA with consent - try gtag first, fallback to dataLayer
  if (window.gtag) {
    window.gtag?.('config', gaMeasurementId, {
      // Anonymize IP for GDPR compliance
      anonymize_ip: true,
      // Don't send page views automatically - we'll control this based on consent
      send_page_view: false
    });
  } else {
    // If gtag is not available yet, push the config to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'config': gaMeasurementId,
      'anonymize_ip': true,
      'send_page_view': false
    });
  }

  // Send initial page view
  if (window.gtag) {
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href
    });
  } else {
    // Fallback for page view
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'page_view',
      'page_title': document.title,
      'page_location': window.location.href
    });
  }
};