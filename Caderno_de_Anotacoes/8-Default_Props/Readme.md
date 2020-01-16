# Default Props

Existem diversos jeitos de criar um valor padrão pra uma propriedade caso nenhum
valor seja passado.

## Em funções

### jeito 1 - dentro dos parâmetros

```diff
import React from "react";

- function TechItem({ tech, onDelete }) {
+  function TechItem({ tech = 'Foobar', onDelete }) {
  return (
    ...
  );
}

export default TechItem;
```

### jeito 2 - usando defaultProps

```diff
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

+// Valores default
+TechItem.defaultProps = {
+  tech: "Foobar"
+};

export default TechItem;
```

## Em classe

```diff
class FooBar extends Component {
+  static defaultProps ={
+    myVar: "foobar"
+  }

  state = {};
```
