

export default function BrandPromos() {
  const promos = [
    {
      title: "Una piel feliz comienza con un",
      subtitle: "FPS diario",
      brand: "hello sunday",
      bgColor: "bg-pink-100",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Menos drama más",
      subtitle: "skincare",
      brand: "REVOX",
      bgColor: "bg-blue-100",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {promos.map((promo, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg ${promo.bgColor}`}>
              <img
                src={promo.image || "/placeholder.svg"}
                alt={promo.title}
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold">{promo.title}</h3>
                <p className="text-xl font-bold mb-2">{promo.subtitle}</p>
                <p className="text-sm mb-2">{promo.brand}</p>
                <button className="bg-black hover:bg-gray-800 text-white uppercase text-sm px-4 py-2 rounded-md">
                  ¡Comprar ya!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

