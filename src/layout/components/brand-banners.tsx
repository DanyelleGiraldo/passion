export default function BrandBanners() {
  const brands = [
    {
      title: "Eleva tu mirada con",
      brand: "GOICOECHEA",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Cabello",
      brand: "WOW",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Tu makeup",
      brand: "GOALS",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brands.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.title} ${item.brand}`}
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-2xl font-bold text-white mb-2">{item.brand}</p>
                <button className="bg-black hover:bg-gray-800 text-white uppercase text-sm px-4 py-2 rounded-md">
                  ¡Comprar ya!
                </button>
              </div>
            </div>
          ))}

          <div className="relative overflow-hidden rounded-lg lg:col-span-3">
            <img
              src="/placeholder.svg?height=200&width=1200"
              alt="Tu cabello siempre on point"
              width={1200}
              height={200}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-bold text-white">Tu cabello siempre on point</h3>
              <p className="text-2xl font-bold text-white mb-2">Shark AutoAirPRO</p>
              <button className="bg-black hover:bg-gray-800 text-white uppercase text-sm px-4 py-2 rounded-md">
                ¡Comprar ya!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

