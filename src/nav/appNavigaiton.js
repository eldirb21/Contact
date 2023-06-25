import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import datanav from './appdata';

const Stack = createStackNavigator();
const AppNavigaitons = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {datanav.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigaitons;
