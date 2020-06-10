import React from "react";
import Operation from "./Operation";
import { Provider, } from "react-redux";
import thunk  from "redux-thunk";
import { createStore,applyMiddleware } from "redux";
import { Button } from "antd";
// import counter from "./Reducer/counter";
import rootReducer from "./Reducer/index";
let store = createStore(rootReducer,{},applyMiddleware(thunk));
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: "",
    };
  }
  test = () => {
    this.setState({
      counter: store.getState().counter,
    });
  };
  render() {
    return (
      <div className="wrap">
        <h2>React-Redux专门配合react的redux</h2>
        <a href="https://www.redux.org.cn/docs/react-redux/" target="blank">
          Redux 官方提供的 React 绑定库。 具有高效且灵活的特性。
        </a>
        <Provider store={store}>
          <Operation />
        </Provider>
        <Button onClick={this.test}>
          App组件中的counter {this.state.counter}
        </Button>
      </div>
    );
  }
}
