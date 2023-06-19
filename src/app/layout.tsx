import { App } from "./app";
import { FavoritesProvider } from "./context/useFavorites";
import { CustomizedThemeProvider } from "./context/useTheme";
import "./styles/global.css";

export const metadata = {
  title: "The Metropolitan Museum of Art",
  description: "The Metropolitan Museum of Art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomizedThemeProvider>
      <FavoritesProvider>
        <App>{children}</App>
      </FavoritesProvider>
    </CustomizedThemeProvider>
  );
}
