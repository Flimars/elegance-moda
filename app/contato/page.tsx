"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Check, Loader2 } from "lucide-react"

export default function ContatoPage() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio para o backend
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    })

    // Reset do estado de sucesso após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-4">Informações de Contato</h2>
          <p className="mb-6">
            Estamos sempre à disposição para atender você. Entre em contato conosco através do formulário ao lado ou
            utilize os canais abaixo:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Endereço:</h3>
              <p>Av. Paulista, 1000 - Bela Vista</p>
              <p>São Paulo - SP, 01310-100</p>
            </div>

            <div>
              <h3 className="font-bold">Telefone:</h3>
              <p>(11) 3456-7890</p>
            </div>

            <div>
              <h3 className="font-bold">E-mail:</h3>
              <p>contato@elegancemoda.com.br</p>
            </div>

            <div>
              <h3 className="font-bold">Horário de Funcionamento:</h3>
              <p>Segunda a Sábado: 10h às 22h</p>
              <p>Domingo: 14h às 20h</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Envie uma Mensagem</h2>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
              <p className="text-green-700">Agradecemos seu contato. Retornaremos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-1">
                  Nome Completo
                </label>
                <Input id="nome" name="nome" value={formState.nome} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  E-mail
                </label>
                <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium mb-1">
                  Telefone
                </label>
                <Input id="telefone" name="telefone" value={formState.telefone} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium mb-1">
                  Assunto
                </label>
                <Input id="assunto" name="assunto" value={formState.assunto} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  value={formState.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

