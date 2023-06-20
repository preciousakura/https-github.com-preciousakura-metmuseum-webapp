"use client";
import { Box } from "./styles";
import { ConfigProvider, Pagination, theme as antdTheme } from "antd";
import { ArtCard } from "../components";
import { useEffect, useMemo, useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { useFavorites } from "../context/useFavorites";
import { useTheme } from "../context/useTheme";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Favorites() {
  const { theme } = useTheme();
  const { favorites } = useFavorites();

  const [page, setPage] = useState(1);

  const onChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const splitObjectData = useMemo(() => {
    return favorites.slice((page - 1) * 10, (page - 1) * 10 + 10);
  }, [favorites, page]);

  useEffect(() => {
    if (splitObjectData.length < 1)
      page - 1 <= 0 ? setPage(1) : setPage(page - 1);
    if (favorites.length <= 10) setPage(1);
  }, [page, favorites, splitObjectData]);

  return (
    <Box>
      <div className="header">
        <h1>Favoritos</h1>
      </div>

      <div className="content">
        {favorites.length > 0 ? (
          <div className="content-cards-area">
            {splitObjectData.map((d) => {
              return <ArtCard key={d} artId={d} />;
            })}
          </div>
        ) : (
          <div className="content-feedback">
            <p>Nenhum dado encontrado</p>
          </div>
        )}

        {favorites.length > 10 && (
          <ConfigProvider
            theme={{
              algorithm: theme.isDark ? antdTheme.darkAlgorithm : undefined,
              token: {
                colorPrimary: theme.colors.primary[500],
              },
            }}
          >
            <Pagination
              current={page}
              total={favorites.length}
              onChange={onChange}
              defaultPageSize={10}
            />
          </ConfigProvider>
        )}
      </div>
    </Box>
  );
}
