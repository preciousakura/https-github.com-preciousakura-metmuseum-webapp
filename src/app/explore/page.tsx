"use client";
import { Box } from "./styles";
import { ConfigProvider, Pagination, Spin, theme as antdTheme } from "antd";
import { useExplorePagination } from "../hooks/useExplorePagination";
import { ArtCard, SearchInput } from "../components";

import { LoadingOutlined } from "@ant-design/icons";
import { useTheme } from "../context/useTheme";
import { useMemo } from "react";
import { useSearch } from "../context/useSearch";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Explore() {
  const { theme } = useTheme();

  const {
    data: searchData,
    loading: searchLoading,
    isSearch,
    onChangePage,
    page,
  } = useSearch();
  const { objectsData, loading: objectLoading } = useExplorePagination();

  const object = useMemo(() => {
    return isSearch
      ? { pageData: searchData, pageLoading: searchLoading }
      : { pageData: objectsData, pageLoading: objectLoading };
  }, [isSearch, objectLoading, objectsData, searchData, searchLoading]);

  const splitObjectData = useMemo(() => {
    return object.pageData && object.pageData.objectIDs
      ? object.pageData.objectIDs.slice((page - 1) * 10, (page - 1) * 10 + 10)
      : [];
  }, [page, object]);

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
          {object.pageData && object.pageData.total > 0 ? (
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
                current={page}
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
