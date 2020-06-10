import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const COLOR_INCREMENT = 1;

const reducer = (state, action) => {
  return {...state, counter: state.counter + action.payload}
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch ({payload: COLOR_INCREMENT});
        }}
      />
      <Button
        title="Descrease"
        onPress={() => {
          dispatch ({payload: -1 * COLOR_INCREMENT});
        }}
      />
      <Text>Current count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
