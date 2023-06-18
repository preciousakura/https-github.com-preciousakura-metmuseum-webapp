import { useTheme } from "@/app/lib";
import { Box, LinkText } from "./styles";
import { MdModeNight, MdSunny } from "react-icons/md";
import { usePathname } from "next/navigation";

export function Header() {
  const { theme } = useTheme();
  const router = usePathname();
  const { changeToDarkMode, changeToLightMode } = useTheme();
  const isHome = router === "/" ? 1 : 0;
  return (
    <Box ishome={isHome}>
      <li>
        <LinkText href="/" ishome={isHome} iscurrent={isHome}>
          Página Inicial
        </LinkText>
      </li>
      <li>
        <LinkText
          href="/explore"
          ishome={isHome}
          iscurrent={router === "/explore" ? 1 : 0}
        >
          EXPLORAR
        </LinkText>
      </li>
      <li>
        <LinkText
          href="/favorites"
          ishome={isHome}
          iscurrent={router === "/favorites" ? 1 : 0}
        >
          Meus Favoritos
        </LinkText>
      </li>
      <li className="colorMode">
        <MdModeNight
          size={22}
          onClick={changeToDarkMode}
          color={theme.isDark ? theme.colors.primary[500] : "white"}
        />
        <MdSunny
          size={22}
          onClick={changeToLightMode}
          color={!theme.isDark ? theme.colors.primary[500] : "white"}
        />
      </li>
    </Box>
  );
}
