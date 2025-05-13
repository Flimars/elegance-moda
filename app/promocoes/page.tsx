"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Simulação de produtos em promoção que viriam do banco de dados
const promocoes = [
  {
    id: 1,
    nome: "Vestido Floral Midi",
    descricao: "Vestido midi com estampa floral, mangas 3/4 e cintura marcada.",
    precoOriginal: 189.9,
    precoPromocional: 149.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    nome: "Camisa Social Slim",
    descricao: "Camisa social masculina com corte slim, tecido 100% algodão.",
    precoOriginal: 129.9,
    precoPromocional: 99.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    nome: "Calça Jeans Skinny",
    descricao: "Calça jeans feminina skinny de cintura alta com lavagem média.",
    precoOriginal: 159.9,
    precoPromocional: 119.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    nome: "Blazer Estruturado",
    descricao: "Blazer estruturado com fechamento em botão único e bolsos frontais.",
    precoOriginal: 249.9,
    precoPromocional: 199.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    nome: "Saia Plissada Midi",
    descricao: "Saia plissada midi em tecido leve com cintura elástica.",
    precoOriginal: 119.9,
    precoPromocional: 89.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    nome: "Camiseta Básica",
    descricao: "Camiseta básica unissex em algodão orgânico.",
    precoOriginal: 59.9,
    precoPromocional: 39.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 7,
    nome: "Bolsa Tote de Couro",
    descricao: "Bolsa tote em couro genuíno com alças resistentes.",
    precoOriginal: 299.9,
    precoPromocional: 249.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 8,
    nome: "Colar Geométrico",
    descricao: "Colar com pingente geométrico em metal banhado a ouro.",
    precoOriginal: 89.9,
    precoPromocional: 69.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
]

export default function PromocoesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesToShow = 4

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === promocoes.length - slidesToShow ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? promocoes.length - slidesToShow : prev - 1))
  }

  // Auto-slide a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Promoções Especiais</h1>

      {/* Carrossel */}
      <div className="relative mb-16">
        <h2 className="text-2xl font-bold mb-6">Ofertas em Destaque</h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {promocoes.map((produto) => (
                <div key={produto.id} className="min-w-[25%] px-2" style={{ flex: `0 0 ${100 / slidesToShow}%` }}>
                  <div className="bg-muted rounded-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={produto.imagem || "/placeholder.svg"}
                        alt={produto.nome}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold">
                        {Math.round((1 - produto.precoPromocional / produto.precoOriginal) * 100)}% OFF
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{produto.nome}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{produto.descricao}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-red-600">
                          {produto.precoPromocional.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                        <span className="text-sm line-through text-muted-foreground">
                          {produto.precoOriginal.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border rounded-full p-2 shadow-md"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border rounded-full p-2 shadow-md"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: promocoes.length - slidesToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lista de produtos em promoção */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {promocoes.map((produto) => (
          <Card key={produto.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <Image src={produto.imagem || "/placeholder.svg"} alt={produto.nome} fill className="object-cover" />
              <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold">
                {Math.round((1 - produto.precoPromocional / produto.precoOriginal) * 100)}% OFF
              </div>
            </div>
            <CardHeader>
              <h3 className="text-xl font-bold">{produto.nome}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{produto.descricao}</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-red-600">
                  {produto.precoPromocional.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <span className="text-sm line-through text-muted-foreground">
                  {produto.precoOriginal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Ver Detalhes</Button>
              <Button>Comprar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
