import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  CameraRoll,
  Image,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RkButton } from 'react-native-ui-kitten';

import styles from './Home.styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          CatGram!
        </Text>
        <RkButton onPress={Actions.cameraScreen}>Cat!</RkButton>
        <RkButton onPress={Actions.imageGallery}>Get from library</RkButton>
      </View>
    );
  }
}

