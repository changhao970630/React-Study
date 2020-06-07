import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./views/CompDataProps/App"; //组件传值
// import App from "./views/ReduxTestApp/App"; //React状态管理单独的js状态管理
// import App from "./views/ReactWithRedux/App.jsx";
import App from "./views/ReactRouter/App";

import * as serviceWorker from "./serviceWorker";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
