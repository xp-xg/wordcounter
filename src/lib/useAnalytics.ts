import { useEffect } from 'react';

export const useAnalytics = (trackingId?: string) => {
  useEffect(() => {
    // In a real implementation, you would load the Google Analytics script
    // For now, we'll just simulate analytics setup if a tracking ID is provided
    if (trackingId && trackingId.startsWith('G-')) {
      // Load GA4 script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      script.onload = () => {
        if (!window.gtag) {
          (window.gtag as any) = function() {
            (window.dataLayer = window.dataLayer || []).push(arguments);
          };
        }
        window.gtag?.('js', new Date());
        window.gtag?.('config', trackingId);
      };

      // Create inline script for gtag function
      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
      `;
      document.head.appendChild(inlineScript);

      return () => {
        // Clean up scripts on unmount
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
        if (document.head.contains(inlineScript)) {
          document.head.removeChild(inlineScript);
        }
      };
    }
  }, [trackingId]);

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag?.('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);
};