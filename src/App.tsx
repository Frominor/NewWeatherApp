import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { UseAppSelector } from "./typedhooks";
import { ReactComponent as Error } from "./imgs/error-sing-svgrepo-com.svg";
const App: React.FC = () => {
  const State = UseAppSelector((State) => State.Weather);
  return (
    <div className="App">
      {State.Error ? (
        <div>
          <Header></Header>
          <div className="ErrorBox">
            {" "}
            <Error className="Error"></Error>
          </div>
        </div>
      ) : (
        <div>
          <Header></Header>
          <Main></Main>
        </div>
      )}
    </div>
  );
};

export { App };
