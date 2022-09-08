/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { Exclude } from 'class-transformer';
import { IsNomeDeUsuarioUnico } from '../validations/is-nome-de-usuario-unico.validatitor';

export class Usuario {
  id: number;

  @IsNomeDeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser unico',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório.',
  })
  @IsString({
    message: 'nomeDeUsuario precisa ser uma string.',
  })
  nomeDeUsuario: string;

  @IsEmail(
    {},
    {
      message: 'email precisa ser um endereço de email válido.',
    },
  )
  email: string;
    
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'senha é obrigatório.',
  })
  senha: string;

  @IsNotEmpty({
    message: 'nomeCompleto é obrigatório.',
  })
  nomeCompleto: string;

  dataDeEntrada: Date;
}
