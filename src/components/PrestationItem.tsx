import { formatEuroFromCents } from "@/shared/utils";
import { addPrestation, removePrestation } from "@/store/bookingSlice";
import { RootState } from "@/store/store";
import { Prestation } from "@/types";
import { useDispatch, useSelector } from "react-redux";

export default function PrestationItem({
  prestation,
}: {
  prestation: Prestation;
}) {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.booking.basket);

  return (
    <li className=" ml-10 flex justify-between items-center">
      <span>
        {prestation.title} - {formatEuroFromCents(prestation.price)}
      </span>

      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white px-2 rounded mr-2"
          onClick={() => dispatch(addPrestation(prestation))}
        >
          ajouter
        </button>
        <button
          disabled={
            !basket.some(
              (pres: Prestation) => pres.reference === prestation.reference
            )
          }
          onClick={() => dispatch(removePrestation(prestation.reference))}
          className="bg-red-500 text-white px-2 rounded disabled:opacity-50"
        >
          supprimer
        </button>
      </div>
    </li>
  );
}
