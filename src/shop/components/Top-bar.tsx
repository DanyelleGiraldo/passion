import { MapPin, PhoneIcon as WhatsApp } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-2.5 text-sm px-6 lg:px-10">
        <a href="/tiendas" className="flex items-center gap-2 hover:text-gray-300">
          <MapPin size={18} />
          Localizador de tiendas
        </a>
        <a href="/whatsapp" className="flex items-center gap-2 hover:text-gray-300">
          <WhatsApp size={18} />
          Compra aquí por WhatsApp
        </a>
      </div>
    </div>
  )
}

