import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  AppRegistry,
  CameraRoll,
  Image
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather'
import styles from './CameraScreen.styles'

type Props = {};
export default class CameraScreen extends Component<Props> {

    state = {
        newPicture: null,
        base64: null,
    }

    takePicture = async function() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          this.setState({
              newPicture: data.uri,
              base64: data.base64
          })
          console.log(data.uri);
        }
      };

    savePicture = () => {
        console.log(this.state.newPicture)
        CameraRoll.saveToCameraRoll(this.state.newPicture)
        .then(console.log('Success', 'Photo added to camera roll!'))
        this.setState({
            newPicture: null,
        })
    }
    

  render() {
    const base64image = this.state.base64
    return (
        <View style={styles.container}>
            { this.state.newPicture ? <Image
                source={{
                    isStatic: true,
                    uri: 'data:image/jpeg;base64,'+base64image,
                }}
                style = {styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
            /> :
            <RNCamera
                ref={ref => {
                this.camera = ref;
                }}
                style = {styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
            />}
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                <TouchableOpacity
                    onPress={this.takePicture.bind(this)}
                    style = {styles.capture}
                >
                    <Icon name="camera" size={30} color="#900" />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                <TouchableOpacity
                    onPress={this.savePicture.bind(this)}
                    style = {styles.save}
                >
                    <Text style={{fontSize: 14}}> Save! </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}