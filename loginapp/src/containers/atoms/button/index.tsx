import React from "react";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { colors } from "../../../assets/colorPalette";

export default function Button({
  buttonText,
  onPress,
}: {
  buttonText: string;
  onPress?: any;
}) {
  return (
    <TouchableOpacity
      style={Styles.container as unknown as StyleProp<ViewStyle>}
      onPress={onPress}
    >
      <Text style={[Styles.buttonText && { color: colors.text.bluePrimary }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const Styles = {
  container: {
    display: 'flex',
    backgroundColor: '#1aebb7',
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: 60,
    borderRadius: 40,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
  }  
}