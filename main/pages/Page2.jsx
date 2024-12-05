import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Page2 = ({navigation}) => {
  return (
    <View>
      <Text>page2</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('First')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <Text style={{textAlign: 'center', fontSize: 24}}>
          go back to page1
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({});
