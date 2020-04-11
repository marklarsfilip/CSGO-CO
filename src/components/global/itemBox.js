import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

// Components
const ItemBox = props => {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: props.borderColor,
        marginBottom: props.marginBottom,
        marginRight: props.marginRight,
        backgroundColor: '#33333D',
        aspectRatio: 1,
        width: props.width,
        paddingVertical: 8,
        paddingHorizontal: 8,
      }}>
      <Image
        style={{flex: 1}}
        resizeMode="contain"
        source={{
          uri: props.item.image,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Icon size={17} name="star" type="font-awsome" color="#FFDF00" />
        <Text style={{color: '#fff', marginLeft: 2}}>{props.item.score}</Text>
      </View>
    </View>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton: {
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
