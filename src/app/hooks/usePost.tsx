import { useEffect, useMemo, useState } from "react";
import { objects } from "../services/objects";
import { Art } from "../types/art";

export function usePost(id: number) {
  const [data, setData] = useState<Art>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    objects
      .getById(id)
      .then((d) => {
        setData(d);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [id]);

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
}
