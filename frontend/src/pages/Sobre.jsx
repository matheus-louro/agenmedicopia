import React from 'react'
import { ArrowLeft, LogIn, UserPlus, Stethoscope } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import apresentacaoImg from '../assets/img-apresentacao.jpg'
import { Rodape } from '@/components/Rodape'

export function Sobre() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d5ffff] via-[#9ce0db] to-[#5dc1b9]">
      {/* Navbar */}
      <nav className="bg-white backdrop-blur-sm border-b border-white/20 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="logo_img">
                <Stethoscope className="w-16 h-16 object-contain" />
              </div>
              <div className="logo">
                <h1 className="text-2xl font-bold text-[#005954]">AgenMedi</h1>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate('/cadastro')}
                className="flex items-center gap-2 text-[#005954] hover:text-[#338b85] transition-colors font-medium cursor-pointer"
              >
                <UserPlus className="w-5 h-5" />
                Cadastro
              </button>
              <button
                className="flex items-center gap-2 bg-[#005954] text-white px-6 py-2 rounded-lg hover:bg-[#338b85] transition-colors font-medium cursor-pointer"
                onClick={() => navigate('/login')}
              >
                <LogIn className="w-5 h-5" />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Header Section */}
      <header className="bg-[#d5ffff]/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="headline flex-1">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-[#005954] hover:text-[#338b85] transition-colors mb-8 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar para Home
              </button>

              <h2 className="text-6xl md:text-8xl font-bold text-[#005954] mb-6 leading-tight">
                AgenMedi
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#005954] mb-6">
                O melhor sistema para gerenciamento de consultórios
              </h3>
              <p className="text-lg text-[#338b85] mb-8 leading-relaxed max-w-2xl">
                O AgenMedi oferece um sistema web intuitivo e acessível para gerenciamento de
                agendamentos, focado na facilidade de uso, o que contribui para a garantia de
                agendamentos rápidos e eficientes, juntamente com o envio de lembretes automáticos.
              </p>
              <button
                onClick={() => navigate('/cadastro')}
                className="bg-[#005954] text-white px-8 py-4 rounded-lg hover:bg-[#338b85] transition-colors text-lg font-medium shadow-lg cursor-pointer"
              >
                Contrate o serviço
              </button>
            </div>

            <div className="img_headline flex-1 flex justify-center">
              <img
                style={{
                  maxWidth: '80%',
                  border: '12px solid #005956',
                  borderRadius: '50px',
                }}
                src={apresentacaoImg}
                alt="Sistema de agendamento médico"
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>
      {/* Features Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#005954] mb-4">Por que escolher o AgenMedi?</h2>
            <p className="text-lg text-[#338b85] max-w-2xl mx-auto">
              Descubra todas as funcionalidades que tornam nosso sistema a melhor escolha para sua
              clínica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center">
              <div className="bg-[#d5ffff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-[#005954]">📅</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#005954]">Gestão de Agenda</h3>
              <p className="text-[#338b85]">
                Controle completo da agenda de médicos e consultórios com interface intuitiva.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center">
              <div className="bg-[#d5ffff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-[#005954]">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#005954]">Relatórios Detalhados</h3>
              <p className="text-[#338b85]">Não tem isso nao</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center">
              <div className="bg-[#d5ffff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-[#005954]">🔗</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#005954]">Integração Total</h3>
              <p className="text-[#338b85]">
                Sistema integrado com prontuários eletrônicos e outros softwares médicos.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center">
              <div className="bg-[#d5ffff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-[#005954]">🔔</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#005954]">Lembretes Automáticos</h3>
              <p className="text-[#338b85]">
                Envio automático de lembretes por SMS e email para reduzir faltas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Rodape />
    </div>
  )
}
