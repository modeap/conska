"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackgroundNew() {
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
    const numParticles = 80
    const connectionDistance = 150
    const colors = ["#ffffff", "#f0f0f0", "#e0e0e0", "#d0d0d0"]

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(canvas, colors[Math.floor(Math.random() * colors.length)]))
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid pattern
      drawGrid(ctx, canvas.width, canvas.height)

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

  // Draw a subtle grid pattern
  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const gridSize = 40
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
    ctx.lineWidth = 1

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

  // Draw connections between nearby particles
  const drawConnections = (ctx: CanvasRenderingContext2D, particles: Particle[], maxDistance: number) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
          ctx.lineWidth = 1
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
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}
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
  color: string
  canvas: HTMLCanvasElement
  pulseSpeed: number
  pulseAmount: number
  pulsePhase: number

  constructor(canvas: HTMLCanvasElement, color: string) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.color = color
    this.pulseSpeed = Math.random() * 0.02 + 0.01
    this.pulseAmount = Math.random() * 0.5 + 0.5
    this.pulsePhase = Math.random() * Math.PI * 2
  }

  update() {
    // Update position
    this.x += this.speedX
    this.y += this.speedY

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvas.width) {
      this.speedX = -this.speedX
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.speedY = -this.speedY
    }

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
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize * 3)
    gradient.addColorStop(0, this.color)
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(this.x, this.y, pulseSize * 3, 0, Math.PI * 2)
    ctx.fill()

    // Core
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  }
}

