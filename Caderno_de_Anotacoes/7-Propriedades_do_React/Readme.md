# Propriedades do React

Propriedades de classe:
`this.props.foobar`

Propriedades de função:
Passe a propriedade como parâmetro `function MyFunction(props) {}` e acesse por `props.foobar`, ou, desestruturando `function MyFunction({ foobar }) {}` e
acesse por `foobar`.

## src/components/TechList.js

```diff
import React, { Component } from "react";

+ import TechItem from "./TechItem";

...

render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
-            <li key={tech}>
-              {tech}
-              <button onClick={() => this.handleDelete(tech)} type="button">
-                Remover
-              </button>
-            </li>
+            <TechItem
+              key={tech}
+              tech={tech}
+              onDelete={() => this.handleDelete(tech)}
+            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
```

> Eu não poderia deixar o handleDelete() no component TechItem, pois ele
> manipula estado, e todo método q manipula estado tem de estar junto com o
> state

## src/components/TechItem.js

```javascript
import React from "react";

function TechItem({ tech, onDelete }) {
  // TechItem(props)
  return (
    <li>
      {tech} {/* props.tech */}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

export default TechItem;
```
