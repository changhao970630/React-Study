import React from "react";
import PropTypes from "prop-types"; // ES6
import { Card, Button } from "antd";
// const ChildrenComp = (props) => {
//   console.log(props);
//   function handleClick() {
//     props.transformFun("子组件的值1", "子组件的值2", "子组件的值3");
//   }
//   return (
//     <div>
//       <Card>
//         <h2>Children</h2>
//         <h3>接受父组件的值-->{props.title}</h3>
//         <h3>接受父组件的变量传递-->{props.text}</h3>
//         <Button onClick={handleClick} type="primary">
//           Click
//         </Button>
//       </Card>
//     </div>
//   );
// };
class ChildrenComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    this.props.transformFun("子组件的值1", "子组件的值2", "子组件的值3");
  };
  render() {
    return (
      <div>
        <Card>
          <h2>Children</h2>
          <h3>接受父组件的值-->{this.props.title}</h3>
          <h3>接受父组件的变量传递-->{this.props.text}</h3>
          <Button onClick={this.handleClick} type="primary">
            Click
          </Button>
        </Card>
      </div>
    );
  }
}
ChildrenComp.propTypes = {
  text: PropTypes.symbol,
};
export default ChildrenComp;
