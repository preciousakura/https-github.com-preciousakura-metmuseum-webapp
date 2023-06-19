"use client";
import { Box } from "./styles";
import { ConfigProvider, Pagination, Spin } from "antd";
import { ArtCard } from "../components";
import { useExploreData } from "../hooks/useExploreData";
import { useEffect, useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { useFavorites } from "../context/useFavorites";
import { useTheme } from "../context/useTheme";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Favorites() {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);
  const { favorites } = useFavorites();

  const { data: artData, loading } = useExploreData(page, favorites);

  const onChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    if (favorites.length <= 10) setPage(1);
  }, [page, favorites]);

  return (
    <Box>
      {loading ? (
        <div className="cards-area-spinner">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className="cards-area-cards">
          {favorites.length > 0 ? (
            <div className="cards">
              {artData.map((d) => {
                return <ArtCard key={d.objectID} art={d} />;
              })}
            </div>
          ) : (
            <p>Nenhum dado encontrado</p>
          )}{" "}
        </div>
      )}
      {favorites.length > 10 && (
        <ConfigProvider
          theme={{
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
    </Box>
  );
}
