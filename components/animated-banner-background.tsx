"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBannerBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Configuration
    const particleCount = 80
    const connectionDistance = 150
    const particleSize = 1
    const lineColor = "rgba(255, 255, 255, 0.15)"
    const backgroundColor = "#0a0a0f" // Very dark black/blue shade

    // Particle colors
    const particleColors = [
      "rgba(255, 255, 255, 0.7)", // White
      "rgba(0, 195, 255, 0.8)", // Electric blue
      "rgba(64, 224, 208, 0.8)", // Turquoise
      "rgba(255, 215, 0, 0.7)", // Yellow/gold
    ]

    // Additional elements
    const starCount = 30 // Small stars in the background
    const gridSize = 60 // Size of grid cells

    // Create particles with slower movement
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      // Slower movement - reduced velocity by half
      const vx = (Math.random() - 0.5) * 0.25
      const vy = (Math.random() - 0.5) * 0.25

      // Randomly select a color from the array
      const color = particleColors[Math.floor(Math.random() * particleColors.length)]

      particles.push(
        new Particle(Math.random() * canvas.width, Math.random() * canvas.height, vx, vy, particleSize, color),
      )
    }

    // Create stars (static background elements)
    const stars: Star[] = []
    for (let i = 0; i < starCount; i++) {
      stars.push(
        new Star(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 0.5 + 0.1, // Size between 0.1 and 0.6
          Math.random() * 0.5 + 0.1, // Opacity between 0.1 and 0.6
        ),
      )
    }

    // Animation loop
    function animate() {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0a0a0f") // Very dark at top
      gradient.addColorStop(1, "#121218") // Slightly lighter at bottom

      // Fill background
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid
      drawGrid(ctx, canvas.width, canvas.height, gridSize)

      // Draw stars
      stars.forEach((star) => {
        star.draw(ctx)
        star.twinkle()
      })

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height)

        // Draw connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.3 * (1 - distance / connectionDistance)
            ctx.stroke()
          }
        }

        // Draw particle with its specific color
        ctx.beginPath()
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2)
        ctx.fillStyle = particles[i].color
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    // Draw subtle grid pattern
    function drawGrid(ctx: CanvasRenderingContext2D, width: number, height: number, gridSize: number) {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)" // Very subtle grid lines
      ctx.lineWidth = 0.5

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10"
      style={{ background: "transparent", opacity: 0.6 }}
    />
  )
}

// Particle class
class Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string

  constructor(x: number, y: number, vx: number, vy: number, size: number, color: string) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.size = size
    this.color = color
  }

  update(width: number, height: number) {
    // Update position
    this.x += this.vx
    this.y += this.vy

    // Bounce off edges
    if (this.x < 0 || this.x > width) {
      this.vx = -this.vx
    }
    if (this.y < 0 || this.y > height) {
      this.vy = -this.vy
    }
  }
}

// Star class for background elements
class Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinkleAmount: number
  twinklePhase: number

  constructor(x: number, y: number, size: number, opacity: number) {
    this.x = x
    this.y = y
    this.size = size
    this.opacity = opacity
    this.twinkleSpeed = Math.random() * 0.02 + 0.005
    this.twinkleAmount = Math.random() * 0.3
    this.twinklePhase = Math.random() * Math.PI * 2
  }

  draw(ctx: CanvasRenderingContext2D) {
    const currentOpacity = this.opacity * (1 + Math.sin(this.twinklePhase) * this.twinkleAmount)

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
    ctx.fill()
  }

  twinkle() {
    this.twinklePhase += this.twinkleSpeed
    if (this.twinklePhase > Math.PI * 2) {
      this.twinklePhase = 0
    }
  }
}

