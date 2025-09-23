import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateDiretorDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  senha: string;

  @IsString()
  @IsOptional()
  telefone?: string;

  @IsString()
  cpf: string;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsOptional()
  @IsString()
  hospitalId?: string;
}
