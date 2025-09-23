import { Module } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CadastroController } from './cadastro.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { HospitalModule } from 'src/hospital/hospital.module';

@Module({
  imports: [HospitalModule],
  controllers: [CadastroController],
  providers: [CadastroService, UsuarioService, UsuarioRepository],
})
export class CadastroModule {}
