import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './repositories/usuario.repository';
import { PrismaUsuarioRepository } from './repositories/prisma-usuario-repository';

@Module({
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    { provide: UsuarioRepository, useClass: PrismaUsuarioRepository },
  ],
  exports: [UsuarioService, UsuarioRepository],
})
export class UsuarioModule {}
