import fetcher from "@/configs/fetcher";
import { TMission } from "./entities";

export const fetchAllMissions = async (): Promise<TMission[]> => {
  const response = await fetcher.get("/missions");
  return response.data;
};

export const fetchSingleMission = async (
  missionId: string
): Promise<TMission> => {
  const response = await fetcher.get(`/missions/${missionId}`);
  return response.data;
};
