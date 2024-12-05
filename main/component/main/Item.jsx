import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '../../assets/Icons';

const Item = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name={item.icon} color={'#FFFFFF'} />

        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a29f98',
    width: 112,
    height: 112,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1.5,
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    top: 70,
  },
});
