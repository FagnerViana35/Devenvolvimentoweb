/* eslint-disable prettier/prettier */
import { UsuarioService } from './../services/usuario.service';
import {registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint()
export class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

  constructor(private usuarioService: UsuarioService){}

  validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    return !!!this.usuarioService.buscarPorNomeDeUsuario(nomeDeUsuario);
  }
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNomeDeUsuarioUnicoConstraint,
        });
    };
}