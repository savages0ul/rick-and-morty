import { useEffect, useRef, useState } from 'react';

const ROOT_MARGIN = '200px';

export function useInfiniteScroll(callback: () => void) {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callbackRef.current();
      },
      { rootMargin: ROOT_MARGIN }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [target]);

  return setTarget;
}
