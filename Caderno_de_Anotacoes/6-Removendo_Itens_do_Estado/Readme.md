# Removendo Ítens do estado

## src/components/TechList.js

```diff
import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };

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

+  handleDelete = tech => {
+    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
+  };

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
            <li key={tech}>
              {tech}
              {/**
               * No onClick eu não posso usar direto o método
               * this.handleDelete(tech), e sim dentro de uma arrow function.
               * Isto pq senão dispararia o método ao carregar a página
               */}
+              <button onClick={() => this.handleDelete(tech)} type="button">
+                Remover
+              </button>
            </li>
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
