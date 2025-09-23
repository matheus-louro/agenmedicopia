import { IsEmail, IsString } from 'class-validator';

export class CreateHospitalDto {
  @IsString()
  nome: string;

  @IsString()
  rua: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  uf: string;

  @IsString()
  telefone: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  cnpj: string;
}

export class HospitalCriadoResponseDto {
  id: string;
  nome: string;
  rua: string;
  bairro: string;
  cidade: string;
  uf: string;
  telefone: string;
  email: string;
  cnpj: string;
  criadoEm: Date;
  atualizadoEm: Date;
}
