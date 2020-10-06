import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

//Functional Component
//Return JSX from function
const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
