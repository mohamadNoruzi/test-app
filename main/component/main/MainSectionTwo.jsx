import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from '../../assets/Icons';
import Filter from './Filter';

const MainSectionTwo = () => {
  const [activeIndex, setActiveIndex] = useState('all');

  const buttons = [
    {id: 1, label: 'همه', type: 'all'},
    {id: 2, label: 'صدا', type: 'mic'},
    {id: 3, label: 'عکس', type: 'pic'},
    {id: 4, label: 'ویدیو', type: 'video'},
    {id: 5, label: 'نظرات', type: 'sugestion'},
    {id: 6, label: 'سوالات', type: 'comment'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.touchableContainer}>
        {buttons.map(button => (
          <TouchableOpacity
            key={button.id}
            style={styles.touchable}
            onPress={() => setActiveIndex(button.type)}>
            <View style={[styles.box]}>
              <Icon
                name="squers"
                color={activeIndex === button.type ? '#061DDB' : '#979797'}
              />
              <Text
                style={[
                  styles.text,
                  {color: activeIndex === button.type ? '#061DDB' : '#424242'},
                ]}>
                {button.label}
              </Text>
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
        ))}
      </View>
      <Filter type={activeIndex} />
    </View>
  );
};

export default MainSectionTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#93b49b',
    height: 100,
    marginBottom: 190,
    marginTop: 14,
  },
  touchableContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  touchable: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    gap: 16,
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  icon: {},
  text: {
    fontSize: 14,
    fontWeight: 500,
  },
  line: {
    height: 40,
    borderLeftWidth: 0.4,
    borderColor: '#424242',
  },
});
