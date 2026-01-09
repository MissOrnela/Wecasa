import { CreateBookingPayload } from "@/types";
import { env } from "../shared/env";

export const createBooking = async (data: CreateBookingPayload) => {
  const url = `${env.API_BASE_URL}/booking`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Booking failed");

  return res.json();
};
