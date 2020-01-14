# Criando Componente Raiz

## public/index.html

```diff
  <body>
-    <h1>Hello World</h1>
+    <div id="app"></div>

    <script src="./bundle.js"></script>
  </body>
```

## src/index.js

```javascript
import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App />, document.getElementById("app"));
```

## src/App.js

```javascript
import React from "react";

function App() {
  return <h1>Hello Woorld!</h1>;
}

export default App;
```
