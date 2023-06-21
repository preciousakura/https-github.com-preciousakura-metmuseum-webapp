import { useEffect, useMemo, useState } from "react";
import { objects } from "../services/objects";
import { IData } from "../types/data";
import { useSearch } from "../context/useSearch";

export function useExplorePagination() {
  const [objectsData, setObjectsData] = useState<IData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { isSearch } = useSearch();

  useEffect(() => {
    if (!isSearch) {
      setLoading(true);
      objects
        .getAll()
        .then((objects: IData) => {
          setObjectsData(objects);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [isSearch]);

  return useMemo(
    () => ({ loading, error, objectsData }),
    [loading, error, objectsData]
  );
}
