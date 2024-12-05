import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../component/header/Header';
import Main from '../component/main/Main';
import Footer from '../component/Footer';
import MainSectionTwo from '../component/main/MainSectionTwo';

const Page1 = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <Main />
        <MainSectionTwo />
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Page1;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
});
