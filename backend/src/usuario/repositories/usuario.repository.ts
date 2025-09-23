import { Cargo, Usuario } from '@prisma/client';

export type CreateUsuarioInput = {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone?: string;
  genero?: string;
  hospitalId?: string;
  cargo: Cargo;
  ativo: boolean;
};

export abstract class UsuarioRepository {
  abstract criarUsuario(data: CreateUsuarioInput, tx?: any): Promise<Usuario>;

  abstract criarDiretor(usuarioId: string, tx?: any): Promise<void>;

  abstract buscarPorEmail(email: string): Promise<Usuario | null>;
}
