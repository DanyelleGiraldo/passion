"use client"

import { Heart, Search, ShoppingBag, User } from "lucide-react"
import { Button } from "./Buttons"
import { useCart } from "../cart/components/CartContext";

const navigation = [
  { name: "DESCUENTOS", href: "/descuentos" },
  { name: "MÁS VENDIDOS", href: "/mas-vendidos" },
  { name: "PERFUMES", href: "/perfumes" },
  { name: "CUIDADO PIEL", href: "/cuidado-piel" },
  { name: "MAQUILLAJE", href: "/maquillaje" },
  { name: "CAPILAR", href: "/capilar" },
  { name: "MARCAS", href: "/marcas" },
  { name: "KITS", href: "/kits" },
]

export function MainNav() {
  const { totalItems } = useCart()

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-3xl font-bold text-primary tracking-tight">
            BLIND
          </a>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex md:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-primary relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-gray-100 rounded-full"
                onClick={() => (window.location.href = "/cart")}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                    {totalItems}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

