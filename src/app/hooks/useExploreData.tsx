import { useEffect, useMemo, useState } from "react";
import { objects } from "../services/objects";
import { Art } from "../types/art";

export function useExploreData(currentPage: number, objectsId?: number[]) {
  const [data, setData] = useState<Art[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (objectsId && objectsId.length > 0) {
      setData([]);
      setLoading(true);
      const promises: Promise<Art>[] = objectsId
        .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
        .map((i) => {
          return objects.getById(i);
        });
      Promise.all(promises)
        .then((data) => {
          setData(data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else setData([]);
  }, [currentPage, objectsId]);

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
}
