import { useEffect, useState } from 'react';

import { TPalettes } from 'src/store/useTheme';

const useThemeDetector = (): TPalettes => {
  const [theme, setTheme] = useState<TPalettes>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  );

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = ({ matches }: MediaQueryListEvent) => {
      setTheme(matches ? 'dark' : 'light');
    };

    matcher.addEventListener('change', onChange);
    return () => matcher.removeEventListener('change', onChange);
  }, []);

  return theme;
};

export default useThemeDetector;
