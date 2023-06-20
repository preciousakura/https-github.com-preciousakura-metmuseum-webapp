import { ensureAxiosParamOptions } from "../utils/required";
import api from "./config/api";
import { callService } from "./config/service";

interface SearchParams {
  q?: string;
  isHighlight?: boolean;
  title?: boolean;
  tags?: boolean;
  departmentId?: number;
  isOnView?: boolean;
  artistOrCulture?: boolean;
  medium?: boolean;
  hasImages?: boolean;
  geoLocation?: string;
  dateBegin?: number;
  dateEnd?: number;
}

const service = () => {
  const resource = "public/collection/v1/search";

  const getResults = async ({
    q,
    isHighlight,
    title,
    tags,
    departmentId,
    isOnView,
    artistOrCulture,
    medium,
    hasImages,
    geoLocation,
    dateBegin,
    dateEnd,
  }: SearchParams) => {
    const path = `${resource}?q=${q ?? ""}`;

    const options = ensureAxiosParamOptions({
      params: {
        isHighlight,
        title,
        tags,
        departmentId,
        isOnView,
        artistOrCulture,
        medium,
        hasImages,
        geoLocation,
        dateBegin,
        dateEnd,
      },
    });

    const response = await callService(() => api.get(path, options));
    return response.data;
  };

  return { getResults };
};

export const search = service();
