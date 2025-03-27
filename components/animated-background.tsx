"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
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

    // Create shapes
    const shapes: Shape[] = []
    const numShapes = 15

    for (let i = 0; i < numShapes; i++) {
      if (Math.random() > 0.7) {
        // Create a line
        shapes.push(new Line(canvas))
      } else {
        // Create a square
        shapes.push(new Square(canvas))
      }
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw shapes
      shapes.forEach((shape) => {
        shape.update()
        shape.draw(ctx)
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
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
    />
  )
}

// Shape classes
class Shape {
  x: number
  y: number
  size: number
  speed: number
  angle: number
  opacity: number
  canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 30 + 10
    this.speed = Math.random() * 0.5 + 0.1
    this.angle = Math.random() * Math.PI * 2
    this.opacity = Math.random() * 0.2 + 0.05
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed
    this.y += Math.sin(this.angle) * this.speed

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvas.width) {
      this.angle = Math.PI - this.angle
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.angle = -this.angle
    }
  }

  draw(ctx: CanvasRenderingContext2D) {}
}

class Square extends Shape {
  rotation: number
  rotationSpeed: number

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.01
  }

  update() {
    super.update()
    this.rotation += this.rotationSpeed
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    ctx.globalAlpha = this.opacity
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 1
    ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
    ctx.restore()
  }
}

class Line extends Shape {
  length: number

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.length = Math.random() * 100 + 50
  }

  draw(ctx: CanvasRenderingContext2D) {
    const endX = this.x + Math.cos(this.angle) * this.length
    const endY = this.y + Math.sin(this.angle) * this.length

    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(endX, endY)
    ctx.strokeStyle = "#ffffff"
    ctx.globalAlpha = this.opacity
    ctx.lineWidth = 1
    ctx.stroke()
  }
}

