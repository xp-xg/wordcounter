import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: {[key: string]: unknown}[];
    }
}

const AdSense = () => {
  useEffect(() => {
    // try {
    //   (window.adsbygoogle = window.adsbygoogle || []).push({});
    // } catch (err) {
    //   console.error(err);
    // }
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <p>Advertisement</p>
      {/* <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-your-ad-client-id"
           data-ad-slot="your-ad-slot-id"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins> */}
    </div>
  );
};

export default AdSense;
