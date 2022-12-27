import React from "react";
import { StyleProp, Text, View, ViewStyle, TouchableOpacity } from "react-native";
import { colors } from "../../../assets/colorPalette";

export default function Badge({
  id,
  text,
  onPress,
  onRemove
}: {
  id: string;
  text: string;
  onPress: any;
  onRemove: any;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={Styles.container as unknown as StyleProp<ViewStyle>}
    >
      <TouchableOpacity
        style={Styles.delete as StyleProp<ViewStyle>}
        onPress={onRemove}
      >
        <Text>x</Text>
      </TouchableOpacity>
      <Text style={Styles.text as StyleProp<ViewStyle>}>{text}</Text>
    </TouchableOpacity>
  );
}

const Styles = {
  container: {
    display: 'flex',
    borderColor: '#1aebb7',
    borderWidth: 3,
    backgroundColor: 'transperant',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 7,
  },
  text: {
    color: colors.text.bluePrimary,
    fontWeight: '600',
    fontSize: 15,
    top: -5,
  },
  delete: {
    display: 'flex',
    backgroundColor: colors.main.red,
    color: colors.text.bluePrimary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 15,
    height: 15,
    borderRadius: 50,
    left: 10,
    top: -4,
  } 
}