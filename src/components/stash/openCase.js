import React, {useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
} from 'react-native';

import ItemBox from '../global/itemBox';

import exampleStorage from '../../data/exports/exampleUserStorage';

const randomCase = exampleStorage.exampleGeneratedCase;

const screenWidth = Math.round(Dimensions.get('window').width);
const boxWidth = screenWidth * 0.35;
const randomPlacement = Math.floor(Math.random() * boxWidth) + 1;

export default function App() {
  console.log(screenWidth);
  console.log(randomPlacement);
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const leftAnim = useRef(new Animated.Value(screenWidth / 2)).current;

  const moveLeft = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(leftAnim, {
      toValue: -(screenWidth * 9.88 + randomPlacement),
      duration: 6000,
    }).start(() => {
      test();
    });

    console.log('animation started');
  };

  function test() {
    console.log('animation done!');
    Alert.alert(
      'Congratulations! You found ',
      randomCase[28].name,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  console.log(randomCase);
  console.log(randomCase[27]);

  return (
    <View style={{flex: 1, backgroundColor: '#33333D'}}>
      <View
        style={{
          zIndex: 2,
          position: 'absolute',
          width: 5,
          height: 20,
          left: '50%',
          top: '25%',
          backgroundColor: '#ffff00',
        }}
      />
      <Animated.View
        style={[
          styles.container,
          {
            left: leftAnim, // Bind opacity to animated value
          },
        ]}>
        {randomCase.map((obj, index) => (
          <ItemBox
            item={obj}
            width={'35%'}
            marginBottom={15}
            marginRight={'2%'}
            borderColor={obj.rarity}
            key={index}
          />
        ))}
      </Animated.View>
      <View style={styles.button}>
        <Button title="Open case!" onPress={moveLeft} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  box: {
    width: 90,
    height: 90,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
