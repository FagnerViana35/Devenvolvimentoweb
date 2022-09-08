/* eslint-disable prettier/prettier */
import { Usuario } from './../entity/usuario.entity';
import { UsuarioService } from './../services/usuario.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) {};
  @Get(':nomeDeUsuario')
  public buscarPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string){
    const usuarioEncontrado = this.usuarioService.buscarPorNomeDeUsuario(nomeDeUsuario);
    return usuarioEncontrado;
  }
  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    const usuarioCriado = this.usuarioService.cria(usuario);
    console.log(usuarioCriado);
    return usuarioCriado;
  };
}