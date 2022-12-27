import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface User {
  first_name: string;
  last_name: string;
}

export const testInputComponent = () => {
  const [formInputs, setFormInputs] = useState<User>({
    first_name: '',
    last_name: '',
  })

  const enum FIELD_TYPE {
    FIRST_NAME = 'first_name',
    LAST_NAME = 'last_name'
  }

  const updateInput = (fieldName: string, text: string) => {
    let formInputsObj = {...formInputs};
    // @ts-ignore
    formInputsObj[fieldName] = text;
    setFormInputs(formInputsObj);
  }

  return (
    <View>
      <TextInput value={formInputs.first_name} onChangeText={(text) => updateInput(FIELD_TYPE.FIRST_NAME, text)} />
      <TextInput value={formInputs.last_name} onChangeText={(text) => updateInput(FIELD_TYPE.LAST_NAME, text)} />
    </View>
  )
}
