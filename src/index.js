import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./GlobalStyle";
import { HelloWorld } from "./components/HelloWorld";
import Button from "./components/Button"
import TomtatoButton from "./components/TomatoButton"

function App() {
  return (
    <>
      <GlobalStyle whiteColor/>
      <HelloWorld />
      <Button> Button </Button>
      <Button primary> Button </Button>
      <TomtatoButton> Button </TomtatoButton>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
