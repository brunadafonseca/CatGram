import React, { Component } from 'react';
import {
  Text,
  View,
  CameraRoll,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RkButton } from 'react-native-ui-kitten';

import styles from './ImageGallery.styles'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class ImageGallery extends Component {
    
    // state = {
    //     photoArray: []
    // }

    // componentWillMount() {
    //     this.getPhotosFromGallery();
    // }

    // getPhotosFromGallery = () => {
    //     CameraRoll.getPhotos({ first: 1 })
    //       .then(res => {
    //         const photo = res.edges.map(photo => photo.node.image)[0]
    //     });
    // };

    render() {
        console.log('editpic props', this.props.data.base64)
        return (
            <View style={styles.container}>
                <Image
                    style={{width: WIDTH, height: HEIGHT - 200}}
                    source={{
                        isStatic: true,
                        uri: 'data:image/jpeg;base64,'+this.props.data.base64,
                    }}
                />
            </View>
        );
    }
}

