import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import dummyData from "../dummyData";

const getToDo = async () => {
  try {
    const toDoList = await AsyncStorage.getItem("ToDo");
    if (toDoList === null || !(JSON.parse(toDoList) instanceof Array)) {
      console.log("resetting data to dummyData");
      return dummyData;
    } else {
      return JSON.parse(toDoList);
    }
  } catch (error) {
    console.log("error in getToDo");
    console.log(error);
  }
};

const appendToDo = async list => {
  try {
    await AsyncStorage.setItem("ToDo", JSON.stringify(list));
  } catch (error) {
    console.log("error in append to do!");
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
