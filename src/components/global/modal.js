import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Alert,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';

const modal = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVIsible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <TouchableWithoutFeedback
            style={{...styles.openButton, backgroundColor: '#2196F3'}}
            onPress={() => {
              setModalVisible(!props.modalVIsible);
            }}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
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

export default modal;
