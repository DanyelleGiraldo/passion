"use client"

import { useCart } from "./components/CartContext"
import { Button } from "../components/Buttons"
import { MainNav } from "../components/Main-nav"
import { TopBar } from "../components/Top-bar"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import { useState } from "react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "COP",
    }).format(price)
  }

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    setTimeout(() => {
      alert("¡Compra realizada con éxito!")
      clearCart()
      window.location.href = "/"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <MainNav />

      <div className="container mx-auto px-6 lg:px-10 py-8">
        <div className="flex items-center mb-6">
          <a href="/" className="flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la tienda
          </a>
          <h1 className="text-2xl font-bold text-center flex-1">Mi Carrito</h1>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-500 mb-6">Parece que aún no has añadido ningún producto a tu carrito</p>
            <Button onClick={() => (window.location.href = "/")}>Continuar comprando</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Productos en tu carrito</h2>

                  <div className="divide-y">
                    {items.map((item) => (
                      <div key={item.id} className="py-4 flex flex-col sm:flex-row">
                        <div className="sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 sm:ml-4">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-500">{item.variantName}</p>
                              <p className="font-semibold text-primary mt-1">{formatPrice(item.price)}</p>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>

                          <div className="flex items-center mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="mx-3 w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-lg font-semibold mb-4">Resumen del pedido</h2>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span>Gratis</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(totalPrice)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Impuestos incluidos</p>
                  </div>
                </div>

                <Button className="w-full" onClick={handleCheckout} disabled={isCheckingOut}>
                  {isCheckingOut ? "Procesando..." : "Finalizar compra"}
                </Button>

                <button
                  className="w-full text-center mt-4 text-sm text-gray-500 hover:text-primary"
                  onClick={() => (window.location.href = "/")}
                >
                  Continuar comprando
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

