import { useState } from 'react';

import { Select } from 'antd';

import useThemeDetector from 'src/hooks/useThemeDetector';
import useChangeIfDetected from 'src/hooks/useChangeIfDetected';
import useTheme, { TThemes } from 'src/store/useTheme';
import useChangeDataTheme from 'src/hooks/useChangeDataTheme';

const Settings = () => {
  const options = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'Prefer system' },
  ];

  const { preferredTheme, toggleTheme, isSystemTheme, setSystemTheme } = useTheme();
  const detectedTheme = useThemeDetector();

  const [currentTheme, setCurrentTheme] = useState<TThemes>(() => {
    if (isSystemTheme) return 'system';
    else return preferredTheme;
  });

  const onThemeChangeHandler = (value: TThemes) => {
    if (value === 'system') {
      setSystemTheme(true);
      toggleTheme(detectedTheme);
    } else {
      setSystemTheme(false);
      toggleTheme(value);
    }
    setCurrentTheme(value);
  };

  useChangeIfDetected();
  useChangeDataTheme(preferredTheme);

  return (
    <div>
      <p>currentTheme : ${currentTheme}</p>
      <p>preferredTheme : ${preferredTheme}</p>
      <p>isSystemTheme : ${isSystemTheme ? 'yes' : 'no'}</p>
      <p>detectedTheme : ${detectedTheme}</p>
      <Select
        defaultValue={currentTheme}
        style={{ width: '50%' }}
        onChange={onThemeChangeHandler}
        options={options}
      />
    </div>
  );
};

export default Settings;
