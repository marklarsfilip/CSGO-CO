import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import data from '../../items';

const Test = () => {
  const openCase  = () => {
    // Alert.alert('open');
  };
  return (
    <View style={[{flexDirection:'row'}, styles.elementsContainer]}>
      {data.map((item) => (
        <View style={{width: 75, height: 75, backgroundColor: '#0A0E11', marginRight: 5, marginTop: 5}}>
          <Button  title="Open Case" onPress={() => openCase()}></Button>
          <View name="bar" style={{position: 'absolute', bottom: 0, right: 0, height: 20, width: 75, backgroundColor: '#00568D'}}>
            <Text style={{color: 'white', fontSize: 14, textAlign: 'center', lineHeight: 20}}>{item.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const Cases = () => (
  <View style={styles.container}>
    {Test()}
  </View>
);

export default Cases;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#ecf5fd',
  }
}
