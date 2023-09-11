import { useEffect } from 'react';

import { TPalettes } from 'src/store/useTheme';

const useChangeDataTheme = (theme: TPalettes) => {
  const setMode = (theme: TPalettes) => {
    document.querySelector('body')?.setAttribute('data-theme', theme);
  };

  return useEffect(() => {
    setMode(theme);
  }, [theme]);
};

export default useChangeDataTheme;
