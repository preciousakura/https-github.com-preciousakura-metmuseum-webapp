import { Box } from "./styles";
import { MdModeNight, MdSunny } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/context/useTheme";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import { ClickAwayListener } from "@mui/material";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, changeToDarkMode, changeToLightMode } = useTheme();
  const router = usePathname();
  const isHome = router === "/" ? 1 : 0;

  const options = [
    { name: "Página Inicial", path: "/", active: isHome },
    { name: "Explorar", path: "/explore", active: router.includes("explore") },
    {
      name: "Meus Favoritos",
      path: "/favorites",
      active: router.includes("favorites"),
    },
  ];

  return (
    <ClickAwayListener
      onClickAway={() => {
        setIsOpen(false);
      }}
    >
      <Box className="nav-mobile" ishome={isHome} isopen={isOpen ? 1 : 0}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <BiMenu size={22} />
        </button>

        <ul>
          {options.map((o, i) => {
            return (
              <li key={i} className={o.active ? "active" : "inactive"}>
                <Link
                  onClick={() => {
                    if (!o.active) setIsOpen(false);
                  }}
                  href={o.path}
                >
                  {o.name}
                </Link>
              </li>
            );
          })}

          <li className="colorMode">
            <div className="button-color-mode">
              <MdModeNight
                size={22}
                onClick={changeToDarkMode}
                color={
                  theme.isDark
                    ? theme.colors.primary[500]
                    : theme.isDark
                    ? theme.colors.trueGray[500]
                    : theme.colors.trueGray[100]
                }
              />
              <MdSunny
                size={22}
                onClick={changeToLightMode}
                color={
                  !theme.isDark
                    ? theme.colors.primary[500]
                    : theme.isDark
                    ? theme.colors.trueGray[500]
                    : "black"
                }
              />
            </div>
          </li>
        </ul>
      </Box>
    </ClickAwayListener>
  );
}
