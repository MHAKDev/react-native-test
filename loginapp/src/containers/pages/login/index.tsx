import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { LoginForm } from '../../organisms/loginForm';

export const Login = () => {

  const renderForm = () => (
    <View style={Styles.mainContainer as StyleProp<ViewStyle>}>
      <LoginForm />
    </View>
  )

  return (
    <View style={Styles.innerContainer as StyleProp<ViewStyle>}>
      {renderForm()}
    </View>
  )
}

const Styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'transperant'
  },
}