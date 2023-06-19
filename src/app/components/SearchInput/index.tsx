import { AiOutlineClose } from "react-icons/ai";
import { Box } from "./styles";

import { ImSearch } from "react-icons/im";
import { Checkbox, ConfigProvider, Select, theme as antdTheme } from "antd";
import { useTheme } from "@/app/context/useTheme";

export function SearchInput() {
  const { theme } = useTheme();

  const options = [
    { label: "Hightlights", value: "Hightlights" },
    { label: "Obras com imagens", value: "Pear" },
    { label: "Obras de domínio público", value: "Orange" },
  ];
  return (
    <Box>
      <div className="top">
        <div className="input">
          <div className="icon search">
            <ImSearch />
          </div>
          <input placeholder="Busque " />
          <div className="icon clear">
            <AiOutlineClose />
          </div>
        </div>
        <div className="filter select" defaultValue="Todos os campos">
          <ConfigProvider
            theme={{
              algorithm: theme.isDark ? antdTheme.darkAlgorithm : undefined,
              token: {
                colorPrimary: theme.colors.primary[500],
              },
            }}
          >
            <Select
              defaultValue="all"
              options={[
                { value: "all", label: "Todos os campos" },
                { value: "artist", label: "Artista/Cultura" },
                { value: "locale", label: "Localização" },
                { value: "title", label: "Título da obra" },
              ]}
            />
          </ConfigProvider>
        </div>
        <div className="button">
          <button>PESQUISAR</button>
        </div>
      </div>

      <div className="bottom">
        <h3>Mostre apenas: </h3>
        <ConfigProvider
          theme={{
            algorithm: theme.isDark ? antdTheme.darkAlgorithm : undefined,
            token: {
              colorPrimary: theme.colors.primary[500],
            },
          }}
        >
          <Checkbox.Group options={options} />
        </ConfigProvider>
      </div>
    </Box>
  );
}
