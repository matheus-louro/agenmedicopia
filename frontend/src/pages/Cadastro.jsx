import React, { useState } from 'react'
import { ArrowLeft, Building, User, MapPin, FileText, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Cadastro() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // Dados do Diretor
    diretorNome: '',
    diretorEmail: '',
    diretorSenha: '',
    diretorTelefone: '',
    diretorCpf: '',
    diretorGenero: '',

    // Dados do Hospital
    hospitalNome: '',
    hospitalRua: '',
    hospitalBairro: '',
    hospitalCidade: '',
    hospitalUf: '',
    hospitalTelefone: '',
    hospitalEmail: '',
    hospitalCnpj: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Preparar os dados no formato esperado pelo backend
    const dadosParaEnviar = {
      diretor: {
        nome: formData.diretorNome,
        email: formData.diretorEmail,
        senha: formData.diretorSenha,
        telefone: formData.diretorTelefone,
        cpf: formData.diretorCpf,
        genero: formData.diretorGenero || 'Não informado', // Valor padrão
      },
      hospital: {
        nome: formData.hospitalNome,
        rua: formData.hospitalRua,
        bairro: formData.hospitalBairro,
        cidade: formData.hospitalCidade,
        uf: formData.hospitalUf,
        telefone: formData.hospitalTelefone,
        email: formData.hospitalEmail,
        cnpj: formData.hospitalCnpj,
      },
    }

    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL

      const response = await fetch(`${apiUrl}/cadastro/diretor-hospital`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosParaEnviar),
      })

      if (response.status === 201) {
        const resultado = await response.json()
        alert('Cadastro realizado com sucesso!')
        console.log('Resposta do backend:', resultado)
        // Redirecionar ou limpar o formulário
      } else {
        alert('Erro no cadastro. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error)
      alert('Erro de conexão. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d5ffff] via-[#9ce0db] to-[#5dc1b9] py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/sobre')}
            className="flex items-center gap-2 text-[#005954] hover:text-[#338b85] transition-colors font-medium cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#005954]">AgenMedi</h1>
            <p className="text-[#338b85]">Sistema de Gestão Hospitalar</p>
          </div>
          <div className="w-20"></div> {/* Espaçador para centralizar o título */}
        </div>

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="bg-[#005954] text-white py-6 px-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Shield className="w-6 h-6" />
              Cadastre sua Instituição
            </h2>
            <p className="text-[#9ce0db] mt-2">
              Preencha os dados abaixo para começar a usar o AgenMedi
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-8">
              {/* Seção Dados do Hospital */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-[#005954]" />
                  <h3 className="text-xl font-bold text-[#005954]">Dados da Instituição</h3>
                </div>
                <hr className="border-[#9ce0db]" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="hospitalNome"
                      className="block text-sm font-medium text-[#005954] mb-2"
                    >
                      Nome da Instituição *
                    </label>
                    <input
                      type="text"
                      id="hospitalNome"
                      value={formData.hospitalNome}
                      onChange={handleChange}
                      placeholder="ex: Hospital São Carlos"
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hospitalEmail"
                      className="block text-sm font-medium text-[#005954] mb-2"
                    >
                      Email Institucional *
                    </label>
                    <input
                      type="email"
                      id="hospitalEmail"
                      value={formData.hospitalEmail}
                      onChange={handleChange}
                      placeholder="exemplo@hospital.com.br"
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hospitalTelefone"
                      className="block text-sm font-medium text-[#005954] mb-2"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="hospitalTelefone"
                      value={formData.hospitalTelefone}
                      onChange={handleChange}
                      placeholder="ex: (11) 7896-4532"
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cnpj" className="block text-sm font-medium text-[#005954] mb-2">
                      CNPJ *
                    </label>
                    <input
                      type="text"
                      id="hospitalCnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      placeholder="ex: 12.345.678/0001-99"
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Endereço */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mt-6">
                    <MapPin className="w-5 h-5 text-[#005954]" />
                    <h4 className="text-lg font-semibold text-[#005954]">Endereço</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label
                        htmlFor="rua"
                        className="block text-sm font-medium text-[#005954] mb-2"
                      >
                        Rua *
                      </label>
                      <input
                        type="text"
                        id="hospitalRua"
                        value={formData.rua}
                        onChange={handleChange}
                        placeholder="ex: Av. Miguel Sutil, 455"
                        className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="bairro"
                        className="block text-sm font-medium text-[#005954] mb-2"
                      >
                        Bairro *
                      </label>
                      <input
                        type="text"
                        id="hospitalBairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        placeholder="ex: Bela Vista"
                        className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cidade"
                        className="block text-sm font-medium text-[#005954] mb-2"
                      >
                        Cidade *
                      </label>
                      <input
                        type="text"
                        id="hospitalCidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        placeholder="ex: Cuiabá"
                        className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="uf" className="block text-sm font-medium text-[#005954] mb-2">
                        UF *
                      </label>
                      <input
                        type="text"
                        id="hospitalUf"
                        value={formData.uf}
                        onChange={handleChange}
                        placeholder="ex: MT"
                        className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção Dados do Diretor */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-[#005954]" />
                  <h3 className="text-xl font-bold text-[#005954]">Dados do Responsável</h3>
                </div>
                <hr className="border-[#9ce0db]" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="diretorNome"
                      className="block text-sm font-medium text-[#005954] mb-2"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="diretorNome"
                      value={formData.diretorNome}
                      onChange={handleChange}
                      placeholder="ex: Pedro Santos Souza"
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#005954] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="diretorEmail"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemplo@gmail.com"
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="senha"
                      className="block text-sm font-medium text-[#005954] mb-2"
                    >
                      Senha (mínimo 6 caracteres) *
                    </label>
                    <input
                      type="password"
                      id="diretorSenha"
                      value={formData.senha}
                      onChange={handleChange}
                      placeholder="ex: 045$lhjk"
                      minLength={6}
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefoneDiretor"
                      className="block text-sm font-medium text-[#005954] mb-2"
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefoneDiretor"
                      value={formData.telefoneDiretor}
                      onChange={handleChange}
                      placeholder="ex: (11) 7896-4532"
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cpf" className="block text-sm font-medium text-[#005954] mb-2">
                      CPF *
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      placeholder="ex: 123.456.789-00"
                      className="w-full px-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Botão Submit */}
            <div className="mt-10 text-center">
              <button
                type="submit"
                className="cursor-pointer bg-[#005954] text-white px-12 py-4 rounded-lg hover:bg-[#338b85] transition-alls text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Finalizar Cadastro
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <pre className="text-sm text-[#005954] font-sans whitespace-pre-wrap">
            {`© 2025 AgenMedi - Sistema de gerenciamento de consultas hospitalares\nTodos os direitos reservados.`}
          </pre>
        </footer>
      </div>
    </div>
  )
}
