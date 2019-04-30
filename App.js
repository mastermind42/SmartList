import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import List from "./components/List";
import { Header } from "react-native-elements";
import InputField from "./components/InputField";
import { getToDo, appendToDo } from "./storage/LocalStorage";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ""
    };
    this.modifyList = this.modifyList.bind(this);
    this.appendList = this.appendList.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount()");
    getToDo().then(list => {
      this.setState({ list });
    });
  }

  modifyList(list) {
    this.setState({ list });
  }

  appendList(item) {
    console.log("appending", item);
    appendToDo([...this.state.list, item]);
    this.setState({
      list: [...this.state.list, item]
    });
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Shopping List", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <List list={this.state.list} modifyList={this.modifyList} />
        <InputField appendList={this.appendList} />
        <Text>{JSON.stringify(this.state.input)}</Text>
        <Text>{JSON.stringify(this.state.list)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
