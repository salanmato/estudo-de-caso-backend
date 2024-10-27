#  Intruções de Instalação

## Banco de Dados

A query utilizada para criar tudo foi:

```sql
CREATE DATABASE db_backend;

USE db_backend;


CREATE TABLE tbl_professor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    data_nascimento DATE NOT NULL,
    logradouro VARCHAR(255),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado VARCHAR(2),
    cep VARCHAR(10),
    email VARCHAR(100)
);
```

## Node.js

### Bibliotecas utilizadas

* express
* cors
* mysql

### Instalação

Comando de instalação via terminal:
Na pasta base do projeto, utilizar o comando

npm install cors express mysql