"use client";
import { Box } from "./styles";
import { Pagination } from "antd";
import { useExplorePagination } from "../hooks/useExplorePagination";
import { ArtCard } from "../components";
import { useExploreData } from "../hooks/useExploreData";
import { useState } from "react";

export default function Explore() {
  const [page, setPage] = useState(1);
  const { data } = useExplorePagination();
  const { data: artData } = useExploreData(page, data?.objectIDs);
  const onChange = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
    <Box>
      {artData.map((d) => {
        return <ArtCard key={d.objectID} art={d} />;
      })}
      <Pagination
        total={data?.total}
        onChange={onChange}
        defaultPageSize={10}
      />
    </Box>
  );
}
