import React, { Component } from 'react';
import { View } from 'react-native';
// import { Provider } from 'react-redux';
import { Router, Scene, Stack } from 'react-native-router-flux';
// import store from './store';
import CameraScreen from './app/components/CameraScreen';
import ImageGallery from './app/components/ImageGallery';
import Home from './app/screens/Home'
import EditPicture from './app/components/EditPicture';
// import styles from './App.styles';
import {RkTheme} from 'react-native-ui-kitten';

RkTheme.setTheme({
  colors: {
    background: {
        lightGray: '#FBFBFB'
    },
    text: {
      hint: '#F38181'
    }
  }
});

export default class App extends Component {
  render() {
    return (
        <Router>
          <Stack key="root">
            <Scene key="homeScreen" component={Home} initial={true} hideNavBar={true}/>
            <Scene key="cameraScreen" component={CameraScreen} hideNavBar={true}/>
            <Scene key="imageGallery" component={ImageGallery} title='Photos' />
            <Scene key="editPicture" component={EditPicture} title='Edit Photo' />
          </Stack>
        </Router>
    );
  }
}