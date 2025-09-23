import { Injectable } from '@nestjs/common';
import { CreateHospitalDto } from './dtos/hospital.dto';
import { HospitalJaExisteError } from 'src/erros/hospital-ja-existe.error';
import { Prisma } from '@prisma/client';
import { HospitalRepository } from './repositories/hospital.repository';

@Injectable()
export class HospitalService {
  constructor(private readonly hospitalRepository: HospitalRepository) {}

  async criarHospital(
    hospitalData: CreateHospitalDto,
    tx?: Prisma.TransactionClient,
  ) {
    const hospitalExiste = await this.hospitalRepository.buscarPorEmail(
      hospitalData.email,
    );

    if (hospitalExiste) {
      throw new HospitalJaExisteError();
    }

    const hospital = await this.hospitalRepository.criarHospital(
      hospitalData,
      tx,
    );

    return { hospital };
  }
}
