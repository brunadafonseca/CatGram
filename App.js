import React, { Component } from 'react';
import { View } from 'react-native';
// import { Provider } from 'react-redux';
import { Router, Scene, Stack } from 'react-native-router-flux';
// import store from './store';
import CameraScreen from './app/components/CameraScreen';
import Home from './app/screens/Home'
// import styles from './App.styles';

export default class App extends Component {
  render() {
    return (
        <Router>
          <Stack key="root">
            <Scene key="cameraScreen" component={CameraScreen} hideNavBar={true}/>
            <Scene key="homeScreen" component={Home} initial={true} hideNavBar={true}/>
          </Stack>
        </Router>
    );
  }
}