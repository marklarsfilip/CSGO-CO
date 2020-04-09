import React, { useState }  from 'react';
import {View, Text, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';

// Components
import Modal from './modal';
const CaseBox = (props) => {
  const modalVIsible = false;
  return (
  <TouchableWithoutFeedback onPress={() => { }}>
      <View
        style={{
          marginBottom: props.marginBottom,
          marginRight: props.marginRight,
          backgroundColor: '#33333D',
          aspectRatio: 1,
          width: props.width,
          paddingTop: 2,
      }}>
        <Modal modalVisible={modalVIsible} />
        <Image
          style={{flex: 0.75}}
          resizeMode="contain"
          source={{
            uri: props.case.image
          }}
        />
        <View
          style={{
            backgroundColor: '#1EB980',
            flex: 0.25,
            paddingTop: 2,
          }}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: -1},
            textShadowRadius: 10,
            }}
          >
            {props.case.name}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CaseBox;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#484851",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
