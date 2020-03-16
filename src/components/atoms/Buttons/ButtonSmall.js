import React from 'react';
import { Button, Alert } from 'react-native';

const ButtonSmall = ({name}) => <Button title={ name } onPress={() => Alert.alert('Press button')} />

export default ButtonSmall;
