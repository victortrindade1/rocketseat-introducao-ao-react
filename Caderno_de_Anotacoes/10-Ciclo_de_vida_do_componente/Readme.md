# Ciclo de vida de um componente

Existem métodos prontos para vc interagir qnd o componente é renderizado, e isto
facilita muito no sistema. São triggers prontos.

Os mais usados são:

- `componentDidMount()`
  - Executado assim que um componente aparece na tela
- `componentDidUpdate()`
  - Executado qnd muda uma props ou state
  - Recebe como parâmetros opcionais as props antigas e states antigos
  - `componentDidUpdate(prevProps, prevState)`
  - Se eu quiser acessar as novas props e state: `this.props`, `this.state`
- `componentWillUnmount()`
  - Executado qnd o component deixa de existis

> Apesar de importantes, esses métodos são para classes. O problema é que as
> classes estão sendo substituídas por Hooks cada vez mais, e provavelmente uma
> hora deixarão de ser usadas. Portanto, pode ser q isto aqui fique obsoleto.

## Exemplo

Neste exemplo, o usuário cadastra a lista de tecnologias no Local Storage.

### src/components/TechList.js

```diff
import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
-    techs: ["Node.js", "ReactJS", "React Native"]
+    techs: []
  };

+  componentDidMount() {
+    const techs = localStorage.getItem("techs");
+
+    if (techs) {
+      this.setState({ techs: JSON.parse(techs) });
+    }
+  }

+  componentDidUpdate(_, prevState) {
+    if (prevState.techs !== this.state.techs) {
+      localStorage.setItem("techs", JSON.stringify(this.state.techs));
+    }
+  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault(); // Faz a tela não recarregar depois do onSubmit do form

    this.setState({
      // Pra setar arrays e objetos, é necessário criar um novo a partir da
      // cópia do anterior, usando o ...
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      /**
       * A tag <> é como uma <div>, porém melhor. Resolve o problema do
       * return precisar de unificar numa única tag, sem mostrar uma nova <div>
       * no DOM. Isto facilita no CSS.
       */
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              // handleDelete dentro de arrow function para não disparar a toa
              onDelete={() => this.handleDelete(tech)}
            />
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
}

export default TechList;
```
