import React, { Component } from "react";

export default class Button extends Component {
  render() {
    let { btnText, onClick } = this.props;
    return <button onClick={onClick}>{btnText}</button>;
  }
}
