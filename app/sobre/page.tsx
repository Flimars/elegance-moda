import Image from "next/image"

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre a Elegance Moda</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
          <p className="mb-4">
            Fundada em 2010 pelos irmãos Carla e Roberto Mendes, a Elegance Moda nasceu da paixão compartilhada pela
            moda e pelo desejo de oferecer peças de qualidade a preços acessíveis.
          </p>
          <p className="mb-4">
            O que começou como uma pequena loja no centro da cidade, rapidamente se expandiu para se tornar uma
            referência em moda na região. Nossa primeira loja tinha apenas 50m², mas o cuidado na seleção das peças e o
            atendimento personalizado logo conquistaram uma clientela fiel.
          </p>
          <p>
            Em 2015, inauguramos nossa segunda unidade em um shopping center e ampliamos nosso catálogo para incluir
            acessórios exclusivos. Hoje, contamos com três lojas físicas e uma presença online crescente, mantendo
            sempre o compromisso com a qualidade e a satisfação dos nossos clientes.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Fachada atual da loja Elegance Moda"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
        <p className="mb-4">
          Na Elegance Moda, nossa missão é proporcionar uma experiência de compra única, oferecendo produtos de
          qualidade que combinam tendências contemporâneas com elegância atemporal. Acreditamos que a moda é uma forma
          de expressão pessoal e trabalhamos para ajudar nossos clientes a encontrarem seu estilo próprio.
        </p>
        <p>
          Valorizamos a sustentabilidade e a ética em nossas operações, buscando parcerias com fornecedores que
          compartilham desses valores. Nosso compromisso é com a satisfação dos clientes, a qualidade dos produtos e o
          respeito ao meio ambiente.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Nossos Fundadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Carla Mendes</h3>
            <p className="mb-4">
              Formada em Design de Moda, Carla traz sua visão criativa e conhecimento das tendências internacionais para
              a curadoria das coleções da Elegance Moda. Sua paixão por cores e texturas se reflete na seleção cuidadosa
              de cada peça.
            </p>
            <p>
              "Acredito que a moda deve ser acessível e inclusiva, permitindo que cada pessoa expresse sua
              individualidade através do que veste."
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Roberto Mendes</h3>
            <p className="mb-4">
              Com formação em Administração de Empresas, Roberto é responsável pela gestão estratégica e expansão do
              negócio. Sua visão empreendedora foi fundamental para o crescimento da Elegance Moda ao longo dos anos.
            </p>
            <p>
              "Nosso objetivo é crescer de forma sustentável, mantendo a qualidade e o atendimento personalizado que nos
              diferencia no mercado."
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Compromisso com a Qualidade</h2>
        <p className="mb-4">
          Na Elegance Moda, cada peça é cuidadosamente selecionada, considerando qualidade, conforto e durabilidade.
          Trabalhamos com fornecedores confiáveis e realizamos rigorosos controles de qualidade para garantir que nossos
          produtos atendam às expectativas dos clientes mais exigentes.
        </p>
        <p>
          Nosso compromisso com a excelência se estende também ao atendimento. Nossa equipe é treinada para oferecer um
          serviço personalizado, ajudando cada cliente a encontrar as peças que melhor se adequam ao seu estilo e
          necessidades.
        </p>
      </div>
    </div>
  )
}
