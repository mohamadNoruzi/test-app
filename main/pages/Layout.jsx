import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Header from '../component/header/Header';
import Main from '../component/main/Main';
import Footer from '../component/Footer';

const Drawer = createDrawerNavigator();

const Layout = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="footer" component={Footer} />
      <Drawer.Screen name="Notifications" component={Main} />
    </Drawer.Navigator>
  );
};

export default Layout;

const styles = StyleSheet.create({});
