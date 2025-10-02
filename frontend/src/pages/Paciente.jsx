import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Paciente() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d5ffff] via-[#9ce0db] to-[#5dc1b9] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#005954] hover:text-[#338b85] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </button>

        {/* Conteúdo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#005954]">Área do Paciente</h1>
          <p className="text-lg text-[#005954] opacity-90">
            Busque médicos e agende consultas facilmente
          </p>
        </div>

        {/* Cards de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-[#005954]">Buscar Médicos</h3>
            <p className="text-[#338b85]">
              Encontre profissionais por especialidade, localização e disponibilidade.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-[#005954]">Agendar Consultas</h3>
            <p className="text-[#338b85]">Marque horários de forma rápida e conveniente.</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-[#005954]">Minhas Consultas</h3>
            <p className="text-[#338b85]">Acompanhe e gerencie seus agendamentos.</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-xl font-bold mb-3 text-[#005954]">Histórico Médico</h3>
            <p className="text-[#338b85]">Acesse seu prontuário e resultados de exames.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
