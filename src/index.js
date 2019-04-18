import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./GlobalStyle";
import { HelloWorld } from "./components/HelloWorld";

function App() {
  return (
    <>
      <GlobalStyle whiteColor/>
      <HelloWorld />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
