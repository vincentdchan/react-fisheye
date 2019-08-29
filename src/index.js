import React from "react";
import ReactDOM from "react-dom";
import { FishEye } from "./fish-eye";

import "./styles.css";

const list = [
  { key: "aaa" },
  { key: "bbb" },
  { key: "ccc" },
  { key: "ddd" },
  { key: "eee" },
  { key: "fff" },
  { key: "ggg" },
  { key: "vvv" }
];

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FishEye
        data={list}
        render={(item, index) => {
          return <div>{item.key + ' ' + index}</div>
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
