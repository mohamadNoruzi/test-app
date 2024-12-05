import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '../assets/Icons';

const Footer = ({navigation}) => {
  return (
    <View style={styles.continer}>
      <Image
        source={require('../assets/pictures/footer.png')}
        style={styles.image}
      />
      <View style={styles.buttonSheet}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate('First')}>
          <Icon name={'caroutline'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate('Second')}>
          <Icon name={'suitcase'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate('Option')}>
          <Icon name={'home'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.navigate('Second')}>
          <Icon name={'carfix'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Icon name={'carwash'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  continer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  image: {
    width: 340,
    height: 128,
    position: 'absolute',
    bottom: 47,
    zIndex: 10,
    borderRadius: 15,
  },
  buttonSheet: {
    width: 305,
    height: 67,
    borderRadius: 24,
    backgroundColor: '#061DDB',
    zIndex: 11,
    bottom: 44,
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icons: {},
});
