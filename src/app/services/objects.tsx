import { Art } from "../types/art";
import { IData } from "../types/data";
import api from "./config/api";
import { callService } from "./config/service";

const service = () => {
  const resource = "public/collection/v1/objects";

  async function getAll() {
    const path = `${resource}`;
    const response = await callService(() => api.get<IData>(path));
    return response.data;
  }

  async function getById(id: number) {
    const path = `${resource}/${id}`;
    const response = await callService(() => api.get<Art>(path));
    return response.data;
  }

  return { getAll, getById };
};

export const objects = service();
