import { describe, it, expect, beforeEach } from 'vitest';
import { HospitalService } from '../hospital.service';
import { InMemoryHospitalRepository } from '../repositories/in-memory-hospital-repository';
import { CreateHospitalDto } from '../dtos/hospital.dto';
import { HospitalJaExisteError } from 'src/erros/hospital-ja-existe.error';
import { HospitalRepository } from '../repositories/hospital.repository';

describe('HospitalService', () => {
  let service: HospitalService;
  let repository: InMemoryHospitalRepository;

  beforeEach(() => {
    repository = new InMemoryHospitalRepository();
    service = new HospitalService(repository as HospitalRepository);
  });

  it('deve criar um hospital quando não existe', async () => {
    const dto: CreateHospitalDto = {
      nome: 'Hospital Teste',
      rua: 'Rua A',
      bairro: 'Centro',
      cidade: 'Cidade',
      uf: 'SP',
      telefone: '111234567',
      email: 'teste@hospital.com',
      cnpj: '12345678000199',
    };

    const result = await service.criarHospital(dto);
    expect(result.hospital.nome).toBe('Hospital Teste');
    expect(repository.items).toHaveLength(1);
  });

  it('deve lançar erro se hospital já existe', async () => {
    const dto: CreateHospitalDto = {
      nome: 'Hospital Teste',
      rua: 'Rua A',
      bairro: 'Centro',
      cidade: 'Cidade',
      uf: 'SP',
      telefone: '111234567',
      email: 'teste@hospital.com',
      cnpj: '12345678000199',
    };

    await service.criarHospital(dto);

    await expect(service.criarHospital(dto)).rejects.toThrow(
      HospitalJaExisteError,
    );
  });
});
