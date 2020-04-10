import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const ItemGraphic = props => (
  <View style={[{flexDirection: 'row'}, styles.item]}>
    <Image
      style={styles.tinyImage}
      resizeMode="contain"
      source={{
        uri: props.item.type.graphic,
      }}
    />
    <Text style={{color: props.item.rarity.rarity}}>{props.item.name}</Text>
  </View>
);

export default ItemGraphic;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    fontSize: 13,
    paddingTop: 3,
  },
  tinyImage: {
    height: 50,
    width: 50,
  },
});
