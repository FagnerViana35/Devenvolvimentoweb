/* eslint-disable prettier/prettier */
import { IsNomeDeUsuarioUnicoConstraint } from './../validations/is-nome-de-usuario-unico.validatitor';
import { Module } from '@nestjs/common';
import { UsuarioController } from '../controllers/usuario.controller';
import { UsuarioService } from '../services/usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [
    UsuarioService, 
    IsNomeDeUsuarioUnicoConstraint
  ],
})
export class UsuarioModule{


}