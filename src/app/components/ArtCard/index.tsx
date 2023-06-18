import { Art } from "@/app/types/art";
import { Box } from "./styles";
interface ArtCardProps {
  art: Art;
}
export function ArtCard({ art }: ArtCardProps) {
  return <Box>{art.title}</Box>;
}
