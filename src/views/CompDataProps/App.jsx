import React from "react";
import { Card } from "antd";

import ChildrenComp from "./ChildrenComp";
const App = () => {
  const transformFun = (...params) => {
    console.log(params);
  };
  let text = "变量文本";
  return (
    <div>
      <Card>
        <h1>parent</h1>
        <ChildrenComp
          title="我是父组件中的文本"
          text={text}
          transformFun={transformFun}
        ></ChildrenComp>
      </Card>
    </div>
  );
};
export default App;
