"use client";
import { Box } from "./styles";
import { Pagination, Spin } from "antd";
import { useExplorePagination } from "../hooks/useExplorePagination";
import { ArtCard } from "../components";
import { useExploreData } from "../hooks/useExploreData";
import { useState } from "react";

export default function Explore() {
  const [page, setPage] = useState(1);
  const { objectsData, loading: pageLoading } = useExplorePagination();
  const { data: artData, loading } = useExploreData(
    page,
    objectsData?.objectIDs
  );
  const onChange = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
    <Box>
      {loading ? (
        <Spin />
      ) : (
        artData.map((d) => {
          return <ArtCard key={d.objectID} art={d} />;
        })
      )}
      {pageLoading ? (
        <Spin />
      ) : (
        <Pagination
          total={objectsData?.total}
          onChange={onChange}
          defaultPageSize={10}
        />
      )}
    </Box>
  );
}
