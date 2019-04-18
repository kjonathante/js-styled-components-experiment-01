import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {GlobalStyle} from "./GlobalStyle";

// import "./styles.css";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
