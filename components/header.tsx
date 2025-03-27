"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    { href: "/", label: "Etusivu" },
    { href: "/palvelut", label: "Palvelut" },
    { href: "/referenssit", label: "Referenssit" },
    { href: "/yhteystiedot", label: "Yhteystiedot" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur-none">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/conska-logo.png" alt="Conska Oy Logo" width={150} height={40} className="h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-semibold uppercase transition-colors border-b-2 border-transparent",
                pathname === route.href
                  ? "text-muted-foreground font-bold border-b-2 border-primary"
                  : "text-foreground hover:text-muted-foreground hover:border-primary",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Avaa valikko</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex justify-center mb-6">
              <Image src="/images/conska-logo.png" alt="Conska Oy Logo" width={150} height={40} className="h-auto" />
            </div>
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-lg font-semibold uppercase transition-colors",
                    pathname === route.href
                      ? "text-muted-foreground font-bold border-b-2 border-primary"
                      : "text-foreground hover:text-muted-foreground hover:border-b-2 hover:border-primary",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/yhteystiedot">Ota yhteyttä</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

