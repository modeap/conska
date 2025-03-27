"use client"

import { useEffect, useRef } from "react"

export default function MinimalistAnimation() {
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

    // Create particles
    const particles: Particle[] = []
    const numParticles = 50 // Adjust for more or fewer particles

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(canvas))
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}

// Particle class
class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  canvas: HTMLCanvasElement
  maxSpeed: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 2 + 1 // Small particles
    this.speedX = (Math.random() - 0.5) * 0.3 // Slow horizontal movement
    this.speedY = (Math.random() - 0.5) * 0.3 // Slow vertical movement
    this.opacity = Math.random() * 0.5 + 0.1 // Subtle opacity
    this.maxSpeed = 0.3
  }

  update() {
    // Add some subtle movement variation
    this.speedX += (Math.random() - 0.5) * 0.01
    this.speedY += (Math.random() - 0.5) * 0.01

    // Limit speed
    if (this.speedX > this.maxSpeed) this.speedX = this.maxSpeed
    if (this.speedX < -this.maxSpeed) this.speedX = -this.maxSpeed
    if (this.speedY > this.maxSpeed) this.speedY = this.maxSpeed
    if (this.speedY < -this.maxSpeed) this.speedY = -this.maxSpeed

    // Update position
    this.x += this.speedX
    this.y += this.speedY

    // Wrap around edges
    if (this.x < 0) this.x = this.canvas.width
    if (this.x > this.canvas.width) this.x = 0
    if (this.y < 0) this.y = this.canvas.height
    if (this.y > this.canvas.height) this.y = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    ctx.fill()
  }
}

