import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  CameraRoll,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RkButton } from 'react-native-ui-kitten';
import CameraScreen from '../components/CameraScreen';

import styles from './Home.styles'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
    state = {
        showPhotoGallery: false,
        photoArray: [],
    }

    getPhotosFromGallery = () => {
        CameraRoll.getPhotos({ first: 10 })
          .then(res => {
            console.log(res.edges)
            let photoArray = res.edges;
            const test = res.edges.map(photo => photo.node.image.uri)
            console.log(test)
            this.setState({ 
                showPhotoGallery: true, 
                photoArray: test
            });
        });
    };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to CatGram!
        </Text>
        <RkButton onPress={Actions.cameraScreen}>Cat!</RkButton>
        <RkButton onPress={this.getPhotosFromGallery}>Get from library</RkButton>
        {this.state.showPhotoGallery && this.state.photoArray.map(photo => {
            <Image source={{uri: photo}} />
        })}
      </View>
    );
  }
}

