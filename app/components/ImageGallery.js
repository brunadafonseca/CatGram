import React, { Component } from 'react';
import {
  Text,
  View,
  CameraRoll,
  Image,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RkButton } from 'react-native-ui-kitten';

import styles from './ImageGallery.styles'

export default class ImageGallery extends Component {
    
    state = {
        photoArray: []
    }

    componentWillMount() {
        this.getPhotosFromGallery();
    }

    getPhotosFromGallery = () => {
        CameraRoll.getPhotos({ first: 150 })
          .then(res => {
            let photoArray = res.edges.map(photo => photo.node.image)
            this.setState({ 
                photoArray: photoArray
            });
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.imageGrid}>
                    {this.state.photoArray.map((p, i) => {
                        return (
                            <Image
                                key={i}
                                style={styles.image}
                                source={{ uri: p.uri }}
                            />
                        )
                    })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

