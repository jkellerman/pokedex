import { useQuery } from "@tanstack/react-query";
import { fetchYodaTranslation } from "../lib/yodaAPI";

const useYodaTranslation = (text: string, enabled: boolean) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["yodaTranslation", text],
    queryFn: () => fetchYodaTranslation(text),
    enabled: enabled,
    gcTime: Infinity,
    retry: false,
  });

  return {
    data: data,
    isLoading,
    isError,
  };
};

export default useYodaTranslation;
