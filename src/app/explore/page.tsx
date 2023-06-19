"use client";
import { Box } from "./styles";
import { ConfigProvider, Pagination, Spin } from "antd";
import { useExplorePagination } from "../hooks/useExplorePagination";
import { ArtCard } from "../components";
import { useExploreData } from "../hooks/useExploreData";
import { useEffect, useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { useTheme } from "../context/useTheme";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Explore() {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);
  const { objectsData, loading: pageLoading } = useExplorePagination();
  const { data: artData, loading } = useExploreData(
    page,
    objectsData?.objectIDs
  );
  const onChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    if (objectsData?.total && objectsData.total <= 10) setPage(1);
  }, [page, objectsData]);

  return (
    <Box>
      {pageLoading ? (
        <div className="spinner">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <>
          <div className="search-input">
            <input placeholder="Busque " />
          </div>

          <div className="content">
            {loading ? (
              <div className="cards-area-spinner">
                <Spin indicator={antIcon} />
              </div>
            ) : (
              <div className="cards-area-cards">
                {objectsData?.total && objectsData.total > 0 ? (
                  <div className="cards">
                    {artData.map((d) => {
                      return <ArtCard key={d.objectID} art={d} />;
                    })}
                  </div>
                ) : (
                  <p>Nenhum dado encontrado</p>
                )}
              </div>
            )}

            {objectsData?.total && objectsData.total > 0 && (
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: theme.colors.primary[500],
                  },
                }}
              >
                <Pagination
                  total={objectsData?.total}
                  onChange={onChange}
                  defaultPageSize={10}
                />
              </ConfigProvider>
            )}
          </div>
        </>
      )}
    </Box>
  );
}
