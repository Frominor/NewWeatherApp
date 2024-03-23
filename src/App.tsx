import React from "react";
import "./styles/App.css";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { useAppSelector } from "./hooks/typedhooks";
import { ReactComponent as Error } from "./imgs/error-sing-svgrepo-com.svg";
const App: React.FC = () => {
function id<T>(){
  
}
  const State = useAppSelector((State) => State.Weather);
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
