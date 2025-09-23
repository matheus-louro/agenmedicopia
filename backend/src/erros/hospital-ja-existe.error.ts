import { ConflictException } from '@nestjs/common';

export class HospitalJaExisteError extends ConflictException {
  constructor() {
    super('Hospital já cadastrado.');
  }
}
