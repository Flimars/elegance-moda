import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const categoria = searchParams.get("categoria")
    const promocao = searchParams.get("promocao") === "true"

    let produtos

    if (categoria) {
      produtos = await prisma.produto.findMany({
        where: {
          categoria: {
            nome: {
              equals: categoria,
              mode: "insensitive",
            },
          },
          ...(promocao ? { emPromocao: true } : {}),
        },
        include: {
          categoria: true,
        },
        orderBy: {
          nome: "asc",
        },
      })
    } else {
      produtos = await prisma.produto.findMany({
        where: promocao ? { emPromocao: true } : {},
        include: {
          categoria: true,
        },
        orderBy: {
          nome: "asc",
        },
      })
    }

    return NextResponse.json({ produtos })
  } catch (error) {
    console.error("Erro ao buscar produtos:", error)
    return NextResponse.json({ error: "Erro ao buscar produtos" }, { status: 500 })
  }
}
