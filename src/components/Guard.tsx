import { Navigate } from "react-router-dom";
import { JSX } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { ROUTES } from "@/app/routes";
export function RequireBasket({ children }: { children: JSX.Element }) {
  const { basket } = useSelector((state: RootState) => state.booking);
  return basket.length > 0 ? (
    children
  ) : (
    <Navigate to={ROUTES.prestations} replace />
  );
}
