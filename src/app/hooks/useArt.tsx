import { useEffect, useMemo, useState } from "react";
import { objects } from "../services/objects";
import { Art } from "../types/art";

export function useArt(id: number) {
  const [data, setData] = useState<Art>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    objects
      .getById(id)
      .then((d) => {
        setData(d);
      })
      .catch((e: any) => setError(e.response.data.message))
      .finally(() => setLoading(false));
  }, [id]);

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
}
