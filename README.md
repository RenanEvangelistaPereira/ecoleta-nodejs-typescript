#  E-Coleta ♻️ 
### < next \_level\_ week/>

[![N|Rocket](https://img.shields.io/badge/made%20by-Rocketseat-%237519C1)](https://nodesource.com/products/nsolid)


O E-Coleta ♻️  é  cloud-enabled, mobile-ready, desenvolvido proinciplamente com:
- nodejs
- Typescript
- Express
- ReactJs
- React Native
- KnexJs
- SQLite3
- Expo
- Visual Studio Code


# Novos Recursos

  - Cadastro de Ponto de Coleta georreferenciado
  - Identificação de cada tipo de elemento a ser coletado em cada ponto de coleta

## Por que usar o E-Coleta ♻️?

O crescimento desenfreado na geração de resíduos sólidos urbanos e sua destinação final inadequada são alguns dos principais problemas identificados na gestão de resíduos sólidos no Brasil. 

Pensando em ajudar a reduzir a dificuldade em se fazer o descarte de forma correta de diversos materiais, permitindo em sua maioria na reutilização desses materiais, estamos desenvolvendo esta aplicação, criada incialmente na Next Level Week #1 Boost. Ela irá funcionar como um Marketplace entre empresas e/ou entidades que coletam esses resíduos e a pessoas que necessitam descartar de forma sustentável esses resíduos. 

O Dia Internacional da Reciclagem é comemorado em 17 de maio. A data foi instituída pela UNESCO (Organização das Nações Unidas para a Educação, a Ciência, e a Cultura) e busca estimular a reflexão sobre a importância de fazer o descarte correto dos itens que consumimos. Acesse [Limpa Brasil](https://www.limpabrasil.org/diadareciclagem/) para mais detalhes.


### API RESTful usando NodeJs e escrita em TypeScript

O **Back-end** será construido utilizando o Node.js onde ficarão hospedadas as regras de negócio, a conexão com banco de dados, e a utilização de APIs externas como o envio de e-mails, WhatsApp e demais serviços externos. Será responável, ainda, pela autenticação e autorização dos usuários, criptografia e segurança de uma maneira em geral.

Esta API será utilizada pela aplicação **Mobile (React Native)** que vai consumir os dados da API, assim como o Front-End Web **ReactJs** .

### Front-end Web 

Será utilizada para construção de **SPA →**  Single Page Application o ReactJS. 

### Front-end Mobile
React Native & Expo 📱
Aplicativo será gerado para Android e iOS. 

### Iniciando os projetos 

iniciando o back-end:
```sh
{rootprojectfolder}\server$ npm run dev
```

iniciando o front-end:
```sh
{rootprojectfolder}\web$ npm start
```

iniciando o mobile:
```sh
{rootprojectfolder}\mobile$ npm start
```


License
----

MIT