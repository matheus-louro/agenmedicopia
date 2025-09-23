import { Injectable } from '@nestjs/common';
import { HospitalService } from 'src/hospital/hospital.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CreateCadastroDiretorHospitalDto } from './dtos/cadastro-diretor-hospital.dto';

@Injectable()
export class CadastroService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly hospitalService: HospitalService,
    private readonly prisma: PrismaService,
  ) {}

  async cadastrarDiretorEHopsital(
    cadastroData: CreateCadastroDiretorHospitalDto,
  ) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Criar hospital
      const { hospital } = await this.hospitalService.criarHospital(
        cadastroData.hospital,
        tx,
      );

      // 2. Criar diretor vinculado ao hospital
      const { usuario } = await this.usuarioService.criarDiretor(
        {
          ...cadastroData.diretor,
          hospitalId: hospital.id,
        },
        tx,
      );

      return { hospital, usuario };
    });
  }
}
