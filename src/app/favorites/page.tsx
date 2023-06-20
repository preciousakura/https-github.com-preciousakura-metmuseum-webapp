"use client";
import { Box } from "./styles";
import { ConfigProvider, Pagination, Spin, theme as antdTheme } from "antd";
import { ArtCard } from "../components";
import { useExploreData } from "../hooks/useExploreData";
import { useEffect, useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { useFavorites } from "../context/useFavorites";
import { useTheme } from "../context/useTheme";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Favorites() {
  const { theme } = useTheme();
  const { favorites } = useFavorites();

  const [page, setPage] = useState(1);

  const { data: artData, loading } = useExploreData(page, favorites);

  const onChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    if (artData.length < 1) setPage(page - 1 === 0 ? 1 : page - 1);
    if (favorites.length <= 10) setPage(1);
  }, [page, favorites, artData]);

  return (
    <Box>
      <div className="header">
        <h1>Favoritos</h1>
      </div>

      <div className="content">
        {loading ? (
          <div className="content-feedback">
            <Spin indicator={antIcon} />
          </div>
        ) : favorites.length > 0 ? (
          <div className="content-cards-area">
            {artData.map((d) => {
              return <ArtCard key={d.objectID} art={d} />;
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
