import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { PrismaHospitalRepository } from './repositories/prisma-hospital-repository';
import { HospitalRepository } from './repositories/hospital.repository';

@Module({
  controllers: [HospitalController],
  providers: [
    HospitalService,
    { provide: HospitalRepository, useClass: PrismaHospitalRepository },
  ],
  exports: [HospitalService, HospitalRepository],
})
export class HospitalModule {}
