import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/LoginScreen';
import Home from './components/HomeScreen';
import Register from './components/Register/RegisterScreen';
import Register2 from './components/Register/RegisterScreen2';
import Register3 from './components/Register/RegisterScreen3';
import Register4 from './components/Register/RegisterScreen4';
import Scan from './components/ScanScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="Register3" component={Register3} />
        <Stack.Screen name="Register4" component={Register4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
