import { useEffect } from 'react';

/**
 * Custom hook for smooth scroll reveal with entrance and exit animations.
 * Observes all elements with the '.reveal' class.
 * When entering the viewport -> adds '.is-visible' (entrance animation)
 * When exiting the viewport -> removes '.is-visible' (exit animation)
 */
export default function useScrollReveal() {
  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Exit animation: remove is-visible when element leaves viewport
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    };

    observeAll();

    // Re-observe if dynamic elements are mounted or filtered (e.g. tab switches)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
