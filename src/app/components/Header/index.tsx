import { useTheme } from "@/app/lib";
import { Box } from "./styles";
import { MdModeNight, MdSunny } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const router = usePathname();
  const { changeToDarkMode, changeToLightMode } = useTheme();
  const isHome = router === "/" ? 1 : 0;
  return (
    <Box ishome={isHome}>
      <li>
        <Link href="/">Página Inicial</Link>
      </li>
      <li>
        <Link href="/explore">EXPLORAR</Link>
      </li>
      <li>
        <Link href="/favorites">Meus Favoritos</Link>
      </li>
      <li className="colorMode">
        <MdModeNight size={22} onClick={changeToDarkMode} />
        <MdSunny size={22} onClick={changeToLightMode} />
      </li>
    </Box>
  );
}
