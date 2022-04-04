import fetcher from "@/configs/fetcher";
import { TLandpad } from "./entities";

export const fetchAllLandPads = async (): Promise<TLandpad[]> => {
  const res = await fetcher.get("/landpads");
  return res.data;
};

export const fetchLandPad = async (id: string): Promise<TLandpad> => {
  const res = await fetcher.get(`/landpads/${id}`);
  return res.data;
};
