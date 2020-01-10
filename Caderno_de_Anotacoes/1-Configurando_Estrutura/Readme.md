# Configurando Estrutura

## Crie um package.json:

`yarn init -y`

## Instale Babel + Webpack

`yarn add --dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli babel-loader webpack-dev-server`

> Se vc salvar sem a flag `--dev`, não tem problema. Vc pode renomear
> `dependencies` para `devDependencies` no package.json.

## Instale o React

`yarn add react react-dom`

## babel.config.js

```javascript
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"]
};
```

## webpack.config.js

```javascript
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

## package.json

```diff
  "license": "MIT",
+  "scripts": {
+      "build": "webpack --mode production",
+      "dev": "webpack-dev-server --mode development"
+  },
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  },
```

## Para testar tudo

### src/index.js

```javascript
const soma = (a, b) => a + b;

alert(soma(1, 2));
```

### public/index.html

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>ReactJS</title>
  </head>
  <body>
    <h1>Hello World</h1>

    <script src="./bundle.js"></script>
  </body>
</html>
```

### testando bundle

Crie o bundle.js.

`yarn build`

### testanto dev mode

`yarn dev`

Acesse `localhost:8080`.
