import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from '../../assets/Icons';
import SectionTwo from './MainSectionTwo';

const Main = () => {
  const [buttonIndex, setButtonIndex] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.social}>
        <Icon name={'insta'} />
        <Icon name={'insta'} />
        <Icon name={'insta'} />
        <Icon name={'insta'} />
        <Icon name={'insta'} />
        <Icon name={'insta'} />
        <Icon name={'insta'} />
      </View>
      <View style={styles.profile}>
        <View style={styles.picture}>
          <Image
            source={require('../../assets/pictures/detail.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.row1}>
            <Text style={styles.name}>خانوم مونا شکرخدایی</Text>
            <Icon name={'arrowDown'} />
          </View>
          <View style={styles.row2}>
            <Text style={styles.title}>کارشناس رنگ</Text>
            <Text style={[styles.title, {fontSize: 10}]}>آنلاین</Text>
          </View>
          <View style={styles.mediaDetails}>
            <View style={styles.dataCell}>
              <Icon name={'camera'} />
              <Text style={styles.mediaDetailsText}>423</Text>
            </View>
            <View style={styles.dataCell}>
              <Icon name={'pic'} />
              <Text style={styles.mediaDetailsText}>423</Text>
            </View>
            <View style={styles.dataCell}>
              <Icon name={'micOutline'} />
              <Text style={styles.mediaDetailsText}>123</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => setButtonIndex(true)}
            style={[
              styles.buttonSection,
              {borderWidth: buttonIndex ? 0.5 : 0},
            ]}>
            <Text style={styles.buttonText}>خدمات</Text>
            <Icon name={'car'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setButtonIndex(false)}
            style={[
              styles.buttonSection,
              {borderWidth: buttonIndex ? 0 : 0.5},
            ]}>
            <Text style={styles.buttonText}>نحوه تماس</Text>
            <Icon name={'circle'} />
          </TouchableOpacity>
        </View>
      </View>
      {/* sectionTwo */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: 205,
    width: 304,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 15,
    overflow: 'hidden',
  },
  social: {
    width: 32,
    height: 182,
    marginLeft: 5,
    marginVertical: 12,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 4,
    borderColor: '#FFFFFF',
  },
  profile: {
    width: '267',
    height: '205',
  },
  picture: {
    width: 80,
    height: 80,
    backgroundColor: '#55D009',
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: 47.5,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  details: {
    width: 195,
    height: 117,
    position: 'absolute',
    top: 19,
    left: 16,
  },
  row1: {
    flexDirection: 'row-reverse',
    zIndex: 3,
    gap: 10,
    alignItems: 'center',
    marginRight: 34,
  },
  name: {
    fontFamily: 'IRANYekan',
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '500',
    color: '#424242',
  },
  row2: {
    flexDirection: 'column',
    zIndex: 3,
    justifyContent: 'center',
    marginRight: 34,
  },
  title: {
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '500',
    color: '#424242',
  },
  mediaDetails: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  dataCell: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '40',
    gap: 10,
  },
  mediaDetailsText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E2E2E',
    textAlign: 'center',
  },
  buttons: {
    width: 215,
    height: 45,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 148,
    left: 8,
    borderRadius: 16,
    borderColor: '#979797',
    borderWidth: 0.5,
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    // borderWidth: 0.5,
    borderColor: '#979797',
    borderRadius: 16,
    height: 39,
    width: 121,
    paddingHorizontal: 8,
  },
  buttonText: {
    color: '#6F6F71',
    fontWeight: '500',
    fontSize: 14,
  },
});
