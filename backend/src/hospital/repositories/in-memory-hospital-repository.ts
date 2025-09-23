import { Injectable } from '@nestjs/common';
import { CreateHospitalInput, HospitalRepository } from './hospital.repository';
import { Hospital } from '@prisma/client';

@Injectable()
export class InMemoryHospitalRepository implements HospitalRepository {
  public items: Hospital[] = [];

  async criarHospital(data: CreateHospitalInput): Promise<Hospital> {
    const novoHospital: Hospital = {
      ...data,
      id: String(this.items.length + 1),
      criadoEm: new Date(),
      atualizadoEm: new Date(),
    };

    this.items.push(novoHospital);
    return novoHospital;
  }

  async buscarPorEmail(email: string): Promise<Hospital | null> {
    return this.items.find((item) => item.email === email) || null;
  }
}
