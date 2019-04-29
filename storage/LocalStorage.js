import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import dummyData from "../dummyData";

const getToDo = async () => {
  try {
    const toDoList = await AsyncStorage.getItem("ToDo");
    if (toDoList === null) {
      console.log("nothing in toDoList");
      return dummyData;
    } else {
      return JSON.parse(toDoList);
    }
  } catch (error) {
    console.log("error!");
    console.log(error);
  }
};

const appendToDo = async list => {
  try {
    console.log(list);
    const newList = await AsyncStorage.setItem("ToDo", JSON.stringify(list));
  } catch (error) {
    console.log("error in appent to do!");
    console.log(error);
  }
};

export {
  getToDo,
  appendToDo
  /*
  getDone
  appendDone,
  getArchiveMasterList,
  getArchiveByDate,
  setArchive
  */
};
