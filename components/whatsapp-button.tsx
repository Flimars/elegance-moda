"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Mostrar apenas nas páginas de produtos e promoções
  useEffect(() => {
    setIsVisible(pathname.includes("/produtos") || pathname.includes("/promocoes"))
  }, [pathname])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/5511987654321?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20produtos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button size="lg" className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600">
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contato via WhatsApp</span>
      </Button>
    </a>
  )
}
