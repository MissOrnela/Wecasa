import { ROUTES } from "@/app/routes";
import {
  RequireAddress,
  RequireAppointment,
  RequireBasket,
} from "@/components/Guard";
import { clearBooking } from "@/store/bookingSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ConfirmationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <RequireBasket>
      <RequireAddress>
        <RequireAppointment>
          <div className="max-w-lg mx-auto space-y-4 text-center">
            <h1 className="text-3xl font-bold text-green-600">
              Votre reservation est confirmée ✅
            </h1>
            <button
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded"
              onClick={() => {
                navigate(ROUTES.prestations);
                dispatch(clearBooking());
              }}
            >
              Commencez une nouvelle reservation
            </button>
          </div>
        </RequireAppointment>
      </RequireAddress>
    </RequireBasket>
  );
}
