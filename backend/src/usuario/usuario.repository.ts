import { Injectable } from '@nestjs/common';
import { Cargo, Prisma, Usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type CreateUsuarioInput = {
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

@Injectable()
export class UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}
  // Comentario para equipe: Adicionei o parametro tx opcional para permitir transações
  async criarUsuario(
    data: CreateUsuarioInput,
    tx?: Prisma.TransactionClient,
  ): Promise<Usuario> {
    const client = tx ?? this.prisma;
    return client.usuario.create({ data });
  }

  async criarDiretor(
    usuarioId: string,
    tx?: Prisma.TransactionClient,
  ): Promise<void> {
    const client = tx ?? this.prisma;
    await client.diretor.create({ data: { usuarioId } });
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }
}
