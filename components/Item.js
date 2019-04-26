import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Input, Button, CheckBox } from "react-native-elements";

export default class Item extends Component {
  constructor() {
    super();
    const dummyData = [
      {
        Id: 0,
        Item: "Apples",
        Quantity: 10,
        Checked: false
      },
      {
        Id: 1,
        Item: "Oranges",
        Quantity: 5,
        Checked: false
      },
      {
        Id: 2,
        Item: "Oranges",
        Quantity: 5,
        Checked: false
      },
      {
        Id: 3,
        Item: "Chocolate",
        Quantity: "3lb",
        Checked: false
      },
      {
        Id: 4,
        Item: "Flour",
        Quantity: "2 cups",
        Checked: false
      }
    ];
    this.state = {
      list: dummyData
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  deleteItem(id) {
    let newList = this.state.list.filter(x => x.Id !== id);
    this.setState({
      list: newList
    });
  }

  checkItem(item) {
    this.setState({
      list: this.state.list.map(x => {
        x.Checked = x.Id === item.Id ? !x.Checked : x.Checked;
        return x;
      })
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <CheckBox
              iconType="material"
              uncheckedIcon="clear"
              uncheckedColor="red"
              onPress={() => this.deleteItem(item.Id)}
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
              onIconPress={() => this.checkItem(item)}
              checked={item.Checked}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
