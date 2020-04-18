import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

//Components
import ItemBox from '../global/itemBox';

const { UIManager } = NativeModules;

//Load stored items
import exampleStorage from '../../data/exports/exampleUserStorage';

const itemStash = exampleStorage.itemStash;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    x: 0,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        6000,
        LayoutAnimation.Types.easeOut,
        ''
      )
    );
    this.setState({x: this.state.x - 5150 })
  }

  render() {
    return (
      <View style={styles.container}>
      {itemStash.map((obj, index) => (
        <ItemBox
          item={obj}
          width={'23%'}
          marginBottom={15}
          marginRight={'2%'}
          borderColor={obj.rarity}
          key={index}
          left={this.state.x + (index * 95)}
        />
      ))}
        <TouchableOpacity onPress={this._onPress} style={{ position: 'absolute' }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
