import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  AppRegistry,
  CameraRoll,
  Image,
  CameraView,
  Alert
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather'
import { Actions } from 'react-native-router-flux';

import styles from './CameraScreen.styles'

type Props = {};
export default class CameraScreen extends Component<Props> {

    state = {
        newPicture: null,
        base64: null,
        frontCamera: false,
    }

    takePicture = async function() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          
          CameraRoll.saveToCameraRoll(data.uri)

          this.setState({
              newPicture: data.uri,
              base64: data.base64,
          })

          Actions.editPicture({data})
        }
      };

    savePicture = (picture) => {
        CameraRoll.saveToCameraRoll(picture)
        .then(console.log('Success', 'Photo added to camera roll!'))
        this.setState({
            newPicture: null,
        })
    } 

    rotateCamera = () => {
        this.setState({
            frontCamera: !this.state.frontCamera
        })
    }

  render() {
    const base64image = this.state.base64
    
    return (
        <View style={styles.container}>
            <RNCamera
                ref={ref => {this.camera = ref;}}
                style={styles.preview}
                type={this.state.frontCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back }
                flashMode={RNCamera.Constants.FlashMode.auto}
            />

            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={Actions.imageGallery}
                    style = {styles.button}
                >
                    <Icon name="image" size={30} color="#900" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.takePicture.bind(this)}
                    style = {styles.button}
                >
                    <Icon name="camera" size={30} color="#900" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.rotateCamera.bind(this)}
                    style = {styles.button}
                >
                    <Icon name="rotate-ccw" size={30} color="#900" />
                </TouchableOpacity>
            </View>
            
        </View>
    );
  }
}