import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "@/store/bookingSlice";
import { Basket } from "@/components/Basket";
import { useNavigate } from "react-router-dom";
import NextButton from "@/components/NextButton";
import { ROUTES } from "@/app/routes";

export const AddressPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localAddress, setLocalAddress] = useState<string>("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Adresse</h1>
      <input
        type="text"
        value={localAddress}
        onChange={(e) => setLocalAddress(e.target.value)}
        placeholder="Entrez votre adresse"
        className="border p-2 rounded w-full mb-4"
      />

      <NextButton
        disabled={!localAddress}
        onClick={() => {
          dispatch(setAddress(localAddress));
          navigate(ROUTES.appointment);
        }}
      />
      <Basket />
    </div>
  );
};
