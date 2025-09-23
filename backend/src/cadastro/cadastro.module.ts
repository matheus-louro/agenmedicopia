import { Module } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CadastroController } from './cadastro.controller';
import { HospitalModule } from 'src/hospital/hospital.module';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [HospitalModule, UsuarioModule],
  controllers: [CadastroController],
  providers: [CadastroService],
})
export class CadastroModule {}
