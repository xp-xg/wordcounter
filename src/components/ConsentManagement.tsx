import { useState, useEffect } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  FormControlLabel, 
  Checkbox, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Divider,
  Link
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConsentPreferences, useConsent } from './CookieConsentBanner';

interface ConsentManagementProps {
  open: boolean;
  onClose: () => void;
}

const ConsentManagement = ({ open, onClose }: ConsentManagementProps) => {
  const { t } = useTranslation();
  const { consent, updateConsent, acceptAll, rejectAll } = useConsent();
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
    timestamp: Date.now()
  });

  // Initialize preferences from consent
  useEffect(() => {
    if (consent) {
      setPreferences(consent);
    }
  }, [consent]);

  const handleSave = () => {
    updateConsent(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    acceptAll();
    onClose();
  };

  const handleRejectAll = () => {
    rejectAll();
    onClose();
  };

  const handleChange = (type: keyof ConsentPreferences) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences({
      ...preferences,
      [type]: event.target.checked
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" component="div">
          {t('consentManagement.title')}
        </Typography>
      </DialogTitle>
      
      <DialogContent dividers>
        <Typography variant="body2" color="textSecondary" paragraph>
          {t('consentManagement.description')}
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        {/* Necessary Cookies - Always enabled */}
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox 
                checked={true} 
                disabled 
                color="primary" 
              />
            }
            label={
              <Box>
                <Typography variant="subtitle1" component="span">
                  {t('consentManagement.necessary')}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {t('consentManagement.necessaryDescription')}
                </Typography>
              </Box>
            }
            sx={{ alignItems: 'flex-start' }}
          />
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        {/* Analytics Cookies */}
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox 
                checked={preferences.analytics} 
                onChange={handleChange('analytics')} 
                color="primary" 
              />
            }
            label={
              <Box>
                <Typography variant="subtitle1" component="span">
                  {t('consentManagement.analytics')}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {t('consentManagement.analyticsDescription')}
                </Typography>
              </Box>
            }
            sx={{ alignItems: 'flex-start' }}
          />
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        {/* Advertising Cookies */}
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox 
                checked={preferences.advertising} 
                onChange={handleChange('advertising')} 
                color="primary" 
              />
            }
            label={
              <Box>
                <Typography variant="subtitle1" component="span">
                  {t('consentManagement.advertising')}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {t('consentManagement.advertisingDescription')}
                </Typography>
              </Box>
            }
            sx={{ alignItems: 'flex-start' }}
          />
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            <Link href="/privacy-policy" color="secondary" underline="hover">
              {t('privacyPolicy')}
            </Link>
          </Typography>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleRejectAll} color="secondary">
          {t('consentManagement.rejectAll')}
        </Button>
        <Button onClick={handleAcceptAll} variant="contained" color="primary">
          {t('consentManagement.acceptAll')}
        </Button>
        <Button onClick={handleSave} variant="outlined" color="primary">
          {t('consentManagement.savePreferences')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConsentManagement;