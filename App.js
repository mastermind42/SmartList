import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import List from "./components/List";
import { Header, Input } from "react-native-elements";
import dummyData from "./dummyData";
import AddItem from "./components/AddItem";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: dummyData,
      input: ""
    };
    this.modifyList = this.modifyList.bind(this);
    this.appendList = this.appendList.bind(this);
  }

  modifyList(list) {
    this.setState({ list });
  }

  appendList(item) {
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
        <AddItem appendList={this.appendList} />
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
