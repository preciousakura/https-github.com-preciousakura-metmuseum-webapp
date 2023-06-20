import { AiOutlineClose } from "react-icons/ai";
import { Box } from "./styles";

import { ImSearch } from "react-icons/im";
import { Checkbox, ConfigProvider, Select, theme as antdTheme } from "antd";
import { useTheme } from "@/app/context/useTheme";
import { useSearch } from "@/app/context/useSearch";
import { useEffect } from "react";

export function SearchInput() {
  const { theme } = useTheme();
  const {
    onChangeFilterBy,
    onChangeFilterCheckBox,
    onChangeSearchValue,
    onSearch,
  } = useSearch();

  const options = [
    { label: "Hightlights", value: "isHighlight" },
    { label: "Obras com imagens", value: "hasImage" },
  ];

  useEffect(() => {
    onChangeFilterBy("");
    onChangeFilterCheckBox([]);
    onChangeSearchValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <div className="content-search">
        <div className="input-search">
          <div className="icon search">
            <ImSearch />
          </div>
          <input
            placeholder="Buscar"
            onChange={(e) => onChangeSearchValue(e.target.value)}
          />
          <div className="icon clear">
            <AiOutlineClose />
          </div>
        </div>
        <div className="select-filter-search" defaultValue="Todos os campos">
          <ConfigProvider
            theme={{
              algorithm: theme.isDark ? antdTheme.darkAlgorithm : undefined,
              token: {
                colorPrimary: theme.colors.primary[500],
              },
            }}
          >
            <Select
              onChange={onChangeFilterBy}
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
        <button>PESQUISAR</button>
      </div>

      <div className="content-filter">
        <h3>Mostre apenas: </h3>
        <ConfigProvider
          theme={{
            algorithm: theme.isDark ? antdTheme.darkAlgorithm : undefined,
            token: {
              colorPrimary: theme.colors.primary[500],
            },
          }}
        >
          <Checkbox.Group onChange={onChangeFilterCheckBox} options={options} />
        </ConfigProvider>
      </div>
    </Box>
  );
}
