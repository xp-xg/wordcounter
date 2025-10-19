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