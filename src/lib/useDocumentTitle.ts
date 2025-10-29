import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const useMetaDescription = (description: string) => {
  useEffect(() => {
    // Remove existing meta description
    const existingMeta = document.querySelector('meta[name="description"]');
    if (existingMeta) {
      existingMeta.remove();
    }

    // Create new meta description
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);

    // Cleanup function
    return () => {
      if (document.contains(meta)) {
        document.head.removeChild(meta);
      }
    };
  }, [description]);
};

export const useSocialMetaTags = (title: string, description: string) => {
  useEffect(() => {
    // Remove existing Open Graph and Twitter meta tags
    const existingOgTitle = document.querySelector('meta[property="og:title"]');
    const existingOgDescription = document.querySelector('meta[property="og:description"]');
    const existingOgUrl = document.querySelector('meta[property="og:url"]');
    const existingTwitterTitle = document.querySelector('meta[name="twitter:title"]');
    const existingTwitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (existingOgTitle) existingOgTitle.remove();
    if (existingOgDescription) existingOgDescription.remove();
    if (existingOgUrl) existingOgUrl.remove();
    if (existingTwitterTitle) existingTwitterTitle.remove();
    if (existingTwitterDescription) existingTwitterDescription.remove();

    // Create new Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    
    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', window.location.href);

    // Create new Twitter meta tags
    const twitterTitle = document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', title);
    
    const twitterDescription = document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', description);

    // Add all meta tags to the head
    document.head.appendChild(ogTitle);
    document.head.appendChild(ogDescription);
    document.head.appendChild(ogUrl);
    document.head.appendChild(twitterTitle);
    document.head.appendChild(twitterDescription);

    // Cleanup function
    return () => {
      if (document.head.contains(ogTitle)) document.head.removeChild(ogTitle);
      if (document.head.contains(ogDescription)) document.head.removeChild(ogDescription);
      if (document.head.contains(ogUrl)) document.head.removeChild(ogUrl);
      if (document.head.contains(twitterTitle)) document.head.removeChild(twitterTitle);
      if (document.head.contains(twitterDescription)) document.head.removeChild(twitterDescription);
    };
  }, [title, description]);
};