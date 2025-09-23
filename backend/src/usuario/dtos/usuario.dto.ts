export class UsuarioResponseDto {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone?: string;
  cargo: string;
  ativo: boolean;
  genero?: string;
  hospitalId?: string;
  criadoEm: Date;
  atualizadoEm: Date;
}
