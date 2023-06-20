import { AiOutlineClose } from "react-icons/ai";
import { Box } from "./styles";

import { ImSearch } from "react-icons/im";
import { Checkbox, ConfigProvider, Select, theme as antdTheme } from "antd";
import { useTheme } from "@/app/context/useTheme";
import { useSearch } from "@/app/context/useSearch";
import { useEffect, useState } from "react";

export function SearchInput() {
  const { theme } = useTheme();
  const {
    onChangeFilterBy,
    onChangeFilterCheckBox,
    onChangeSearchValue,
    clearSearch,
  } = useSearch();

  const options = [
    { label: "Hightlights", value: "isHighlight" },
    { label: "Obras com imagens", value: "hasImages" },
  ];

  useEffect(() => {
    onChangeFilterBy("");
    onChangeFilterCheckBox([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [value, setValue] = useState("");

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
        <button onClick={() => onChangeSearchValue(value)}>PESQUISAR</button>
        <button
          onClick={() => {
            setValue("");
            clearSearch("");
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
          <Checkbox.Group onChange={onChangeFilterCheckBox} options={options} />
        </ConfigProvider>
      </div>
    </Box>
  );
}
