import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function useBookingRequired() {
  const { basket, address } = useSelector((state: RootState) => state.booking);

  if (!address) {
    throw new Error("Address is required here");
  }

  return { basket, address };
}
