"use client";
import { Box } from "./styles";
import { ConfigProvider, Pagination, Spin } from "antd";
import { useExplorePagination } from "../hooks/useExplorePagination";
import { ArtCard } from "../components";
import { useExploreData } from "../hooks/useExploreData";
import { useState } from "react";
import { useTheme } from "../lib";

import { LoadingOutlined } from "@ant-design/icons";

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

  {
    /* ) :  } */
  }
  return (
    <Box>
      {pageLoading ? (
        <Spin indicator={antIcon} />
      ) : (
        <>
          <div className="cards-area">
            {loading ? (
              <Spin indicator={antIcon} />
            ) : artData.length > 0 ? (
              <div className="cards">
                {artData.map((d) => {
                  return <ArtCard key={d.objectID} art={d} />;
                })}
              </div>
            ) : (
              <p>Nenhum dado encontrado</p>
            )}
          </div>

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
        </>
      )}
    </Box>
  );
}
