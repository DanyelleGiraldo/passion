
export default function StoreLocator() {
  return (
    <section className="py-8 bg-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              Ubica tu tienda Cromantic
              <br />
              más cercana.
            </h2>
            <button className="bg-white text-pink-600 hover:bg-gray-100 mt-2 px-4 py-2 rounded-md">Tiendas</button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Tienda Cromantic"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

