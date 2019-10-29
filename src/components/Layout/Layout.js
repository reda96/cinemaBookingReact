import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Auxiliary>
        <main>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
