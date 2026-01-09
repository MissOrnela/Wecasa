import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchPrestations } from "@/api/prestations";
import { UniverseResponse } from "@/types";

export function usePrestations() {
  return useSuspenseQuery<UniverseResponse>({
    queryKey: ["prestations"],
    queryFn: fetchPrestations,
    staleTime: 1000 * 60 * 20, // we refetch data after 20 min
    retry: 1,
  });
}
