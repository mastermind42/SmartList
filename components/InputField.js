import React, { Component } from "react";
import { Input } from "react-native-elements";

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.submitInput = this.submitInput.bind(this);
    // this.localStorage = new LocalStorage();
  }

  submitInput() {
    const inputObject = {
      Item: this.state.input,
      Quantity: "1",
      Checked: false
    };
    this.props.appendList(inputObject);
    this.state.input = "";
  }

  render() {
    return (
      <Input
        leftIcon={{ type: "font-awesome", name: "plus" }}
        value={this.state.input}
        onChangeText={input => this.setState({ input })}
        onSubmitEditing={this.submitInput}
      />
    );
  }
}
