import { Body, Controller, Post } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import {
  CadastroDiretorHospitalCriadoResponseDto,
  CreateCadastroDiretorHospitalDto,
} from './dtos/cadastro-diretor-hospital.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Cadastro de diretor e hospital')
@Controller('cadastro')
export class CadastroController {
  constructor(private readonly cadastroService: CadastroService) {}

  @ApiCreatedResponse({
    description: 'Diretor e Hospital cadastrados com sucesso.',
    type: CadastroDiretorHospitalCriadoResponseDto,
  })
  @Post('diretor-hospital')
  async cadastrarDiretorEHopsital(
    @Body() cadastroData: CreateCadastroDiretorHospitalDto,
  ) {
    return this.cadastroService.cadastrarDiretorEHopsital(cadastroData);
  }
}
