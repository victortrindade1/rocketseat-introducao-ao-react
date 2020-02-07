# PropTypes

O Prop Types serve para fazer validação, tipo o Yup, só que não é validação do
que um usuário escreve, e sim validação de variáveis props. É como tipar uma
variável. Vc diz se sua função espera q seu parâmetro seja uma string, ou até
mesmo uma outra função, ou até se é obrigatório ou não aquela propriedade.

`yarn add prop-types`

## Em função

### src/components/TechItem.js

```diff
import React from "react";
+ import PropTypes from "prop-types";

function FooBar({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

// Valores default
TechItem.defaultProps = {
  tech: "Foobar"
};

+ TechItem.PropTypes = {
+   tech: PropTypes.string,
+   onDelete: PropTypes.func.isRequired
+ };

export default TechItem;
```

## Em classe

```diff
class FooBar extends Component { ... }

+ FooBar.propTypes ={
+   myVar: PropTypes.string.isRequired
+ }
```
