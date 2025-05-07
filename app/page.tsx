import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Elegance Moda: Estilo e Sofisticação</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Descubra nossa coleção exclusiva de roupas e acessórios que combinam tendências contemporâneas com
              elegância atemporal. Peças cuidadosamente selecionadas para expressar sua personalidade com estilo.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg">
                <Link href="/produtos">Ver Produtos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/promocoes">Promoções</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Vitrine da loja Elegance Moda"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Categorias em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Roupas Femininas", "Roupas Masculinas", "Acessórios"].map((category) => (
            <div key={category} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square w-full bg-muted relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt={category}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
                <div>
                  <h3 className="font-medium text-xl text-white">{category}</h3>
                  <Button variant="secondary" size="sm" className="mt-2">
                    Explorar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Store Images */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossa Loja</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Interior da loja Elegance Moda"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <p className="text-white font-medium">Interior da nossa loja principal</p>
            </div>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Fachada da loja Elegance Moda"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
              <p className="text-white font-medium">Fachada da nossa loja no Shopping Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">O Que Nossos Clientes Dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Ana Silva",
              text: "Adoro as roupas da Elegance Moda! A qualidade é excelente e o atendimento é sempre impecável.",
            },
            {
              name: "Carlos Oliveira",
              text: "Encontrei peças exclusivas que não vi em nenhuma outra loja. Recomendo a todos que buscam estilo e qualidade.",
            },
            {
              name: "Mariana Costa",
              text: "As promoções são ótimas e o ambiente da loja é muito agradável. Sempre volto para ver as novidades.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg">
              <p className="italic mb-4">"{testimonial.text}"</p>
              <p className="font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted p-8 rounded-lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Fique por dentro das novidades</h2>
          <p className="mb-6">
            Assine nossa newsletter e receba ofertas exclusivas e informações sobre novos produtos.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Assinar</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
