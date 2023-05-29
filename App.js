import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScrees from './screens/LogInScrees';
import RegisterScreen from './screens/RegisterScreen';
import Tabs from './navigation/Tabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen name="Login" component={LogInScrees} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        {/* tabs navigation */}
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;