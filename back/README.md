Documentação da API de usuario(Backend):

Essa é uma API simples de CRUD de usuarios com listagem de todos ou um usuario, e autenticação com token via login. Para a API foi utilizado Node e Express com typescript e typeOrm para integração com banco de dados postgres. Para mais informações de versões e bibliotecas verificar o arquivo package.json.


Pré-requisitos:
Para configuração e instalação adequada do projeto precisa já existir a instalação das seguintes ferramentas:

Node, npm,typescript, docker, docker-compose, editor de código(vs code foi minha escolha)

Passos para rodar o projeto em ambiente linux:
1 - Após o downdolad, rode o comando para baixar as dependendencias:
    `npm install`

2 - Então para a criação do banco de dados:
    `npm run create-db`

3 - Banco de dados criado em container, agora basta rodar a aplicação:
    `npm start`

O banco de dados via docker funciona na rota 5433, e não 5432 como padrão

Ending points
A aplicação funicona no endereço http://localhost:3131/users/ , em que todas as rotas utilizam /users.

Criação
POST /
    Descrição: Cria um novo usuário.
    Controller: userCreateController
    Método: POST
    Autenticação: Não requer autenticação.
Login
    POST /login
    Descrição: Autentica um usuário.
    Controller: userLoginController
    Método: POST
    Autenticação: Não requer autenticação.
Dados de um usuario via ID
    GET /me/:id
    Descrição: Retorna informações de um usuário específico pelo ID.
    Controller: userListOneController
    Método: GET
    Autenticação: Requer autenticação do usuário.
Dados de todos usuarios
    GET /
    Descrição: Retorna a lista de todos os usuários.
    Controller: userListController
    Método: GET
    Autenticação: Requer autenticação do usuário.
Deleção de um usuario
    DELETE /me/delete
    Descrição: Deleta o usuário autenticado.
    Controller: userDeleteSelfController
    Método: DELETE
    Autenticação: Requer autenticação do usuário.
Alteração
    PATCH /me/update
    Descrição: Atualiza informações do usuário autenticado.
    Controller: userUpdateController
    Método: PATCH
    Autenticação: Requer autenticação do usuário.

Obs: para deleção e alteração pode apenas ser feito com a autenticação do próprio usuario.



Scripts (Conforme o package.json os scripts)
`npm run create-db`
    `docker run -d --name my-postgres-db -e POSTGRES_USER=mytapp -e POSTGRES_PASSWORD=mytapp1234 -e POSTGRES_DB=mytapp -p 5433:5432 postgres`
`npm start`
    `npx tsx src/index.ts`