import { useEffect } from 'react';
import { useConsent } from './CookieConsentBanner';
import { initializeAdSense } from '../lib/googleConsentMode';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

const AdSense = ({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  style = { display: 'block' }
}: AdSenseProps) => {
  const { consent } = useConsent();

  useEffect(() => {
    // Only load ads if user has consented to advertising
    if (!consent?.advertising) {
      return;
    }

    // Initialize AdSense with proper consent
    initializeAdSense();
  }, [consent?.advertising, adSlot]);

  // Don't render anything if user hasn't consented to advertising
  if (!consent?.advertising) {
    return null;
  }

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-9891009708137483"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
    />
  );
};

export default AdSense;