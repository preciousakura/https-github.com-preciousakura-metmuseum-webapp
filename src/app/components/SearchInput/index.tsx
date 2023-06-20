import { Box } from "./styles";

import { ImSearch } from "react-icons/im";
import { Checkbox, ConfigProvider, Select, theme as antdTheme } from "antd";
import { useTheme } from "@/app/context/useTheme";
import { useSearch } from "@/app/context/useSearch";
import { useState } from "react";

export function SearchInput() {
  const { theme } = useTheme();
  const {
    onChangeFilterBy,
    onChangeFilterCheckBox,
    onChangeSearchValue,
    clearSearch,
    filterCheckBox,
    filterBy,
    searchValue,
  } = useSearch();

  const options = [
    { label: "Hightlights", value: "isHighlight" },
    { label: "Obras com imagens", value: "hasImages" },
  ];

  const [value, setValue] = useState(searchValue);

  return (
    <Box>
      <div className="content-search">
        <div className="input-search">
          <div className="icon search">
            <ImSearch />
          </div>
          <input
            value={value}
            placeholder="Buscar"
            onChange={(e) => setValue(e.target.value)}
          />
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
              value={filterBy}
              onChange={onChangeFilterBy}
              options={[
                { value: "all", label: "Todos os campos" },
                { value: "artist", label: "Artista/Cultura" },
                { value: "locale", label: "Localização" },
                { value: "title", label: "Título da obra" },
              ]}
            />
          </ConfigProvider>
        </div>
        <button onClick={() => onChangeSearchValue(value)}>PESQUISAR</button>
        <button
          onClick={() => {
            setValue("");
            clearSearch();
          }}
        >
          LIMPAR
        </button>
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
          <Checkbox.Group
            value={filterCheckBox}
            onChange={onChangeFilterCheckBox}
            options={options}
          />
        </ConfigProvider>
      </div>
    </Box>
  );
}
