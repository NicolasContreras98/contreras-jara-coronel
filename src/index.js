import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Componentes/Header";
import Menu from "./Componentes/Menu";
import Content from "./Componentes/Content";
import Sidebar from "./Componentes/Sidebar";
import Footer from "./Componentes/Footer";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
      <Header title="Título de la página" />
      <div className="container">
        <div className="grid-container">
          <Menu />
          <Content />
          <Sidebar />
        </div>
      </div>
      <Footer />
  </div>
)
reportWebVitals();
