import { App } from "./app";
import { FavoritesProvider } from "./context/useFavorites";
import { SearchProvider } from "./context/useSearch";
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
    <SearchProvider>
      <CustomizedThemeProvider>
        <FavoritesProvider>
          <App>{children}</App>
        </FavoritesProvider>
      </CustomizedThemeProvider>
    </SearchProvider>
  );
}
