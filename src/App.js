import React from "react";
import { ReactComponent as Background } from "./images/illustration.svg";
import Header from "./components/Header";
import Menu from "./components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/style.css";

function App() {
  return (
    <>
      <Background />
      <div className='container'>
        <Header />
        <Menu />
      </div>
    </>
  );
}

export default App;
