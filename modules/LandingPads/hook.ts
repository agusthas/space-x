import { useQuery, UseQueryResult } from "react-query";
import { fetchAllLandPads, fetchLandPad } from "./api";
import { TLandpad } from "./entities";

const useAllLandPads = (): UseQueryResult<TLandpad[], Error> => {
  return useQuery<TLandpad[], Error>("landpads", fetchAllLandPads);
};

const useLandPad = (id: string): UseQueryResult<TLandpad, Error> => {
  return useQuery<TLandpad, Error>(["landpad", id], () => fetchLandPad(id), {
    retry: (failureCount, error) => {
      if (error.message === "Request failed with status code 404") return false;
      return failureCount <= 3;
    },
  });
};

export { useAllLandPads, useLandPad };
