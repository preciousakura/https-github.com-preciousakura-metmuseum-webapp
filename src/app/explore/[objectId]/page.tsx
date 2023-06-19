import { ArtPost } from "@/app/components";

export default function SingleObject({ params }: any) {
  return <ArtPost id={params.objectId} />;
}
