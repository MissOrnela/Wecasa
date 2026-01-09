import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAppointment } from "@/store/bookingSlice";
import { useMemo, useState } from "react";
import { Basket } from "@/components/Basket";
import NextButton from "@/components/NextButton";
import { isValidDate } from "@/shared/utils";
import { AppointmentInput } from "@/components/AppointmentInput";
import { ROUTES } from "@/app/routes";
import { RequireAddress, RequireBasket } from "@/components/Guard";

export const AppointmentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [localAppointment, setLocalAppointment] = useState<string>("");
  //fix rerender date issue
  const minDateTime = useMemo(() => {
    return new Date().toISOString().slice(0, 16);
  }, []);

  const handleConfirm = async () => {
    dispatch(setAppointment(localAppointment));

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

          <NextButton
            disabled={!isValidDate(localAppointment)}
            label="Confirmer"
            onClick={() => handleConfirm()}
          />
          <Basket />
        </div>
      </RequireAddress>
    </RequireBasket>
  );
};
