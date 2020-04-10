import React, {useState} from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Button,
} from 'react-native';

// Components
const CaseBox = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>CASE DISPLAY</Text>
            <TouchableHighlight
              style={{...styles.modalButton, backgroundColor: '#33333D'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </TouchableHighlight>
            <Button
              onPress={{}}
              title="BUY CASE"
              color="#1EB980"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View
          style={{
            marginBottom: props.marginBottom,
            marginRight: props.marginRight,
            backgroundColor: '#33333D',
            aspectRatio: 1,
            width: props.width,
            paddingVertical: 3,
          }}>
          <Image
            style={{flex: 0.75}}
            resizeMode="contain"
            source={{
              uri: props.case.image,
            }}
          />
          <View
            style={{
              backgroundColor: '#1EB980',
              flex: 0.25,
              paddingVertical: 2,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: -1},
                textShadowRadius: 10,
              }}>
              {props.case.name}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CaseBox;

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
