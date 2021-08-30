import React from "react";
import { ReactComponent as Background } from "./images/illustration.svg";
import Header from "./components/Header";
import Content from "./components/Content";
import Affordance from "./components/modules/Affordance";
import AffordanceNo from "./components/modules/AffordanceNo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/style.css";

function App() {
  return (
    <>
      <Background />
      <div className='container'>
        <Header />
        <Content />
        <Affordance />
        <AffordanceNo />
      </div>
    </>
  );
}

export default App;
