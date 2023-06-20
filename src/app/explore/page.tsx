"use client";
import { Box } from "./styles";
import { ConfigProvider, Pagination, Spin, theme as antdTheme } from "antd";
import { useExplorePagination } from "../hooks/useExplorePagination";
import { ArtCard, SearchInput } from "../components";
import { useExploreData } from "../hooks/useExploreData";

import { LoadingOutlined } from "@ant-design/icons";
import { useTheme } from "../context/useTheme";
import { useSearch } from "../context/useSearch";
import { useEffect } from "react";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Explore() {
  const { theme } = useTheme();
  const { data: searchData, page, onChangePage } = useSearch();
  const { objectsData, loading: pageLoading } = useExplorePagination();

  // const object = searchData && searchData.total > 0 ? searchData : objectsData;
  const object = objectsData;

  const { data: artData, loading } = useExploreData(page, object?.objectIDs);

  useEffect(() => {
    onChangePage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <div className="header">
        <div className="title">
          <h1>Explore</h1>
          <p>
            Travel around the world and across 5,000 years of history through
            490,000+ works of art.
          </p>
        </div>
        <SearchInput />
      </div>

      {pageLoading ? (
        <div className="spinner">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className="content">
          {loading ? (
            <div className="content-feedback">
              <Spin indicator={antIcon} />
            </div>
          ) : object?.total && object.total > 0 ? (
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

          {object?.total && object.total > 0 && (
            <ConfigProvider
              theme={{
                algorithm: theme.isDark ? antdTheme.darkAlgorithm : undefined,

                token: {
                  colorPrimary: theme.colors.primary[500],
                },
              }}
            >
              <Pagination
                total={object?.total}
                onChange={onChangePage}
                defaultPageSize={10}
              />
            </ConfigProvider>
          )}
        </div>
      )}
    </Box>
  );
}
