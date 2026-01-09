import { UniverseResponse } from "@/types";
import { env } from "../shared/env";

export async function fetchPrestations(): Promise<UniverseResponse> {
  const url = `${env.API_BASE_URL}/universe`;
  const res = await fetch(url, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error("Failed to fetch prestations");
  return res.json();
}
