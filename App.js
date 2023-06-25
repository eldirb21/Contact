import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigaitons from './src/nav/appNavigaiton';
import {Provider} from 'react-redux';
import stores from './src/redux/stores';

export default function App() {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <AppNavigaitons />
      </NavigationContainer>
    </Provider>
  );
}
