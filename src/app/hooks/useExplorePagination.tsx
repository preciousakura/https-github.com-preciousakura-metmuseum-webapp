import { useEffect, useMemo, useState } from "react";
import { objects } from "../services/objects";
import { IData } from "../types/data";

export function useExplorePagination() {
  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    objects
      .getAll()
      .then((objects: IData) => {
        setData(objects);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
}
