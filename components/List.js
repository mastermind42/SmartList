import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { CheckBox } from "react-native-elements";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  deleteItem(index) {
    let newList = [...this.props.list];
    newList.splice(index, 1);
    this.props.modifyList(newList);
  }

  checkItem(index) {
    let newList = [...this.props.list];
    newList[index].Checked = !newList[index].Checked;
    this.props.modifyList(newList);
  }

  render() {
    return (
      <FlatList
        data={this.props.list}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <CheckBox
              iconType="material"
              uncheckedIcon="clear"
              uncheckedColor="red"
              onPress={() => this.deleteItem(index)}
            />
            <Text
              style={{
                fontSize: 30,
                justifyContent: "flex-start",
                flexGrow: 1
              }}
            >
              {item.Item}
            </Text>
            <CheckBox
              right
              uncheckedIcon="circle-o"
              checkedIcon="dot-circle-o"
              onIconPress={() => this.checkItem(index)}
              checked={item.Checked}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
