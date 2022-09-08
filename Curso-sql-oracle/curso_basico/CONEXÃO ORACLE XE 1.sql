create table tb_clientes(
    cpf             varchar2(11) primary key,
    nome_completo   varchar2(100),
    endereco1       varchar2(150),
    endereco2       varchar2(150),
    bairro          varchar2(50),
    cidade          varchar2(50), 
    estado          varchar2(50),
    data_nasc       date,
    idade           int,
    sexo            varchar2(1),
    limite_credito  float,
    limite_compra   float,
    primeira_compra number(1)
); 

create table tb_produtos(
    produto       varchar2(20) primary key,
    nome          varchar2(150),                 
    embalagem     varchar2(50), 
    tamanho       varchar2(50),
    sabor         varchar2(50),  
    preco_lista   float
);

CREATE TABLE tb_VENDEDORES (
     MATRICULA varchar(5),
     NOME varchar(100),
     PERCENTUAL_COMISSAO float
);

--drop table tb_cliente;
--drop table tb_produtos;
--drop table tb_VENDEDORES;



