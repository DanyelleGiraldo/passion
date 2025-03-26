import HeroBanner from "./components/hero-banner"
import ProductSection from "./components/product-section"
import PromoBannersSection from "./components/promo-banners-section"
import BrandBanners from "./components/brand-banners"
import BenefitsSection from "./components/benefits-section"
import StoreLocator from "./components/store-locator"
import BrandPromos from "./components/brand-promos"
import InstagramSection from "./components/instagram-section"
import Footer from "./components/footer"
import Header from "./components/header"

import { products } from "../shop/components/data/products"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductSection title="Cuidado del Cabello" categories={["Lava"]} icon="💆‍♀️" />
      <PromoBannersSection />
      <ProductSection title="Herramientas de Estilizado" categories={["Herramientas"]} icon="💇‍♂️" />
      <BenefitsSection />
      <StoreLocator />
      <BrandPromos />
      <InstagramSection />
      <Footer />
    </main>
  )
}
