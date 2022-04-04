import { useQuery, UseQueryResult } from "react-query";
import { fetchAllRockets, fetchRocketDetail } from "./api";
import { TRockets } from "./entities";

const useAllRockets = (): UseQueryResult<TRockets[], Error> => {
  return useQuery<TRockets[], Error>("rockets", fetchAllRockets);
};

const useRocketDetail = (id: string): UseQueryResult<TRockets, Error> => {
  return useQuery<TRockets, Error>(["rockets", id], () =>
    fetchRocketDetail(id)
  );
};

export { useAllRockets, useRocketDetail };
