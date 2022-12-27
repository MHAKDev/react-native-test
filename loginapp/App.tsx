/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StoreProvider } from './src/store/storeProvider';
import MainNavigation from './src/routes/stacks.route';

export default function AppWithStoreProvider () {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  )
}

const App = () => {
  return (
    <MainNavigation />
  );
};
