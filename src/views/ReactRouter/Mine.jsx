import React from "react";
export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Mine</h1>
      </div>
    );
  }
}
