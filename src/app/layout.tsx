"use client";
import "./styles/global.css";
import { App, CustomizedThemeProvider } from "./lib";
import { FavoritesProvider } from "./context/useFavorites";

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
