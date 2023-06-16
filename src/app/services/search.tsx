import api from "./config/api";
import { callService } from "./config/service";

const service = () => {
  const resource = "public/collection/v1/search";

  const getResults = async () => {
    const path = `${resource}?q=sunflowers`;
    const response = await callService(() => api.get(path));
    return response.data;
  };

  return { getResults };
};

export const search = service();
