import React from "react";
import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native";

export default function Input({
  placeholder,
  password,
  email,
  textChange,
  inputRef,
  editable,
  value,
}: {
  placeholder?: string;
  password?: boolean;
  email?: boolean;
  textChange?: any;
  inputRef?: any;
  editable?: boolean
  value?: string
}) {
  return (
    <View style={Styles.buttonContainer as StyleProp<ViewStyle>}>
      <TextInput
        style={Styles.textField as StyleProp<ViewStyle>}
        value={value}
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        autoComplete={email ? "email" : password ? "password" : "off"}
        autoCapitalize='none'
        onChangeText={textChange}
        secureTextEntry={password}
        keyboardType={email ? "email-address" : "default"}
        returnKeyType="next"
        editable = {editable}
        ref={inputRef}
      />
    </View>
  );
}

const Styles = {
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 270,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    color: '#000',
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    padding: '5%',
    borderRadius: 10,
  },
  textLabel: {
    minWidth: 40,
  }  
}
