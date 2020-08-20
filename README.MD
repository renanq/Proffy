# PROFFY

Desenvolvido por [Renan Queiroz](https://www.rqweb.com.br) | [renan@rqweb.com.br](mailto:renan@rqweb.com.br)

Aplicação criada na NEXT LEVEL WEEK 2, da [Rocket Seat](https://rocketseat.com.br), para conectar alunos e professores. Os professores, através de uma aplicação WEB, conseguem cadastrar suas aulas disponíveis (dia de semana, horário e matéria), e o aluno consegue encontrar essas aulas, tanto pela WEB quanto pelo aplicativo, de acordo com suas necessidades, e a partir daí se conectar a um professor.

O Aplicativo mobile ainda permite salvar os professores favoritos utilizando local storage.

A parte WEB com layout responsivo utilizando o conceitop Mobile-First. 

Foi contruída uma base de dados em SQLite para armazenar as informações, além de APIs, criadas em NODE.js, para que a aplicação WEB (react.js) e o aplicativo mobile (React Native) consigam interagir corretamente.


#### WEB:

![](/assets/WEB-Home.png)

![](/assets/WEB-Dar_Aulas.png)

![](/assets/WEB-Estudar.png)

#### Mobile:

![](/assets/APP-01.png) ![](/assets/APP-02.png) ![](/assets/APP-03.png) ![](/assets/APP-04.png) ![](/assets/APP-05.png)


## Começando

Para executar o projeto, será necessário instalar os seguintes programas:

- [Node.js: para executar o backend](https://nodejs.org/)
- [Yarn: gerenciador de pacotes utilizado](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- [Expo Client: para executar o aplicativo mobile no seu celular](https://expo.io/)
- instalar as dependências necessárias da parte WEB, listadas no arquivo [package.json](/web/package.json)
- instalar as dependencias necessárias do backend, listadas no arquivo [package.json](/server/package.json)

Após estar com ambiente pronto, deve-se criar o banco de dados:

- Executar, na pasta "server", o comando "yarn run knex:migrate"


## Executando o projeto 

Para utilizar, basta iniciar cada parte do projeto:

- Backend: acessar a pasta "server" e executando o comando "yarn start"
- WEB: acessar a pasta "web" e executar "yarn start"
- Mobile: acessar a pasta "app" e executar o comando "yarn start"