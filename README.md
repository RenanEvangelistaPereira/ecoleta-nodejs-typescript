# < next \_level\_ week/>
## => E-Coleta
#### nodejs
#### Typescript
#### Express
#### ReactJs
#### React Native
#### KnexJs
#### SQLite3
#### Expo
#### Visual Studio Code

Essa é a semana mundial do meio ambiente!

Aplicação que funciona como um marketplace entre empresas ou entidades que coletam resíduos a pessoas que precisam dscartar esses resíduos. 

### API RESTful

A api vai seguir os padrões REST.

**Back-end** vai ser construido com o Node.js e vai carregar as regras de negócio, conexão com banco de dados, envio de e-mails ou conexão com serviços externos, autenticação e autorização dos usuários, criptografia e segurança

Padrão **MVC** **(Model - View - Controller) →** o conceito de VIEW era contemplado com o Template Engine, que é uma forma de conseguir retornar HTML do back-end. 

Mas, vamos seguir a estrutura de **REST →** ao invés de ter os templates engines, quando usuário acessar a nossa rota " /usuários" ao invés de retornar todo o html contendo a listagem de usuários, vamos retornar apenas os **dados** dos usuários em formato **JSON,** e a partir dessa estrutura vamos alimentar o **Front-end (ReactJS)** que vai me fornecer a listagem de usuários (html & css). 

Ou seja,  antigamente o back era todo o coração da aplicação, mas agora foi divido. 

Como estamos desenvolvendo uma API a gente tem mais flexibilidade de utilização e podemos ter tbm aplicação **Mobile (React Native)** que vai consumir os dados da API como no front-end.

### Typescript 🤓

É um super-set. **JS** com a possibilidade de adicionar **TIPAGENS.**

**PQ USAR?** **→** nem sempre as informações que temos dentro do código são claras o suficiente e nos dão detalhes de como são as estruturas dos dados, os retorno das funções e etc. 

**IntelliSense** **→** ctrl + space às vezes não nos traz as informações contidas, e isso é por falta de tipagem! Então a partir do momento que adicionamos o typescript temos essa facilidade, ele nos traz as informações das propriedades. Essa é a facilidade que o typescript nos traz. 

**Inferência de tipos →** quer dizer que vamos precisar adicionar tipagens em variáveis em uns 10% dos casos, na maioria o typescript já vai fazer automaticamente.

Definicão de tipos → traz as informações de todas as opções que eu tenho dentro do express

### Starting Back-end ⚙️

Instalo o **express**

Instalo o **'npm install @types/express'**

Instalo **'npm install typescript -D'**

Após criar a minha primeira rota e for rodar com **'node src/server. ts'** vou receber um **erro.** O **node** só entende **JS** → tenho que instalar **'npm install ts-node'** 

Toda vez que crio uma aplicação **TS** eu preciso ter um arquivo de **configuração de TS** (tsconfig.json) que define quais features de TS que eu quero usar **→** rodo **'npx tsc —init'** e ele cria automaticamente esse arquivo e eu não preciso mexer em nada. 

Depois executo '**npx ts-node src/server.ts',** assim inicio a aplicação e vou até a **port3333** (npx serve para executar um pacote que instalei...ele faz toda a rota até a pasta 'bin')

**Request (req) →** eu uso para obter dados sobre a nossa requisição (formulário, por ex.)

**Response (res) →** obter resposta para o navegador ou qqr outra aplicação que esteja consumindo essa rota.  Como vamos utilizar formato json, eu coloco **'res.json'** ao invés de 'res.send'. 

**'npm install ts-node-dev -D' →**  esse pacote vai fazer a mesma coisa que o ts node, mas ele fica olhando (assim como o nodemon). E para rodar é '**npx ts-node-dev src/server.ts',**

Posso criar no meu package.json um script **"dev": "ts-node src/server.ts"** e depois para rodar **'npm run dev'** 

### Starting Front-end 🖥️

**ReactJs →** biblioteca para construção de interfaces (o que o usuário interage). 

Utilizado para construção de **SPA →** alterno de uma rota para outra (pág p/ outra) dentro da minha aplicação eu não preciso ter o **recarregamentos** completo da tela. Grande parte do código é compartilhado. 

Tudo que utilizo (css...) fica dentro do JS. 

É subdivido em mais pacotes: react, reactJs, react native. 

**Vantagens** 

1. Organização do código (componentização, ex: um botão reutilizável);
2. Divisão de responsabilidades (back: regra de negócio; front: interface);  
3. Uma API, múltiplos clientes. 

**Iniciando o diretório → '**npx create-react-app  **web --template=typescript'** 

### React Native & Expo 📱

Todo o código feito é em JS, esse código **não é convertido em código nativo**. O dispositivo passa a entender o código JS e a **interface gerada é totalmente nativa**.

No final funciona tanto em iOS e Android. 

**Expo** **→** com o Expo, instalamos o app no celular chamado Expo, e dentro dele, tudo o que precisamos para desenvolver no React Native já está instalado, como as API's de mapas, geolocalização, câmera, etc. 

Com isso não precisamos nos preocupar em gerar um app para Android e iOS já que o app do Expo instalado tem tudo o que precisamos.

Assim usamos apenas o React.