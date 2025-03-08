"use client"

import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Buttons";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../cart/components/CartContext";
import { useFilter } from "./context/FilterContext";

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

const products: Product[] = [
  {
    id: 1,
    name: "Kenzo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "10%OFF",
    price: 89.99,
    description: "Una fragancia floral y fresca que evoca la sensación de libertad y felicidad. Perfecta para el uso diario.",
    category: "MUJER",
    subcategory: "Perfumes",
    variants: [
      { id: 101, name: "Eau de Parfum 50ml", price: 89.99 },
      { id: 102, name: "Eau de Parfum 100ml", price: 129.99 },
      { id: 103, name: "Travel Set", price: 69.99 },
    ],
  },
  {
    id: 2,
    name: "Jean Pascal",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "60%OFF",
    price: 45.99,
    description: "Una fragancia elegante y sofisticada con notas de madera y especias. Ideal para ocasiones especiales.",
    category: "HOMBRE",
    subcategory: "Perfumes",
    variants: [
      { id: 201, name: "Eau de Toilette 50ml", price: 45.99 },
      { id: 202, name: "Eau de Toilette 100ml", price: 75.99 },
    ],
  },
  {
    id: 3,
    name: "Tous",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "20%OFF",
    price: 65.5,
    description: "Una fragancia dulce y juvenil con notas de frutas y flores. Perfecta para el día a día.",
    category: "MUJER",
    subcategory: "Perfumes",
    variants: [
      { id: 301, name: "Eau de Parfum 30ml", price: 65.5 },
      { id: 302, name: "Eau de Parfum 90ml", price: 95.5 },
      { id: 303, name: "Gift Set", price: 110.0 },
    ],
  },
  {
    id: 4,
    name: "Kenzo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "10%OFF",
    price: 79.99,
    description: "Una fragancia fresca y energizante con notas cítricas. Ideal para el uso diario y deportivo.",
    category: "HOMBRE",
    subcategory: "Perfumes",
    variants: [
      { id: 401, name: "Eau de Toilette 50ml", price: 79.99 },
      { id: 402, name: "Eau de Toilette 100ml", price: 119.99 },
    ],
  },
  {
    id: 5,
    name: "Giorgio Armani",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nuUR3CghVVS3LBNyS77xqeVbUW0jR6.png",
    discount: "10%OFF",
    price: 120.0,
    description: "Una fragancia intensa y seductora con notas amaderadas y especiadas. Perfecta para la noche.",
    category: "HOMBRE",
    subcategory: "Perfumes",
    variants: [
      { id: 501, name: "Eau de Parfum 50ml", price: 120.0 },
      { id: 502, name: "Eau de Parfum 100ml", price: 180.0 },
      { id: 503, name: "Luxury Gift Set", price: 220.0 },
    ],
  },
];

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
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-xl">
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

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Selecciona una versión:</label>
                <select
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={selectedVariant || ""}
                  onChange={(e) => setSelectedVariant(Number(e.target.value))}
                >
                  {selectedProduct.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.name} - {formatPrice(variant.price)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-primary">
                  {formatPrice(
                    selectedProduct.variants.find((v) => v.id === selectedVariant)?.price || selectedProduct.price,
                  )}
                </span>
                <span className="text-sm text-gray-500">{selectedProduct.discount}</span>
              </div>

              <Button className="w-full mt-auto" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Añadir al carrito
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

