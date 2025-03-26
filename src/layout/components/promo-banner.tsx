

interface PromoBannerProps {
  title: string
  subtitle: string
  bgColor: string
  imageUrl: string
}

export default function PromoBanner({ title, subtitle, bgColor, imageUrl }: PromoBannerProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${bgColor} p-4 flex flex-col md:flex-row items-center`}>
      <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-xl font-bold mb-3">{subtitle}</p>
        <button className="bg-black hover:bg-gray-800 text-white uppercase text-sm px-4 py-2 rounded-md">
          ¡Comprar ya!
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}
