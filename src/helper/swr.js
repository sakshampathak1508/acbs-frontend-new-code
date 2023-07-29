import useSWR from "swr";

import { API_URL } from "../constant/api";

const defaultFetcher = (...args) => fetch(...args).then(res => res.json());

export const useAPI = (endpoint, fetcher = defaultFetcher) => {
  const { data, error, isLoading } = useSWR(`${API_URL}${endpoint}`, fetcher, {
    revalidateIfStale: true,
    refetchOnMount: false,
  });

  return { data, error, isLoading };
};
