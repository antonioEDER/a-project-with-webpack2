# configuring-project-with-webpack2
Configurando projeto com webpack 2


```
Esse é um projeto desenvolvido com webpack 2.

Nele vamos explorar ainda:
- Express
- Babel
- CSS CSS Loaders
- Code Splinting
- Tree Shaking
- Dead Code
- Performance Tuning.
- Dev Server
- Hot Module replacement
- Plugins Loaders

```
Para o projeto foi criado os arquivos:
- index.html
- server.js (Servidor em nodejs para subir nosso projeto)
- webpack.config.js (Onde fica as configurações do webpack para geração do bundle)
- Diretorio app com exemplo de modulos.
- Diretorio dist com as aquivos do build do webpak
- package.json (Onde fica as dependecias do projeto e os scripts para o webpack)

<h2 align="center">Install</h2>

Build Development with yarn:

```bash
yarn build:dev
```

Build Prod with yarn:

```bash
yarn build
```

Start with yarn:

```bash
yarn start
```

Serve with webpack-dev-serve:

```bash
yarn serve
```

Serve with express Development:

```bash
yarn express
```

Serve with express Prod:

```bash
yarn express:prod
```

Serve with Hot Module Replacemnt:

```bash
yarn hot
```

Clean path /dist:

```bash
yarn clean
```