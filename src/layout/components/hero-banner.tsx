export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-200 to-pink-200">
      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                El único match que
                <br />
                no decepciona
              </h1>
              <p className="text-white text-lg mb-4">20% off (Máscara pestañina + Labial Vinyl)</p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-pink-600 hover:bg-pink-700 text-white uppercase font-bold px-4 py-2 rounded-md">
                  ¡Comprar ya!
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Maybelline Promotion"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
        <button className="w-2 h-2 rounded-full bg-white"></button>
        <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
      </div>
    </section>
  )
}

