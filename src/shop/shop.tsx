import { MainNav } from "./components/Main-nav"
import { TopBar } from "./components/Top-bar"
import { Sidebar } from "./components/Sidebar"
import { ProductGrid } from "./components/Product-grid"

export default function Shop() {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <MainNav />
        <div className="container mx-auto px-6 lg:px-10 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] lg:gap-12">
            <Sidebar />
            <main>
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-primary">MEJOR CALIFICADOS</h2>
              <ProductGrid />
            </main>
          </div>
        </div>
      </div>
    )
  }