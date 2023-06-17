import { useTheme } from "@/app/lib";
import { Box } from "./styles";
import { MdModeNight, MdSunny } from "react-icons/md";
import Link from "next/link";

export function Header() {
  const { changeToDarkMode, changeToLightMode } = useTheme();
  return (
    <Box>
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
        <MdModeNight size={22} color="white" onClick={changeToDarkMode} />
        <MdSunny size={22} color="white" onClick={changeToLightMode} />
      </li>
    </Box>
  );
}
