

export default function BenefitsSection() {
  const benefits = [
    {
      title: "DESCUENTOS EN",
      description: ["Compras desde $499", "Código: CROMANTIC10"],
      icon: "/placeholder.svg?height=50&width=50",
    },
    {
      title: "ENVÍOS EN",
      description: ["diferentes sucursales"],
      icon: "/placeholder.svg?height=50&width=50",
    },
    {
      title: "ENVÍO GRATIS",
      description: ["por compras mayores a $1500.00", "Código: ENVIOGRATIS"],
      icon: "/placeholder.svg?height=50&width=50",
    },
    {
      title: "COMPRAS DESDE",
      description: ["cualquier lugar sin salir", "de casa o trabajo"],
      icon: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-3">
                <img src={benefit.icon || "/placeholder.svg"} alt={benefit.title} width={50} height={50} />
              </div>
              <h3 className="text-sm font-semibold mb-1">{benefit.title}</h3>
              {benefit.description.map((line, i) => (
                <p key={i} className="text-xs text-gray-600">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

