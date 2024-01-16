import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
};

export { App };
