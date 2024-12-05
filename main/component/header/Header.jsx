import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerButton from './DrawerButton';
import BackArro from './BackArro';
import HeaderSearch from './HeaderSearch';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackArro />
      <HeaderSearch />
      <DrawerButton onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 21,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
  },
});
