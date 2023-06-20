"use client";
import { ThemeProvider } from "styled-components";
import { Header, MobileHeader } from "./components";
import { BodyMain } from "./styles/global";
import { useTheme } from "./context/useTheme";

export function App({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <BodyMain>
          <MobileHeader />
          <Header />
          {children}
        </BodyMain>
      </html>
    </ThemeProvider>
  );
}
