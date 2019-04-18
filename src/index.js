import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./GlobalStyle";
import { HelloWorld } from "./components/HelloWorld";
import Button from "./components/Button"
import TomatoButton from "./components/TomatoButton"

function App() {
  return (
    <>
      <GlobalStyle whiteColor/>
      <HelloWorld />
      <Button> Button </Button>
      <Button primary> Button </Button>
      <TomatoButton> Button </TomatoButton>
      <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
