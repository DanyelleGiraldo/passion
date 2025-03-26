"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"


import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react"
import type { Product } from "./products"

interface ProductCarouselProps {
  products: Product[]
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftPos, setScrollLeftPos] = useState(0)

  // Check if we need to show navigation arrows
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition)
      // Initial check
      checkScrollPosition()

      // Check on resize
      window.addEventListener("resize", checkScrollPosition)

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition)
        window.removeEventListener("resize", checkScrollPosition)
      }
    }
  }, [])

  // Scroll functions
  const scrollLeft = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    if (!scrollContainerRef.current) return
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    })
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeftPos(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeftPos - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeftPos(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeftPos - walk
    }
  }

  // Función para combinar clases
  const combineClasses = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div className="relative">
      {/* Product container with horizontal scroll */}
      <div
        ref={scrollContainerRef}
        className={combineClasses(
          "flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory",
          "scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        style={{
          scrollbarWidth: "thin",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-[280px] snap-start bg-white rounded-lg shadow-sm p-4 flex flex-col group relative"
          >
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full z-10">
                Nuevo
              </span>
            )}
            {product.discount && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                {product.discount}
              </span>
            )}
            <div className="relative mb-4 flex-grow">
              <a href={`/product/${product.id}`}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain aspect-square"
                />
              </a>
              <button className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="h-5 w-5 text-gray-500 hover:text-pink-500" />
              </button>
            </div>
            <div className="flex items-center mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={combineClasses(
                    "h-3 w-3",
                    i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                  )}
                />
              ))}
            </div>
            <a href={`/product/${product.id}`} className="text-xs text-gray-800 font-medium line-clamp-2 h-10 mb-1">
              {product.name}
            </a>
            <div className="flex items-baseline mb-3">
              {product.originalPrice ? (
                <>
                  <span className="text-red-500 font-bold mr-2">${product.price.toFixed(2)}</span>
                  <span className="text-gray-500 text-xs line-through">${product.originalPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-gray-800 font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            <button className="text-xs border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white w-full py-2 rounded-md">
              Agregar a la bolsa
            </button>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-100"
          aria-label="Ver productos anteriores"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full shadow-md p-2 z-10 hover:bg-gray-100"
          aria-label="Ver más productos"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      )}

      {/* Visual indicator that this is scrollable */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div className="w-10 h-1 bg-pink-500 rounded-full"></div>
        <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  )
}

