import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export type TPalettes = 'light' | 'dark';
export type TThemes = TPalettes | 'system';

type ThemeState = {
  preferredTheme: TPalettes;
  isSystemTheme: boolean;
  setSystemTheme: (value: boolean) => void;
  toggleTheme: (value: TPalettes) => void;
};

const initialStore: ThemeState = {
  preferredTheme: 'light',
  isSystemTheme: false,
  setSystemTheme: () => {},
  toggleTheme: () => {},
};

const useTheme = create<ThemeState>()(
  devtools(
    persist(
      set => ({
        ...initialStore,
        toggleTheme: (value: TPalettes) =>
          set({
            preferredTheme: value,
          }),
        setSystemTheme: (value: boolean) =>
          set({
            isSystemTheme: value,
          }),
      }),
      {
        name: 'theme_storage',
      },
    ),
    { name: 'theme_store' },
  ),
);

export default useTheme;
