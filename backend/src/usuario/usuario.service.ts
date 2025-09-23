import { Injectable } from '@nestjs/common';
import { CreateDiretorDto } from './dtos/diretor.dto';
import { UsuarioJaExisteError } from 'src/erros/usuario-ja-existe.error';
import * as bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';
import { UsuarioRepository } from './repositories/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async criarDiretor(diretor: CreateDiretorDto, tx?: Prisma.TransactionClient) {
    const usuarioExiste = await this.usuarioRepository.buscarPorEmail(
      diretor.email,
    );
    if (usuarioExiste) {
      throw new UsuarioJaExisteError();
    }

    const senhaHash = await bcrypt.hash(diretor.senha, 7);

    const usuario = await this.usuarioRepository.criarUsuario(
      {
        ...diretor,
        senha: senhaHash,
        cargo: 'DIRETOR',
        ativo: true,
      },
      tx,
    );

    await this.usuarioRepository.criarDiretor(usuario.id, tx);

    // Remove senha do objeto retornado
    const { senha: _senha, ...usuarioCriado } = usuario;

    return { usuario: usuarioCriado };
  }
}
