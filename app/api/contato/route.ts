import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, telefone, assunto, mensagem } = body

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    // Salvar mensagem no banco de dados
    const contato = await prisma.contato.create({
      data: {
        nome,
        email,
        telefone: telefone || "",
        assunto,
        mensagem,
        dataEnvio: new Date(),
      },
    })

    // Aqui você poderia adicionar lógica para enviar e-mail de notificação

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso", id: contato.id },
      { status: 201 },
    )
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json({ error: "Erro ao processar sua mensagem" }, { status: 500 })
  }
}

