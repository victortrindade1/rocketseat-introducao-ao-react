# Importando CSS

## Instale style-loader e css-loader

`yarn add style-loader css-loader -D`

## webpack.config.js

```diff
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
-      }
+      },
+      {
+        test: /\.css$/,
+        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
+      }
    ]
  }
```

## src/App.css

```css
body {
  background: #7159c1;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}
```

## src/App.js

```diff
import React from "react";
+ import "./App.css";

function App() {
  return <h1>Hello Woorld!</h1>;
}
```
