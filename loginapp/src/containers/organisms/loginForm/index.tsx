import React, { useCallback, useContext, useState } from 'react'
import { Alert, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { UserLogin } from '../../../constants/interfaces/user.interface';
import { StoreContext } from '../../../store/storeProvider';
import { useGetSDK } from '../../../utils/hooks/useSDK';
import { MESSAGES } from '../../../constants/constants';
import { useNavigation } from '@react-navigation/native'
import Input from '../../atoms/input'
import Button from '../../atoms/button';

export const LoginForm = () => {
  const navigation = useNavigation();
  const context = useContext(StoreContext);
  const [, setUser] = context.user;
  const SDK = useGetSDK();
  const [form, setForm] = useState<any>({});

  const enum FIELD_NAMES {
    EMAIL = 'email',
    PASSWORD = 'password'
  }

  const updateForm = (fieldName: string, value: string) => {
    const tempForm = {...form};
    tempForm[fieldName] = value;
    setForm(tempForm);
  }

  const renderForm = () => (
    <View style={styles.outer as StyleProp<ViewStyle>}>
      {renderField(FIELD_NAMES.EMAIL)}
      {renderField(FIELD_NAMES.PASSWORD)}
      {renderButton()}
    </View>
  )

  const renderField = (name: string) => (
    <View style={styles.inner as StyleProp<ViewStyle>}>
      <Input
        placeholder={name === FIELD_NAMES.EMAIL ? 'Enter email' : 'Password'}
        email={name === FIELD_NAMES.EMAIL}
        password={name === FIELD_NAMES.PASSWORD}
        textChange={(text: string) => updateForm(name, text)}
        value={form[name]}
        editable={true}
      />
    </View>
  )

  const renderButton = () => (
    <Button
      buttonText={'Login'}
      onPress={login}
    />
  )

  const login = async () => {
    const loginPayload: UserLogin = {
      username: form.email,
      password: form.password,
    };
    
    await SDK.AuthService.auth(loginPayload)
    .then((response: any) => {
      const user = response.data;
      setUser(user);
      // @ts-ignore
      navigation.navigate('Products');
      })
      .catch((error: any) => {
        console.log(error)
        Alert.alert(
          MESSAGES.UNABLE_TO_LOGIN,
          MESSAGES.CHECK_CREDENTIALS,
          [{ text: "OK" }],
          { cancelable: true }
        );
      })
  }

  return (
    <View>
      {renderForm()}
    </View>
  )
}

const styles = {
  outer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inner: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '7%',
    backgroundColor: 'transperant'
  }
}