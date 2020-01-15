# Class Component

## src/components/TechList.js

```javascript
import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "ReactJS", "React Native"]
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
```

## src/App.js

```diff
import React from "react";
import "./App.css";

- import testImage from "./assets/test_image.png";
+ import TechList from "./components/TechList";

function App() {
-  return <img width="200" src={testImage} />;
+  return <TechList />;
}

export default App;
```

## Método construtor: como tornar menos verboso

Qnd vc usa classes no React, vc pode manipular variáveis de estado (variáveis
as quais vc precisa manipular sem q a tela recarregue). Pra manipular o state,
nós usávamos o método `constructor()`, mas agora podemos instalar uma lib do
babel que reduz bem esse código. Veja como era, e como fica ao instalar a lib:

Antes:

```javascript
  constructor() {
    this.state = {
      foo: [
        'foozinho',
        'foozão'
      ]
    };
  };
```

Depois:

```javascript
state = {
  foo: ["foozinho", "foozão"]
};
```

Para tirar essa verbosidade, é necessário instalar a lib:

`yarn add @babel/plugin-proposal-class-properties -D`

### babel.config.js

```diff
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
+  plugins: ["@babel/plugin-proposal-class-properties"]
};
```

# Estado e Imutabilidade

O React segue o conceito que as variáveis de estado são imutáveis. Ou seja, vc
não consegue simplesmente aplicar um valor com o `=`. O jeito de mudar o valor
de uma variável de estado é com o método `setState()`.

## src/components/TechList.js

```diff
import React, { Component } from "react";

class TechList extends Component {
  state = {
+    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };

+  handleInputChange = e => {
+    this.setState({ newTech: e.target.value });
+  };

+  handleSubmit = e => {
+    e.preventDefault(); // Faz a tela não recarregar depois do onSubmit do form
+
+    this.setState({
+      // Pra setar arrays e objetos, é necessário criar um novo a partir da
+      // cópia do anterior, usando o ...
+      techs: [...this.state.techs, this.state.newTech],
+      newTech: ""
+    });
+  };

  render() {
-    console.log(this.state);
    return (
+     <form onSubmit={this.handleSubmit}>
        <ul>
-        <li>Node.js</li>
-        <li>ReactJS</li>
-        <li>React Native</li>
+         {this.state.techs.map(tech => (<li key={tech}>{tech}</li>))}
        </ul>
+        <input
+          type="text"
+          onChange={this.handleInputChange}
+          value={this.state.newTech}
+        />
+        <button type="submit">Enviar</button>
+     </form>
    );
  }
}

export default TechList;
```
