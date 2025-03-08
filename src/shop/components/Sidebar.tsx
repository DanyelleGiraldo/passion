import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./Buttons";
import { useFilter } from "./context/FilterContext";
import { products } from "./data/products";

const getCategoryCounts = () => {
  const categoryCounts: Record<string, number> = {};
  products.forEach((product) => {
    categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
  });

  return [
    { name: "Lava", subcategories: ["Shampoo", "Acondicionador", "Tratamientos"], count: categoryCounts["Lava"] || 0 },
    { name: "Tratar", subcategories: ["Mascarillas", "Ampollas", "Sueros"], count: categoryCounts["Tratar"] || 0 },
    { name: "Estilizar", subcategories: ["Gel", "Cera", "Spray"], count: categoryCounts["Estilizar"] || 0 },
    { name: "Herramientas", subcategories: ["Secadores", "Planchas", "Cepillos"], count: categoryCounts["Herramientas"] || 0 },
  ];
};

export function Sidebar() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const { setSelectedCategory, setSelectedSubcategory } = useFilter();
  const categories = getCategoryCounts(); // Obtener categorías con conteo dinámico

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
    setSelectedCategory(categoryName);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <aside className="hidden md:block">
      <div className="sticky top-4 py-6">
        <h3 className="mb-4 text-lg font-semibold">Categorías</h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <div key={category.name}>
              <Button
                variant="outline"
                className="w-full justify-between font-normal text-left hover:border-primary"
                onClick={() => toggleCategory(category.name)}
              >
                <span>
                  {category.name} ({category.count})
                </span>
                {openCategory === category.name ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>

              {openCategory === category.name && (
                <div className="ml-4 mt-2 space-y-1">
                  {category.subcategories.map((sub) => (
                    <Button
                      key={sub}
                      variant="ghost"
                      className="w-full justify-start text-sm text-gray-600"
                      onClick={() => handleSubcategoryClick(sub)}
                    >
                      {sub}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
