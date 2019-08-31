import React from "react";
import ReactDOM from "react-dom";
import { FishEye } from "./fish-eye";
import Icon from './Google_Chrome_icon.png'

import "./styles.css";

const list = [
  { key: "aaa" },
  { key: "bbb" },
  { key: "ccc" },
  { key: "ddd" },
  { key: "eee" },
  { key: "fff" },
  { key: "ggg" },
  { key: "vvv" },
  { key: "ppp" }
];

function ChromeIcon() {
  return (
    <div
      style={{
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <img
        src={Icon}
        alt=""
        style={{
          width: '36px',
          height: '36px',
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FishEye
        data={list}
        render={(item, index) => {
          return <div>{item.key + ' ' + index}</div>;
        }}
      />

      <div style={{ height: '48px' }} />
      <div>
        <FishEye
          data={list}
          mode="horizontal"
          render={(item, index) => {
            return (<ChromeIcon />);
          }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
