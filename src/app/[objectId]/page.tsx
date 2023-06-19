"use client";
import { Box } from "./styles";

export default function SingleObject({ params }: any) {
  return <Box>{params.objectId}</Box>;
}
