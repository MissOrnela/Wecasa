import { Category, Prestation } from "@/types";
import PrestationItem from "./PrestationItem";

export default function CategorySection({ category }: { category: Category }) {
  return (
    <section className="m-5 ">
      <h2 className="font-bold text-xl mt-2 underline">{category.title}</h2>

      <ul className="mt-2 space-y-2">
        {category.prestations.map((p: Prestation) => (
          <PrestationItem key={p.reference} prestation={p} />
        ))}
      </ul>
    </section>
  );
}
