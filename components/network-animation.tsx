"use client"

import { useEffect, useRef } from "react"

export default function NetworkAnimation() {
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
    const particles: NetworkParticle[] = []
    const numParticles = 40 // Fewer particles for better performance
    const connectionDistance = 150 // Maximum distance for connections

    for (let i = 0; i < numParticles; i++) {
      particles.push(new NetworkParticle(canvas))
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

      // Draw connections between particles
      drawConnections(ctx, particles, connectionDistance)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Draw connections between nearby particles
  const drawConnections = (ctx: CanvasRenderingContext2D, particles: NetworkParticle[], maxDistance: number) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}

// NetworkParticle class
class NetworkParticle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  canvas: HTMLCanvasElement
  pulseSpeed: number
  pulseAmount: number
  pulsePhase: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 2 + 1
    this.speedX = (Math.random() - 0.5) * 0.3
    this.speedY = (Math.random() - 0.5) * 0.3
    this.opacity = Math.random() * 0.5 + 0.2
    this.pulseSpeed = Math.random() * 0.02 + 0.01
    this.pulseAmount = Math.random() * 0.5 + 0.5
    this.pulsePhase = Math.random() * Math.PI * 2
  }

  update() {
    // Update position
    this.x += this.speedX
    this.y += this.speedY

    // Wrap around edges
    if (this.x < 0) this.x = this.canvas.width
    if (this.x > this.canvas.width) this.x = 0
    if (this.y < 0) this.y = this.canvas.height
    if (this.y > this.canvas.height) this.y = 0

    // Update pulse phase
    this.pulsePhase += this.pulseSpeed
    if (this.pulsePhase > Math.PI * 2) {
      this.pulsePhase = 0
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Calculate pulse size
    const pulseSize = this.size * (1 + Math.sin(this.pulsePhase) * this.pulseAmount * 0.5)

    // Draw particle with glow effect
    ctx.save()

    // Inner glow
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize * 2)
    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(this.x, this.y, pulseSize * 2, 0, Math.PI * 2)
    ctx.fill()

    // Core
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 1.5})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }
}

