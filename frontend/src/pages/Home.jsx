import React from 'react'
import { User, Hospital } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#d5ffff] via-[#9ce0db] to-[#5dc1b9] p-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-[#005954] drop-shadow-sm">
          Bem-vindo ao AgenMedi
        </h1>
        <p className="text-lg max-w-xl text-[#005954] opacity-90">
          Escolha uma das opções abaixo para começar:
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Card Paciente */}
        <div
          onClick={() => navigate('/paciente')}
          className="cursor-pointer bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center w-72 border border-white/20"
        >
          <div className="bg-[#d5ffff] p-4 rounded-full mb-6">
            <User className="w-16 h-16 text-[#005954]" />
          </div>
          <h2 className="text-xl font-bold mb-3 text-[#005954]">Sou Paciente</h2>
          <p className="text-[#338b85] text-sm leading-relaxed">
            Busque médicos, horários de consultas e agende facilmente na sua região.
          </p>
        </div>

        {/* Card Administrador/Hospital */}
        <div
          onClick={() => navigate('/sobre')}
          className="cursor-pointer bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center w-72 border border-white/20"
        >
          <div className="bg-[#d5ffff] p-4 rounded-full mb-6">
            <Hospital className="w-16 h-16 text-[#005954]" />
          </div>
          <h2 className="text-xl font-bold mb-3 text-[#005954]">Quero Conhecer o Sistema</h2>
          <p className="text-[#338b85] text-sm leading-relaxed">
            Saiba como o AgenMedi pode ajudar seu hospital a gerenciar consultas de forma eficiente.
          </p>
        </div>
      </div>

      {/* Elementos decorativos suaves */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#9ce0db] rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#d5ffff] rounded-full opacity-30 blur-xl"></div>
    </div>
  )
}
