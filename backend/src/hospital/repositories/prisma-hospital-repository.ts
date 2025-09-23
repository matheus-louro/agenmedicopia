import { Injectable } from '@nestjs/common';
import { Hospital, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHospitalInput, HospitalRepository } from './hospital.repository';

@Injectable()
export class PrismaHospitalRepository implements HospitalRepository {
  constructor(private readonly prisma: PrismaService) {}

  async criarHospital(
    data: CreateHospitalInput,
    tx?: Prisma.TransactionClient,
  ): Promise<Hospital> {
    const client = tx ?? this.prisma;
    return client.hospital.create({ data });
  }

  async buscarPorEmail(email: string): Promise<Hospital | null> {
    return this.prisma.hospital.findUnique({
      where: { email },
    });
  }
}
