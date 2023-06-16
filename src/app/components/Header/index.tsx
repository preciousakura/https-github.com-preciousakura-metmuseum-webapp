import { useTheme } from "@/app/lib";
import { Box } from "./styles";
import { MdModeNight, MdSunny } from "react-icons/md";

export function Header() {
  const { changeToDarkMode, changeToLightMode } = useTheme();
  return (
    <Box>
      <li>
        <a>Página Inicial</a>
      </li>
      <li>
        <a>Informações Gerais</a>
      </li>
      <li>
        <a>Meus Favoritos</a>
      </li>
      <li className="colorMode">
        <MdModeNight size={22} color="white" onClick={changeToDarkMode} />
        <MdSunny size={22} color="white" onClick={changeToLightMode} />
      </li>
    </Box>
  );
}
