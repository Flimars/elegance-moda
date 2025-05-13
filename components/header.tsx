"use client" 

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ShoppingBag, User } from "lucide-react"
import { useState, useEffect } from "react"
import SocialIcons from "./social-icons"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/produtos", label: "Produtos" },
    { href: "/promocoes", label: "Promoções" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
      }`}
    >
      <div className="show md:flex items-center justify-between bg-background/95 backdrop-blur-sm shadow-sm py-2 px-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/imagens/logo/logo-2.png" 
            alt="Logo da Elegance Moda" 
            width={150} 
            height={150} 
            quality={100}
            style={{ objectFit: 'cover', borderRadius: '12px', position: 'relative'}}
            priority 
          />
        </Link>
      </div>
      {/* title */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Elegance{" "}<span className="text-primary">Moda</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="show md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-gray-700 font-medium transition-colors hover:text-primary" //"text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <SocialIcons size={18} />
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" aria-label="Minha conta">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Carrinho de compras">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" className="text-2xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                      Elegance<span className="text-primary">Moda</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Fechar menu</span>
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-4 py-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto border-t pt-6">
                    <p className="font-medium mb-4">Siga-nos nas redes sociais</p>
                    <SocialIcons size={20} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div> 
    </header>
  )
}
