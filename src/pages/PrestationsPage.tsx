import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { Basket } from "@/components/Basket";
import { usePrestations } from "@/hooks/usePrestation";
import Catalog from "@/components/Catalog";
import NextButton from "@/components/NextButton";
import ErrorComponent from "@/components/ErrorComponent";
import Loading from "@/components/Loading";
import { ROUTES } from "@/app/routes";

export function PrestationsPage() {
  const { data, isLoading, error } = usePrestations();
  const basket = useSelector((state: RootState) => state.booking.basket);
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (error)
    return (
      <ErrorComponent message="Erreur lors du changement des prestations" />
    );

  return (
    <div className=" mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Choisissez vos prestations</h1>
      <Catalog categories={data?.categories ?? []} />

      <NextButton
        disabled={basket.length === 0}
        onClick={() => navigate(ROUTES.address)}
      />

      <Basket />
    </div>
  );
}
