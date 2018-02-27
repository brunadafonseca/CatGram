import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  AppRegistry
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import styles from './CameraScreen.styles'

type Props = {};
export default class CameraScreen extends Component<Props> {

    takePicture = async function() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          console.log(data.uri);
        }
      };

  render() {
    return (
        <View style={styles.container}>
            <RNCamera
                ref={ref => {
                this.camera = ref;
                }}
                style = {styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
            />
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                <TouchableOpacity
                    onPress={this.takePicture.bind(this)}
                    style = {styles.capture}
                >
                    <Text style={{fontSize: 14}}> MEOW! </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}