import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import {
  CreateHospitalDto,
  HospitalCriadoResponseDto,
} from 'src/hospital/dtos/hospital.dto';
import { CreateDiretorDto } from 'src/usuario/dtos/diretor.dto';
import { UsuarioResponseDto } from 'src/usuario/dtos/usuario.dto';

export class CreateCadastroDiretorHospitalDto {
  @ValidateNested()
  @Type(() => CreateDiretorDto)
  diretor: CreateDiretorDto;

  @ValidateNested()
  @Type(() => CreateHospitalDto)
  hospital: CreateHospitalDto;
}

export class CadastroDiretorHospitalCriadoResponseDto {
  @Type(() => UsuarioResponseDto)
  usuario: UsuarioResponseDto;

  @Type(() => HospitalCriadoResponseDto)
  hospital: HospitalCriadoResponseDto;
}
