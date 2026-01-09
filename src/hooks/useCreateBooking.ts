import { createBooking } from "@/api/booking";
import { CreateBookingPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useCreateBooking() {
  return useMutation({
    mutationFn: (payload: CreateBookingPayload) => createBooking(payload),
    onSuccess: (data) => {
      console.log("Booking created", data);
    },
    onError: (err) => {
      console.error("Booking failed", err);
    },
  });
}
