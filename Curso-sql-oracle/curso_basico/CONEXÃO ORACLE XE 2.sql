--Inserir dados nas Tabelas

INSERT INTO tb_vendedores 
(matricula, nome, percentual_comissao)
VALUES
('00233', 'José Geraldo da Fonseca', 0.10);

INSERT INTO tb_vendedores 
(matricula, nome, percentual_comissao)
VALUES
('00235', 'Márcio Almeida Silva', 0.08);

INSERT INTO tb_vendedores 
(matricula, nome, percentual_comissao)
VALUES
('00236', 'Cláudia Morais', 0.08);

INSERT INTO tb_vendedores 
(matricula, nome, percentual_comissao, data_admissao, de_ferias)
VALUES
('00237', 'Roberta Martins', 0.11, to_date('18/03/2017', 'dd/mm/yyyy'), 'Sim');

INSERT INTO tb_vendedores 
(matricula, nome, percentual_comissao, data_admissao, de_ferias)
VALUES
('00238', 'Péricles Alves', 0.11, to_date('21/08/2016', 'dd/mm/yyyy'), 'Não');

INSERT INTO tb_vendedores 
(matricula, nome, percentual_comissao)
VALUES
('00236', 'Cláudia Morais', 0.08);


--Alterar dados da tabela vendedor

UPDATE tb_vendedores 
SET data_admissao = to_date('15/08/2014', 'dd/mm/yyyy'), de_ferias = 'Não'
WHERE matricula = '00235';

UPDATE tb_vendedores 
SET data_admissao = to_date('17/09/2013', 'dd/mm/yyyy'), de_ferias = 'Sim' 
WHERE matricula = '00236';

UPDATE tb_vendedores 
SET data_admissao = to_date('20/10/2014', 'dd/mm/yyyy'), de_ferias = 'Não'
WHERE matricula = '00233';


-- Comando Delete
DELETE from tb_vendedores
WHERE nome = 'José Geraldo da Fonseca'; 

-- Comando Alterar
ALTER table tb_vendedores 
add CONSTRAINT pk_vendedores 
primary key (matricula);

ALTER table tb_vendedores add DATA_ADMISSAO date;

alter TABLE tb_vendedores add DE_FERIAS varchar2(10);

Select * from tb_vendedores;

-- ########################################

--Inserir dados nas Tabelas
INSERT INTO tb_produtos
(produto, nome, embalagem, tamanho, sabor, preco_lista)
VALUES
('1040107','Light - 350 ml Melância','Lata', '350 ml', 'Melância', 4.56);

INSERT INTO tb_produtos
(produto, nome, embalagem, tamanho, sabor, preco_lista)
VALUES
('1037797','Clean - 2 litros - Laranja','Pet', '2 Litros', 'Laranja', 16.01);

INSERT INTO tb_produtos
(produto, nome, embalagem, tamanho, sabor, preco_lista)
VALUES
('1000889','Sabor da Montanha - 700 ml - Uva','Garrafa', '700ml', 'Uva', 6.31);

INSERT INTO tb_produtos
(produto, nome, embalagem, tamanho, sabor, preco_lista)
VALUES
('1004327','Clean - 2 litros - Laranja','Pet', '2 Litros', 'Laranja', 16.01);

INSERT INTO TB_PRODUTOS
(PRODUTO, NOME, EMBALAGEM, TAMANHO, SABOR, PRECO_LISTA)
VALUES
('1004327','Videira do Campo - 1,5 Litros - Melância', 'PET','1,5 Litros','Melância',19.51);

Select * from tb_produtos;

--Alterar dados da tabela produtos
Update tb_produtos 
SET preco_lista = 3.99, embalagem = 'Garrafa'  
where produto = '1040107'; 

UPDATE tb_produtos 
SET embalagem = 'Lata'
WHERE produto = '1000889';

--Deleta produtos
DELETE from tb_produtos
where PRODUTO = 1040107;

Alter table tb_produtos 
add constraint PK_tb_produtos 
PRIMARY KEY (tb_produtos); 

-- Tabela clientes

Insert INTO TB_CLIENTES 
(CPF, nome_completo, ENDERECO1, ENDERECO2, BAIRRO, CIDADE, ESTADO, CEP, IDADE, SEXO,LIMITE_CREDITO, VOLUME_COMPRA, PRIMEIRA_COMPRA, DATA_NASCIMENTO)
VALUES
('00388934505','João da Silva','Rua Projetada A número 10',NULL , 'VILA ROMAN', 'TRÊS RIOS', 'RJ', '22222222',
53, 'M', 20000.00, 2000, 0,'12/10/1965');

INSERT INTO TB_CLIENTES (CPF, nome_completo, ENDERECO1, ENDERECO2, BAIRRO, CIDADE, ESTADO, CEP, IDADE, SEXO,
LIMITE_CREDITO, VOLUME_COMPRA, PRIMEIRA_COMPRA, DATA_NASCIMENTO)
VALUES
('00388934505','João da Silva','Rua Projetada A número 10',NULL , 'VILA ROMAN', 'TRÊS RIOS', 'RJ', '22222222',
53, 'M', 20000.00, 2000, 0,TO_DATE('12/10/1965','DD/MM/YYYY')); 

INSERT INTO TB_CLIENTES (CPF, nome_completo, ENDERECO1, ENDERECO2, BAIRRO, CIDADE, ESTADO, CEP, IDADE, SEXO,
LIMITE_CREDITO, VOLUME_COMPRA, PRIMEIRA_COMPRA, DATA_NASCIMENTO)
VALUES
('00388934777','João da Silva','Rua Projetada A número 10',NULL , 'VILA ROMAN', 'TRÊS RIOS', 'RJ', '22222222',
53, 'M', 20000.00, 2000, 0,TO_DATE('12/10/1965','MM/DD/YYYY'));

alter table tb_clientes add CEP varchar2(50);

Delete from tb_clientes 
WHERE cpf = '00388934777';

select to_char(DATA_NASCIMENTO, 'yyyy') from tb_clientes;

alter table tb_clientes add CONSTRAINT PK_clientes PRIMARY KEY (cpf);

alter table tb_clientes add data_nascimento date;

select * from tb_clientes;

--https://cursos.alura.com.br/course/oracle-database-sql-dml/task/59747

