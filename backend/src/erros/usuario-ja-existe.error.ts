import { ConflictException } from '@nestjs/common';

export class UsuarioJaExisteError extends ConflictException {
  constructor() {
    super('Usuário já existe.');
  }
}
