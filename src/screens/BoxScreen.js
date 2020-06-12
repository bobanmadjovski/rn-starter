import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  viewTwoStyle: {
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "green",
    borderColor: "black",
    height: 100,
    width: 100,
    position: "absolute",
    left: 150,
    top: 100,
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "purple",
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
