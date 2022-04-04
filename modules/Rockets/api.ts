import fetcher from "@/configs/fetcher";
import { TRockets } from "./entities";

export const fetchAllRockets = async (): Promise<TRockets[]> => {
  const res = await fetcher.get("/rockets");
  return res.data;
};

export const fetchRocketDetail = async (id: string): Promise<TRockets> => {
  const res = await fetcher.get(`/rockets/${id}`);
  return res.data;
};
