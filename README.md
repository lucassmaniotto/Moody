# Moody 🌦️

CRUD Fullstack desenvolvido em ReactJS, NodeJS e integração com Microsoft SQL Server sobre registro de humor diário.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Moody 🌦️**
| :label: Tecnologias | javascript, html, css, styled-components, npm, react, node, express, mssql, insomnia, vercel
| :rocket: URL         | https://moody-murex.vercel.app/

![Banner](https://github.com/lucassmaniotto/Moody/assets/101435037/ad96402b-8b4a-43b2-9fcb-01a6b4ca617c.png#vitrinedev)


## Detalhes do projeto

Moody é um projeto de sistema web que contém um CRUD (Create, Read, Update, Delete) de registro de humor diário, além de um sistema de login e registro de usuários. O projeto foi desenvolvido com o objetivo de colocar em prática os conhecimentos adquiridos em ReactJS (useState, useEffect, useContext, useNavigate), NodeJS (Express e integração com banco de dados) e Microsoft SQL Server.
### ⚙️ Configurando o projeto
O projeto foi desenvolvido com o gerenciador de pacotes [npm](https://www.npmjs.com/), portanto, para executar o projeto é necessário ter o Node instalado no seu computador. Para instalar as dependências do projeto, execute o comando abaixo nos diretórios `Moody/frontend` e `Moody/backend`:

```bash
npm install
```

### 📁 Estrutura do projeto
O projeto foi subdividido em duas pastas principais, sendo elas:
* **backend**: contém o código do servidor, desenvolvido em NodeJS com Express e integração com Microsoft SQL Server.
* **frontend**: contém o código do cliente, desenvolvido em ReactJS com Styled Components.

Adicionalmente, o projeto possui uma pasta **docs** que contém os arquivos referentes ao esquema do banco de dados e o arquivo de rotas do Insomnia para testar as requisições da API.
Também na pasta **db** contém o arquivo de criação do banco de dados e suas tabelas, além de um arquivo de inserção de dados para testes.

### ▶️ Executando o projeto
No diretório `Moody/frontend`, você pode executar o comando abaixo para rodar o Frontend:
```bash
npm start
```
Com o comando acima, você irá rodar o projeto em modo de desenvolvimento que pode ser acessado em [http://localhost:3000](http://localhost:3000) no seu navegador.

Para rodar o Backend, você pode executar o comando abaixo no diretório `Moody/backend`:
```bash
npm run dev
```

Com o comando acima, você irá rodar o projeto em modo de desenvolvimento que pode ser acessado em [http://localhost:3333](http://localhost:3333) no seu navegador.

### 📚 Bibliotecas
* Frontend
  * [create-react-app](https://www.npmjs.com/package/create-react-app)
  * [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  * [react-icons](https://www.npmjs.com/package/react-icons)
  * [styled-components](https://www.npmjs.com/package/styled-components)
  * [sweetalert2](https://www.npmjs.com/package/sweetalert2)
  * [eslint](https://www.npmjs.com/package/eslint#installation-and-usage)
  * [prettier](https://prettier.io/)

* Backend
  * [express](https://www.npmjs.com/package/express)
  * [nodemon](https://www.npmjs.com/package/nodemon)
  * [mssql](https://www.npmjs.com/package/mssql)
  * [cors](https://www.npmjs.com/package/cors)
  * [dotenv](https://www.npmjs.com/package/dotenv)
  * [bcrypt](https://www.npmjs.com/package/bcrypt)
  * [eslint](https://www.npmjs.com/package/eslint#installation-and-usage)
  * [prettier](https://prettier.io/)

### 💡 Funcionalidades

#### Login e registro de usuários
O Moody conta com um formulário de registro e login de usuários, onde o usuário pode se cadastrar e fazer login para acessar o sistema. Para o registro de usuários, é necessário informar um nome, um e-mail e uma senha e os dados são enviados para a API que os insere no banco de dados. Para o login, é necessário informar o e-mail e a senha e os dados são enviados para a API que verifica se o usuário existe e se a senha está correta. Caso o usuário não exista ou a senha esteja incorreta, o usuário é informado com uma mensagem de erro.

![Login](https://github.com/lucassmaniotto/Moody/assets/101435037/672dbd02-8e64-4d0b-a913-9c96fffc49a7)

![Registro](https://github.com/lucassmaniotto/Moody/assets/101435037/ae951289-db0b-4c3d-8e5b-8fff67abf879)

Quando o usuário entra no sistema, é utilizado o Context API do React para armazenar seu ID e nome, e assim listar os registros vinculados ao seu código. Caso o usuário não possua nenhum registro, é exibido uma mensagem informando que não há registros vinculados ao seu usuário dentro da tabela.

![Robert Smith](https://github.com/lucassmaniotto/Moody/assets/101435037/ad96402b-8b4a-43b2-9fcb-01a6b4ca617c.png)

![No data](https://github.com/lucassmaniotto/Moody/assets/101435037/ae966fda-df25-4b6c-a95c-4d6cb4e5b7c2)

**OBS:** O sistema não possui um sistema de recuperação de senha, não está implementado a funcionalidade de autenticação e as validações de login são feitas apenas com o Context API do React.

#### CRUD de humor
O Moody conta com um CRUD de humor, onde o usuário pode registrar seu humor diário. Para isso, o usuário deve informar um tipo de humor já pré-cadastrado no banco de dados e uma descrição. Quando inserido os dados são salvos no banco de dados e inseridos na tabela, onde o tipo de humor é exibido com um emoji representando seu humor, a descrição e a data na qual foi cadastrado o humor. O usuário também pode editar e excluir um humor já cadastrado.

As ações de editar e excluir um humor podem ser realizadas na coluna "Ações" da tabela.

![Modal](https://github.com/lucassmaniotto/Moody/assets/101435037/dd50f1d4-07f0-4b86-8d2b-80e1e504415f)

Para editar um humor, o usuário deve clicar no botão de editar e preencher no modal do SweetAlert2 os dados que deseja alterar. Quando o usuário clica em salvar, os dados são enviados para a API que atualiza os dados no banco de dados e na tabela.

Casos o usuário queira excluir um humor, ele deve clicar no botão de excluir e confirmar a exclusão no modal do SweetAlert2. Quando o usuário confirma a exclusão, os dados são enviados para a API que exclui os dados do banco de dados e da tabela.
