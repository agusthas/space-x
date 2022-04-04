import { useQuery, UseQueryResult } from "react-query";
import { fetchAllRockets } from "./api";
import { TRockets } from "./entities";

const useAllRockets = (): UseQueryResult<TRockets[], Error> => {
  return useQuery<TRockets[], Error>("rockets", fetchAllRockets);
};

export { useAllRockets };
