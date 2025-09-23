import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateDiretorDto } from './dtos/diretor.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioResponseDto } from './dtos/usuario.dto';

@ApiTags('Usuários')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiCreatedResponse({
    description: 'Diretor criado com sucesso.',
    type: UsuarioResponseDto,
  })
  @Post('/diretor')
  async criarDiretor(@Body() diretorData: CreateDiretorDto) {
    return this.usuarioService.criarDiretor(diretorData);
  }
}
