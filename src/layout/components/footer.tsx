
import { Facebook, Instagram, Youtube, InstagramIcon as Tiktok, PinIcon as Pinterest } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-bold mb-4">as de interés</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {[
                "Preguntas frecuentes",
                "Política de envío",
                "Política de devoluciones",
                "Términos y condiciones",
                "Aviso de privacidad",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4">Suscríbete</h3>
            <p className="text-xs text-gray-400 mb-3">Recibe nuestras novedades y ofertas</p>
            <div className="mb-3">
              <input
                type="email"
                placeholder="e-mail*"
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
            </div>
            <div className="flex items-center mb-3">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-xs text-gray-400">
                Acepto términos y condiciones y autorizo el tratamiento de datos personales*
              </label>
            </div>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md">
              Suscribirse
            </button>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Instagram className="h-5 w-5" />, href: "#" },
                { icon: <Youtube className="h-5 w-5" />, href: "#" },
                { icon: <Tiktok className="h-5 w-5" />, href: "#" },
                { icon: <Pinterest className="h-5 w-5" />, href: "#" },
              ].map((social, index) => (
                <a key={index} href={social.href} className="text-white hover:text-pink-500">
                  {social.icon}
                </a>
              ))}
            </div>

            <h3 className="text-sm font-bold mb-4">Medios de pago</h3>
            <div className="flex flex-wrap gap-2">
              {["Visa", "Mastercard", "American Express", "PayPal", "Oxxo"].map((payment, index) => (
                <div key={index} className="bg-gray-800 rounded px-2 py-1 text-xs">
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Cromantic. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

