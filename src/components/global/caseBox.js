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
  ScrollView,
} from 'react-native';

import ButtonSmall from '../global/ButtonSmall';
import ItemBox from '../global/itemBox';

// Components
const CaseBox = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        marginBottom: props.marginBottom,
        marginRight: props.marginRight,
        backgroundColor: '#33333D',
        aspectRatio: 1,
        width: props.width,
        paddingTop: props.paddingTop,
      }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                backgroundColor: '#33333D',
                height: 30,
                width: '100%',
                shadowColor: '#000',
                borderBottomColor: '#1EB980',
                borderBottomWidth: 2,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  lineHeight: 30,
                  fontSize: 16,
                }}>
                BUY "{props.case.name}"
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#33333D',
                aspectRatio: 1,
                width: props.width,
                marginVertical: 20,
              }}>
              <Image
                style={{flex: 0.8}}
                resizeMode="contain"
                source={{
                  uri: props.case.image,
                }}
              />
              <View
                style={{
                  backgroundColor: '#1EB980',
                  flex: 0.2,
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: -1},
                    textShadowRadius: 10,
                    paddingTop: 2,
                  }}>
                  {props.case.name}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 120,
                flexDirection: 'row',
                backgroundColor: '#484851',
                padding: 10,
                marginVertical: 20,
              }}>
              <ScrollView
                contentContainerStyle={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                horizontal>
                {props.case.availableItems
                  ? props.case.availableItems.map((obj, index) => (
                      <ItemBox
                        item={obj}
                        width={120}
                        marginRight={13}
                        key={index}
                      />
                    ))
                  : null}
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <TouchableHighlight
                style={{...styles.modalButton, backgroundColor: '#33333D'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>CLOSE</Text>
              </TouchableHighlight>
              <ButtonSmall
                onPress={() => Alert.alert('Buying case, run animation.')}
                title="OPEN CASE"
                buttonStyle={{
                  backgroundColor: '#1EB980',
                  marginLeft: 20,
                  padding: 10,
                  elevation: 2,
                }}
                buttonTextStyle={{textAlign: 'center', color: 'white'}}
              />
            </View>
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
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
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#484851',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 0.5,
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
