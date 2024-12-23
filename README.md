# 📧 SQS Communication with nodeJs

## 🌍 Languages

- 🇺🇸 [English](#-english)
- 🇧🇷 [Português](#-português)

---

## 🇺🇸 English

Welcome to my project! This project shows how to make an communication with SQS using NodeJs with ExpressJs.

### How to start
- **Queues**

    The first thing you need to do is to set up the AWS environment. You can do it using the 
[Docker compose file](./docker-compose.yml) by running this command: `docker compose up -d`

    If you already have an SQS local environment or a AWS account with a SQS service running, you can configure the
values in the [configuration file](./config/default.json).


- **Install dependencies**
 
    Before you start the project, you need to install all it's dependencies. You can do it by running:

    `npm install`


- **Run**

    You can start the project by running:

    `npm run dev`

### How to consume

Once the project is running, you can consume its APIs by accessing the 
[swagger documentation](http://localhost:3000/api-docs/).


## 🇧🇷 Português


Bem-vindos ao meu projeto! Este projeto mostra como realizar uma comunicação com a mensageria SQS usando NodeJs com
o Expressjs.

### Como iniciar
- **Filas**

  A primeira coisa a ser feita é preparar o ambiente AWS. Você pode fazer isso usando o 
[arquivo Docker Compose](./docker-compose.yml) rodando este comando: `docker compose up -d`

  Se você já possui uma fila SQS localmente, ou uma conta AWS com o serviço SQS rodando, você pode configurar os valores
  no [arquivo de configurações](./config/default.json).


- **Instalar dependências**

  Antes de iiciar o projeto, você precisa instalar as dependências. Você pode fazer isso rodando o seguinte comando:

  `npm install`


- **Run**

  Você pode rodar o projeto usando o seguinte comando

  `npm run dev`

### Como consumir

Quando o projeto estiver rodando, você pode consumir sua API acessando a [documentação swagger](http://localhost:3000/api-docs/).
