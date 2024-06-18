import { useQuery } from "@tanstack/react-query";
import { fetchYodaTranslation } from "../lib/yodaAPI";

const useYodaTranslation = (text: string) => {
  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["yodaTranslation", text],
    queryFn: () => fetchYodaTranslation(text),
    enabled: false,
    gcTime: Infinity,
    retry: false,
  });

  return {
    data: data,
    isSuccess,
    isLoading,
    isError,
    refetch,
  };
};

export default useYodaTranslation;
