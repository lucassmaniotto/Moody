# Moody 🌦️

CRUD Fullstack desenvolvido em ReactJS, NodeJS e integração com Microsoft SQL Server sobre registro de humor diário.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Moody 🌦️**
| :label: Tecnologias | javascript, html, css, styled-components, npm, react, node, express, mssql, insomnia, vercel
| :rocket: URL         | https://moody-murex.vercel.app/

## Detalhes do projeto

Moody é um projeto de sistema web que contém um CRUD (Create, Read, Update, Delete) de registro de humor diário, além de um sistema de login e registro de usuários. O projeto foi desenvolvido com o objetivo de colocar em prática os conhecimentos adquiridos em ReactJS e NodeJS, além de integração com banco de dados Microsoft SQL Server. Conforme o usuário realiza o login, ele é redirecionado para a página de registro de humor diário, onde ele pode registrar seu humor diário, além de visualizar os registros anteriores. O usuário também pode editar e excluir seus registros.

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

* Backend
  * [express](https://www.npmjs.com/package/express)
  * [mssql](https://www.npmjs.com/package/mssql)
  * [cors](https://www.npmjs.com/package/cors)
  * [dotenv](https://www.npmjs.com/package/dotenv)
  * [bcrypt](https://www.npmjs.com/package/bcrypt)

### 💡 Funcionalidades
