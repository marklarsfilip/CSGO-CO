import React from 'react';
import { Text, TouchableOpacity } from "react-native";

const ButtonSmall = (props) => (
  <TouchableOpacity
    style={props.buttonStyle}
    onPress={() => props.onPress()}
  >
    <Text style={props.buttonTextStyle}>
      {props.title}
    </Text>
  </TouchableOpacity>
);

export default ButtonSmall;
