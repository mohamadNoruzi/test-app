import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CustomIcon = () => (
  <Svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16.5313 7.82626C17.066 7.82626 17.5 8.25386 17.5 8.78287C17.5 13.0866 14.2006 16.6404 9.9692 17.1178V19.0434C9.9692 19.5714 9.53522 20 9.00048 20C8.46478 20 8.03177 19.5714 8.03177 19.0434V17.1178C3.79945 16.6404 0.5 13.0866 0.5 8.78287C0.5 8.25386 0.933985 7.82626 1.46872 7.82626C2.00345 7.82626 2.43743 8.25386 2.43743 8.78287C2.43743 12.3558 5.38136 15.2629 9.00048 15.2629C12.6186 15.2629 15.5626 12.3558 15.5626 8.78287C15.5626 8.25386 15.9966 7.82626 16.5313 7.82626ZM9.17476 0C11.5781 0 13.5272 1.92373 13.5272 4.29706V8.92033C13.5272 11.2927 11.5781 13.2174 9.17476 13.2174H8.82505C6.42166 13.2174 4.47358 11.2927 4.47358 8.92033V4.29706C4.47358 1.92373 6.42166 0 8.82505 0H9.17476Z"
      fill="#6F6F71"
    />
  </Svg>
);

const HeaderSearch = () => {
  return (
    <View style={styles.container}>
      <CustomIcon />
      <TextInput
        style={styles.input}
        placeholder="جستجو کنید"
        placeholderTextColor="#979797"
        textAlign="right"
      />
      <View style={styles.ring}>
        <Image
          source={require('../../assets/pictures/header.jpg')}
          style={styles.img}
        />
      </View>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    width: 223,
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    writingDirection: 'rtl',
    width: 100,
  },
  ring: {
    width: 42,
    height: 42,
    borderRadius: 36.5,
    backgroundColor: '#5e67b1',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#061DDB',
  },
  img: {
    width: 37.87,
    height: 37.87,
    borderRadius: 43.5,
  },
});
