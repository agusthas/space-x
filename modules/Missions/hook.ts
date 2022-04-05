import { useQuery, UseQueryResult } from "react-query";
import { TMission } from "./entities";
import { fetchAllMissions, fetchSingleMission } from "./api";

const useAllMissions = (): UseQueryResult<TMission[], Error> => {
  return useQuery("missions", fetchAllMissions);
};

const useMission = (missionId: string): UseQueryResult<TMission, Error> => {
  return useQuery(["missions", missionId], () => fetchSingleMission(missionId));
};

export { useAllMissions, useMission };
