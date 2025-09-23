import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HospitalModule } from './hospital/hospital.module';
import { CadastroModule } from './cadastro/cadastro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    PrismaModule,
    UsuarioModule,
    HospitalModule,
    CadastroModule,
  ],
})
export class AppModule {}
