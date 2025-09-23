import { Hospital } from '@prisma/client';

export type CreateHospitalInput = {
  nome: string;
  rua: string;
  bairro: string;
  cidade: string;
  uf: string;
  telefone: string;
  email: string;
  cnpj: string;
};

export abstract class HospitalRepository {
  abstract criarHospital(
    data: CreateHospitalInput,
    tx?: any,
  ): Promise<Hospital>;
  abstract buscarPorEmail(email: string): Promise<Hospital | null>;
}
