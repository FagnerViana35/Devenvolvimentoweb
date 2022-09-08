/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
 constructor(
  @InjectModel(Livro)
  private livroModel: typeof Livro,
 ){}

  async obterTodos(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async obterUm(id: number): Promise<Livro[]> {
    return this.livroModel.findByPk(id);
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number) {
    return this.livros.splice((id -1), 1);
    // this.livros.pop();
  }
}
