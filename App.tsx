import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Page1 from './main/pages/Page1';
import Page2 from './main/pages/Page2';
import Options from './main/pages/Options';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen
        name="First"
        component={Page1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Second"
        component={Page2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={RootStack}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Option" component={Options} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
