import React, {useRef} from 'react';
import {Animated, Text, View, StyleSheet, Button} from 'react-native';

import ItemBox from '../global/itemBox';

import exampleStorage from '../../data/exports/exampleUserStorage';

const randomCase = exampleStorage.exampleGeneratedCase;

export default function App() {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const leftAnim = useRef(new Animated.Value(60)).current;

  const moveLeft = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(leftAnim, {
      toValue: -2000,
      duration: 6000,
    }).start();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#33333D'}}>
      <View style={{zIndex: 2, position: 'absolute', width: 5, height: 20, left: '50%', top: 145, backgroundColor: '#ffff00'}} />
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
            width={'23%'}
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
