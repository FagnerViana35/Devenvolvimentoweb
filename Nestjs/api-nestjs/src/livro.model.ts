import { Table, Model, Column, DataType } from "sequelize-typescript";

/* eslint-disable prettier/prettier */
@Table
export class Livro extends Model<Livro> {
  
  @Column({
    type: DataType.STRING(60),
    allowNull: false
  })
  codigo: string;


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nome: string;
  

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  preco: number;

}
//https://cursos.alura.com.br/course/nestjs-api-rest-typescript/task/84928