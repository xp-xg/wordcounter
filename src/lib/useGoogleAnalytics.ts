import { useEffect } from 'react';
import { useConsent } from '../components/CookieConsentBanner';
import { initializeConsentMode, updateConsent, configureAnalyticsWithConsent } from './googleConsentMode';

/**
 * Hook to initialize Google Analytics based on user consent
 * @param gaMeasurementId - Google Analytics Measurement ID (e.g. G-XXXXXXXXXX)
 */
export const useGoogleAnalytics = (gaMeasurementId?: string) => {
  const { consent } = useConsent();

  useEffect(() => {
    // Initialize Google Consent Mode
    initializeConsentMode();
  }, []);

  useEffect(() => {
    if (!gaMeasurementId || gaMeasurementId === "G-XXXXXXXXXX") {
      // Don't initialize if using placeholder ID or no ID provided
      return;
    }

    // Update consent based on user preferences
    if (consent) {
      updateConsent({
        analytics: consent.analytics,
        advertising: consent.advertising
      });

      // Configure analytics if consent is given
      if (consent.analytics) {
        configureAnalyticsWithConsent(gaMeasurementId);
        
        // Send initial page view
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag?.('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
          });
        }
      }
    }
  }, [gaMeasurementId, consent]);

  // Track page views when location changes
  useEffect(() => {
    if (!gaMeasurementId || gaMeasurementId === "G-XXXXXXXXXX" || !consent?.analytics) {
      return;
    }

    const sendPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag?.('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href
        });
      }
    };

    sendPageView();
  }, [gaMeasurementId, consent?.analytics, window?.location?.href]);
};