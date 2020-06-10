import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
// import { increment, decrement } from "./actions/counters";
import * as counterActions from "./actions/counters";
import { bindActionCreators } from "redux";
class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }
  render() {
    const { counter, increment, decrement ,async} = this.props;
    return (
      <div>
        <h1>Operation组件</h1>
        <div>
          <h1>
            store中的counter <p>{counter}</p>
          </h1>
          <Button type="primary" onClick={() => increment(1)}>
            Add+
          </Button>
          <Button type="primary" danger onClick={() => decrement(5)}>
            Dec-
          </Button>
          <ul>
            <li>action提供派发清单</li>
            <li>reducer提供方法，和数据</li>
            <li>createStore注入reducer创建store</li>
            <li>connect组件与redux连接起来</li>
            <li>mapStateToProps将数据放入组件props</li>
            <li>mapDispatchToProps将action清单方法放入组件props</li>
            <li>bindActionCreators绑定所有的actions</li>
            <li>combineReducers将所有的reducer统一绑定，然后再统一注册</li>
          </ul>
          <Button type="primary" danger onClick={() => async(5)}>
            Async
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //将state属性注入到组件的props中
  return {
    counter: state.counter,
    user: state.user,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   // 将定义好的actions的方法，派发到props中，
//   // actions方法返回的是一个type标识，当在reducer中匹配到action.type的标识就会触发对应的方法
//   return {
//     increment: () => {
//       dispatch(increment());
//     },
//     decrement: () => {
//       dispatch(decrement());
//     },
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return new bindActionCreators(counterActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Operation); //组件与redux连接起来
