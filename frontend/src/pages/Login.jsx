import React, { useState } from 'react'
import { ArrowLeft, LogIn, Mail, Lock } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  })
  const [error, setError] = useState('') // Estado para mensagens de erro

  const handleChange = (e) => {
    setError('') // Limpa o erro ao digitar
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // Limpa erros anteriores

    // Validação simples no frontend
    if (!formData.email || !formData.senha) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    try {
      const apiUrl = import.meta.env.VITE_BACKEND_URL

      // Substitua a URL pelo seu endpoint de login real
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Login bem-sucedido:', data)
        // Ex: Salvar token e redirecionar para o dashboard
        // localStorage.setItem('token', data.token);
        alert('Login realizado com sucesso!')
        // navigate('/dashboard'); // Redireciona para a página principal após o login
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'Email ou senha inválidos.')
      }
    } catch (err) {
      console.error('Erro de conexão:', err)
      setError('Não foi possível conectar ao servidor. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d5ffff] via-[#9ce0db] to-[#5dc1b9] flex items-center justify-center py-8">
      <div className="max-w-md w-full mx-auto px-6">
        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="bg-[#005954] text-white py-6 px-8 text-center">
            <h2 className="text-2xl font-bold flex justify-center items-center gap-3">
              <LogIn className="w-6 h-6" />
              Acesse sua Conta
            </h2>
            <p className="text-[#9ce0db] mt-2">Entre com suas credenciais para continuar.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#005954] mb-2">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemplo@provedor.com"
                    className="w-full pl-10 pr-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Campo Senha */}
              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-[#005954] mb-2">
                  Senha
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </span>
                  <input
                    type="password"
                    id="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Digite sua senha"
                    className="w-full pl-10 pr-4 py-3 border border-[#9ce0db] rounded-lg focus:ring-2 focus:ring-[#005954] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Mensagem de Erro */}
            {error && (
              <p className="mt-4 text-center text-sm text-red-600 bg-red-100 p-2 rounded-md">
                {error}
              </p>
            )}

            {/* Botão Submit */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="w-full cursor-pointer bg-[#005954] text-white px-12 py-3 rounded-lg hover:bg-[#338b85] text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Entrar
              </button>
            </div>

            {/* Link para Cadastro
            <div className="mt-6 text-center text-sm">
              <p className="text-[#338b85]">
                Não tem uma conta?{' '}
                <Link to="/cadastro" className="font-bold text-[#005954] hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}
