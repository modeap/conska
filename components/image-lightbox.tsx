"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageLightboxProps {
  src: string
  alt: string
}

export default function ImageLightbox({ src, alt }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close lightbox when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen])

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Check if the URL is external (starts with http or https)
  const isExternalUrl = src.startsWith("http://") || src.startsWith("https://")

  return (
    <>
      <div
        className="relative cursor-pointer rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
        onClick={() => setIsOpen(true)}
      >
        {isExternalUrl ? (
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" unoptimized={true} />
        ) : (
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="sr-only">Avaa isompi kuva</span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Sulje</span>
          </button>

          <div className="relative max-w-5xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            {isExternalUrl ? (
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                unoptimized={true}
              />
            ) : (
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}

