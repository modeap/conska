"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedBannerBackground from "./animated-banner-background"

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* Taustakuva */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/concrete-texture.png" alt="Concrete texture" fill priority className="object-cover" />
      </div>

      {/* Tumma overlay */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Animated background */}
      <AnimatedBannerBackground />

      {/* Content container */}
      <div className="relative z-20 container h-full flex flex-col justify-center items-center">
        {/* Logo with animation */}
        <div
          className={`transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Image
            src="/images/conska-logo.png"
            alt="Conska Oy"
            width={400}
            height={100}
            className="mb-12 invert brightness-0 filter"
            priority
          />
        </div>

        {/* Heading with animation - reduced font size */}
        <h1
          className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center max-w-4xl mb-6 tracking-tight transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          KOKONAISVALTAISET PALVELUT RAKENTAMISEEN JA REMONTOINTIIN
        </h1>

        {/* Subheading with animation */}
        <p
          className={`text-xl text-white/80 text-center max-w-2xl mb-10 transform transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Laadukasta rakentamista ja remontointia ammattitaidolla
        </p>

        {/* Buttons with animation */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Button size="lg" className="px-8 text-base">
            Pyydä tarjous
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-transparent text-white border-white hover:bg-white/10 text-base"
          >
            <Link href="/palvelut">
              Tutustu palveluihin
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

