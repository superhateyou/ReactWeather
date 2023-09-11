import { useEffect } from 'react';

import useTheme from 'src/store/useTheme';

import useThemeDetector from './useThemeDetector';

const useChangeIfDetected = () => {
  const detectedTheme = useThemeDetector();
  const { preferredTheme, toggleTheme, isSystemTheme } = useTheme();

  return useEffect(() => {
    if (isSystemTheme && preferredTheme !== detectedTheme) {
      console.log('toggle');
      toggleTheme(detectedTheme);
    }
  }, [detectedTheme]);
};

export default useChangeIfDetected;
