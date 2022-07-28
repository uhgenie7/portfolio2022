import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  const mobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
};
