'use client'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import themes, { ITheme } from "../styles/themes";
import { DefaultTheme } from "styled-components/dist/types";

export interface ICustomizedTheme {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
  changeToDarkMode: () => void;
  changeToLightMode: () => void;
}

const ThemeContext = createContext<ICustomizedTheme>({} as ICustomizedTheme);

export function CustomizedThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<DefaultTheme>(themes.light);

  const changeToDarkMode = () => {
    window.localStorage.setItem("@color-mode", "dark");
    setTheme(themes.dark);
  };

  const changeToLightMode = () => {
    window.localStorage.setItem("@color-mode", "light");
    setTheme(themes.light);
  };

  useEffect(() => {
    const color = window.localStorage.getItem("@color-mode");
    if (color) {
      if (color === "light") changeToLightMode();
      else changeToDarkMode();
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)");
      const theme = isDark.matches ? "dark" : "light";
      if (theme === "dark") setTheme(themes.dark);
      else setTheme(themes.light);
    }
  }, []);

  const providerValue = useMemo(
    () => ({
      theme,
      setTheme,
      changeToLightMode,
      changeToDarkMode,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
