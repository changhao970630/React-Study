import React from "react";
import Random from "./Random";
import { Button, Card } from "antd";
import { createStore } from "redux";
import counter from "./Reducer/counter";
let store = createStore(counter);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  increament() {
    store.dispatch({ type: "INCREMENT" });
    this.setState({
      value: store.getState(),
    });
  }
  decreament() {
    store.dispatch({ type: "DECREMENT" });
    this.setState({
      value: store.getState(),
    });
  }
  render() {
    return (
      <div className="wrap">
        <Card>
          <h1>{this.state.value}</h1>
          <Button onClick={this.increament.bind(this)} type="primary">
            Increament(加一)
          </Button>
          <Button onClick={this.decreament.bind(this)} danger type="primary">
            Decreament(减一)
          </Button>
        </Card>
        <Random></Random>
      </div>
    );
  }
}
