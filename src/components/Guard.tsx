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
export function RequireAddress({ children }: { children: JSX.Element }) {
  const { address } = useSelector((state: RootState) => state.booking);
  return address ? children : <Navigate to={ROUTES.address} replace />;
}

export function RequireAppointment({ children }: { children: JSX.Element }) {
  const { appointment } = useSelector((state: RootState) => state.booking);
  return appointment ? children : <Navigate to={ROUTES.appointment} replace />;
}
