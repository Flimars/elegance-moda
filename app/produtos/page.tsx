import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

// Simulação de produtos que viriam do banco de dados
const produtos = [
  {
    id: 1,
    nome: "Vestido Floral Midi",
    descricao: "Vestido midi com estampa floral, mangas 3/4 e cintura marcada. Perfeito para ocasiões especiais.",
    preco: 189.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    nome: "Camisa Social Slim",
    descricao: "Camisa social masculina com corte slim, tecido 100% algodão e acabamento premium.",
    preco: 129.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    nome: "Calça Jeans Skinny",
    descricao: "Calça jeans feminina skinny de cintura alta com lavagem média e acabamento premium.",
    preco: 159.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    nome: "Blazer Estruturado",
    descricao: "Blazer estruturado com fechamento em botão único, bolsos frontais e forro interno.",
    preco: 249.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    nome: "Saia Plissada Midi",
    descricao: "Saia plissada midi em tecido leve com cintura elástica. Versátil e confortável.",
    preco: 119.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    nome: "Camiseta Básica",
    descricao: "Camiseta básica unissex em algodão orgânico. Disponível em diversas cores.",
    preco: 59.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 7,
    nome: "Bolsa Tote de Couro",
    descricao: "Bolsa tote em couro genuíno com alças resistentes e compartimentos internos.",
    preco: 299.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 8,
    nome: "Colar Geométrico",
    descricao: "Colar com pingente geométrico em metal banhado a ouro. Peça atemporal e elegante.",
    preco: 89.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 9,
    nome: "Óculos de Sol Retrô",
    descricao: "Óculos de sol com design retrô, armação acetato e lentes com proteção UV.",
    preco: 149.9,
    imagem: "/placeholder.svg?height=400&width=300",
  },
]

export default function ProdutosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nossos Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Card key={produto.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <Image src={produto.imagem || "/placeholder.svg"} alt={produto.nome} fill className="object-cover" />
            </div>
            <CardHeader>
              <h3 className="text-xl font-bold">{produto.nome}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{produto.descricao}</p>
              <p className="text-xl font-bold">
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
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
