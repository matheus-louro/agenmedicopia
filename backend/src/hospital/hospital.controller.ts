import { Body, Controller, Post } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateHospitalDto,
  HospitalCriadoResponseDto,
} from './dtos/hospital.dto';

@ApiTags('Hospitais')
@Controller('hospitais')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @ApiCreatedResponse({
    description: 'Hospital criado com sucesso.',
    type: HospitalCriadoResponseDto,
  })
  @Post()
  async criarHospital(@Body() hospitalData: CreateHospitalDto) {
    return this.hospitalService.criarHospital(hospitalData);
  }
}
