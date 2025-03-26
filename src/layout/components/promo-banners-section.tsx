import PromoBanner from "./promo-banner"

export default function PromoBannersSection() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PromoBanner
            title="La piel necesita ser tocada"
            subtitle="TOCOCO"
            bgColor="bg-blue-100"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PromoBanner
            title="Dale a tu maquillaje el toque"
            subtitle="RubyRose"
            bgColor="bg-pink-100"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <PromoBanner
            title="SPF sin excusas"
            subtitle="ISDIN"
            bgColor="bg-gray-100"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
        </div>
      </div>
    </section>
  )
}

