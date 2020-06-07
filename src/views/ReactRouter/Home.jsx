import React from "react";
import {Button} from 'antd'
import {withRouter } from  "react-router-dom"
 class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props)
  }
  routerPush=()=>{
    console.log(this.props)
    this.props.history.push("/about")
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Button type='parmary' onClick={this.routerPush}>跳转到About</Button>
      </div>
    );
  }
}
// export default Home
export default withRouter(Home)
