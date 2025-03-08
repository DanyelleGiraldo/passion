import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Buttons";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../cart/components/CartContext";
import { useFilter } from "./context/FilterContext";
import { products } from "./data/products";

interface Product {
  id: number;
  name: string;
  image: string;
  discount: string;
  price: number;
  description: string;
  category: string;
  subcategory: string;
  variants: { id: number; name: string; price: number }[];
}

export function ProductGrid() {
  const { selectedCategory, selectedSubcategory } = useFilter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) => {
    if (!selectedCategory) return true;
    if (!selectedSubcategory) return product.category === selectedCategory;
    return product.category === selectedCategory && product.subcategory === selectedSubcategory;
  });

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0].id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setSelectedVariant(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedVariant) {
      const variant = selectedProduct.variants.find((v) => v.id === selectedVariant);
      if (variant) {
        addToCart({
          productId: selectedProduct.id,
          variantId: variant.id,
          name: selectedProduct.name,
          variantName: variant.name,
          price: variant.price,
          image: selectedProduct.image,
        });
        alert("¡Producto añadido al carrito!");
        closeModal();
      }
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "COP",
    }).format(price);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div 
              className="aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-xl cursor-pointer"
              onClick={() => openModal(product)}
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {product.discount && (
              <div className="absolute left-2 top-2 bg-[#0A3641] text-white px-2 py-1 text-xs font-semibold rounded">
                {product.discount}
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="mt-1 text-lg font-semibold text-primary">{formatPrice(product.price)}</p>
              <Button className="mt-2 w-full" onClick={() => openModal(product)}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Comprar
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedProduct.name}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/5 flex-shrink-0">
              <div className="h-full rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-contain max-h-[300px] md:max-h-full"
                />
              </div>
            </div>
            <div className="md:w-3/5 flex flex-col">
              <p className="mb-4 text-gray-700">{selectedProduct.description}</p>
              <Button className="w-full mt-auto" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Añadir al carrito
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
