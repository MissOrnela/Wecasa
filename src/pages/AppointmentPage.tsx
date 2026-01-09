import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAppointment } from "@/store/bookingSlice";
import { useMemo, useState } from "react";
import { Basket } from "@/components/Basket";
import { RequireAddress, RequireBasket } from "@/components/Guard";
import NextButton from "@/components/NextButton";
import { useCreateBooking } from "@/hooks/useCreateBooking";
import { isValidDate } from "@/shared/utils";
import { AppointmentInput } from "@/components/AppointmentInput";
import { useBookingRequired } from "@/hooks/useBookingRequire";
import { ROUTES } from "@/app/routes";

export const AppointmentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { basket, address } = useBookingRequired();
  const [localAppointment, setLocalAppointment] = useState<string>("");
  const createMutation = useCreateBooking();
  //fix rerender date issue
  const minDateTime = useMemo(() => {
    return new Date().toISOString().slice(0, 16);
  }, []);

  const handleConfirm = async () => {
    dispatch(setAppointment(localAppointment));
    await createMutation.mutateAsync({
      prestations: basket.map((p) => p.reference),
      address,
      appointment: new Date(localAppointment).toISOString(),
    });
    navigate(ROUTES.confirmation);
  };

  return (
    <RequireBasket>
      <RequireAddress>
        <div className="mx-auto space-y-4 p-4">
          <h1 className="text-xl  ml-2 font-bold mb-4">
            Veuillez choisir l'heure du Rendez-vous
          </h1>
          <AppointmentInput
            value={localAppointment}
            min={minDateTime}
            onChange={setLocalAppointment}
          />
          {createMutation.isError ? (
            <span className=" p-4 text-sm text-red-800">
              {String(createMutation.error)}
            </span>
          ) : null}

          <NextButton
            disabled={!isValidDate(localAppointment)}
            label={createMutation.isPending ? "Confirmation…" : "Confirmer"}
            onClick={() => handleConfirm()}
          />
          <Basket />
        </div>
      </RequireAddress>
    </RequireBasket>
  );
};
