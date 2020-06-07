import { createStore } from "redux";
import counter from "./Reducer/counter";
import React from "react";
let store = createStore(counter);

export default class Random extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>{store.getState()}</p>
      </div>
    );
  }
}
setInterval(() => {
  console.log(store.getState());
}, 1000);
