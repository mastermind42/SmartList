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
    this.props.appendList(this.state.input);
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
