import { Category } from "@/types";
import CategorySection from "./CategorySection";

export default function Catalog({ categories }: { categories: Category[] }) {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <CategorySection key={category.reference} category={category} />
      ))}
    </div>
  );
}
