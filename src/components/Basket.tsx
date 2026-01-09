import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { formatDuration, formatEuroFromCents } from "@/shared/utils";

export const Basket = () => {
  const basket = useSelector((state: RootState) => state.booking.basket);
  const totalPrice = basket.reduce((sum, p) => sum + p.price, 0);
  const totalDuration = basket.reduce((sum, p) => sum + p.duration, 0);

  return (
    <div className="border p-4 mt-6 rounded bg-blue-700">
      <h3 className="font-bold mb-2">Panier</h3>
      <ul>
        {basket.map((p, index) => (
          <li key={`${p.reference}-${index}`}>
            {p.title} - {formatEuroFromCents(p.price)}
          </li>
        ))}
      </ul>
      <p>Total: {formatEuroFromCents(totalPrice)}</p>
      <p>Durée: {formatDuration(totalDuration)}</p>
    </div>
  );
};
