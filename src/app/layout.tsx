import "./styles/global.css";
import { App, CustomizedThemeProvider } from "./lib";

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
      <App>{children}</App>
    </CustomizedThemeProvider>
  );
}
