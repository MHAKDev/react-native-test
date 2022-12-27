import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { AppStackParamList, AuthStackParamList } from '../constants/interfaces/stackParams.interface';
import { FC } from 'react';
import { Text } from 'react-native';
import { Login } from '../containers/pages/login';
import { ProductsList } from '../containers/pages/productsList';
import { ProductDetail } from '../containers/pages/productDetail';

const MainStack = createStackNavigator<AuthStackParamList & AppStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const MainNavigation: FC<any> = ({}) => {
  return (
    <NavigationContainer
      fallback={<Text>Loading...</Text>}
    >
      <MainStack.Navigator initialRouteName='Login'>
        <MainStack.Screen
          name={'Login'}
          component={AuthNavigation}
        />
        <MainStack.Screen
          name={'Products'}
          component={ApptNavigation}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Form" component={Login} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}

const ApptNavigation = () => {
  return (
    <AppStack.Navigator initialRouteName='List' screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="List" component={ProductsList} options={{ headerShown: false }} />
      <AppStack.Screen name="Detail" component={ProductDetail} options={{ headerShown: false }} />
    </AppStack.Navigator>
  );
}

export default MainNavigation;