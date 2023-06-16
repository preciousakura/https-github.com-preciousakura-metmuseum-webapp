import { Header } from "./components";
import { ThemeProvider, useTheme } from "./lib";

export function App({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
