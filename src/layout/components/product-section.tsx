import ProductCarousel from "./product-carousel";
import { products } from "../../shop/components/data/products";
import type { Product } from "./products";

interface ProductSectionProps {
  title: string;
  categories: string[];
  icon?: string;
}

export default function ProductSection({ title, categories, icon }: ProductSectionProps) {
  const filteredProducts = products.filter((product) => categories.includes(product.category));

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          {icon && <span className="text-pink-500 mr-2">{icon}</span>}
          <h2 className="text-2xl md:text-3xl font-bold uppercase">{title}</h2>
          {icon && <span className="text-pink-500 ml-2">{icon}</span>}
        </div>

        <div className="px-4 md:px-8">
          <ProductCarousel products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}
