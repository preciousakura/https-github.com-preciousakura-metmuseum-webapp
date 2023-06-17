import { Header } from "./components";
import { BodyMain, ThemeProvider, useTheme } from "./lib";

export function App({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <BodyMain>
          <Header />
          {children}
        </BodyMain>
      </html>
    </ThemeProvider>
  );
}
