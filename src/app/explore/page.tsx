"use client";
import { Box } from "./styles";
import { ConfigProvider, Pagination, Spin, theme as antdTheme } from "antd";
import { useExplorePagination } from "../hooks/useExplorePagination";
import { ArtCard, SearchInput } from "../components";
import { useExploreData } from "../hooks/useExploreData";

import { LoadingOutlined } from "@ant-design/icons";
import { useTheme } from "../context/useTheme";
import { useEffect, useState } from "react";
import { useSearch } from "../context/useSearch";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Explore() {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);

  const { data: searchData, loading: searchLoading, isSearch } = useSearch();
  const { objectsData, loading: objectLoading } = useExplorePagination();

  const object = isSearch
    ? { pageData: searchData, pageLoading: searchLoading }
    : { pageData: objectsData, pageLoading: objectLoading };

  const { data, loading } = useExploreData(page, object.pageData?.objectIDs);

  const onChangePage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    setPage(1);
  }, [isSearch]);

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

      {object.pageLoading ? (
        <div className="spinner">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className="content">
          {loading ? (
            <div className="content-feedback">
              <Spin indicator={antIcon} />
            </div>
          ) : object.pageData?.total && object.pageData?.total > 0 ? (
            <div className="content-cards-area">
              {data.map((d) => {
                return <ArtCard key={d.objectID} art={d} />;
              })}
            </div>
          ) : (
            <div className="content-feedback">
              <p>Nenhum dado encontrado</p>
            </div>
          )}

          {object.pageData?.total && object.pageData?.total > 0 && (
            <ConfigProvider
              theme={{
                algorithm: theme.isDark ? antdTheme.darkAlgorithm : undefined,

                token: {
                  colorPrimary: theme.colors.primary[500],
                },
              }}
            >
              <Pagination
                total={object.pageData?.total}
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
