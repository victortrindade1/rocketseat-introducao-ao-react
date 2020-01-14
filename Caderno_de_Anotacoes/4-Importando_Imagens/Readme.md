# Importando Imagens

## Instale file-loader

`yarn add file-loader -D`

## webpack.config.js

```diff
rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
-      }
+      },
+      {
+        test: /.*\.(gif|png|jpe?g)$/i,
+        use: {
+          loader: "file-loader"
+        }
+      }
    ]
```

## src/assets

Esta pasta contem arquivos estáticos como imagens.

## Testando importação de imagem

Coloque uma imagem-teste em src/assets.

### src/App.js

```diff
import React from "react";
import "./App.css";

+ import testImage from "./assets/test_image.png";

function App() {
-  return <h1>Hello Woorld!</h1> />;
+  return <img width="200" src={testImage} />;
}

export default App;
```
