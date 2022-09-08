/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  //Lista todos os produtos listando tudo que tem na api
  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  // Lista os produtos listado por id
  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  // Criar produto na api
  @Post()
  criar(@Body() livro: Livro) {
    livro.id = 100;
    this.livrosService.criar(livro);
  }

  @Put()
  alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
