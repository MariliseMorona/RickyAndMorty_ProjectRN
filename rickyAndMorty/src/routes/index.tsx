import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Portal from '../pages/Portal';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Stack = createStackNavigator();

 const Routes:React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            {/* <Stack.Screen name="Portal"component={Portal} options={{headerShown: false}}/> */}
            <Stack.Screen name="Home"component={Home} options={{headerShown: false}}/>
             <Stack.Screen name="Details"component={Details} options={{headerShown: false}}/>
        </Stack.Navigator>
        
    </NavigationContainer>
  );
}

export default Routes;

