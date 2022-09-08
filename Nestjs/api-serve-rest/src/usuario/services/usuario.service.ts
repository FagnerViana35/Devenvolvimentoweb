/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Usuario } from '../entity/usuario.entity';

@Injectable()
export class UsuarioService {

  private usuarios: Array<Usuario> = [
    {
      id: 1,
      nomeDeUsuario: 'fagner',
      email: 'fagnerviana03@gamil.com',
      senha: '123456',
      nomeCompleto: 'Fagner Viana de Jesus',
      dataDeEntrada: new Date,
    }
  ];


  public cria(usuario: Usuario): Usuario{
    this.usuarios.push(usuario);
    return usuario;
  };

  public buscarPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
  }
}