import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {data} from '../../utils/data';
import Item from './Item';

const Filter = ({type}) => {
  const filteredData = data.filter(item => {
    if (type === 'all') return true;
    else {
      return item.type === type;
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.FlatList}
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item item={item} />}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  FlatList: {
    // backgroundColor: 'green',
    // gap: 2,
  },
});
