import { StyleSheet } from 'react-native';
import { RkTheme } from 'react-native-ui-kitten';
import { Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: RkTheme.current.colors.background.lightGray,
        justifyContent: 'center',
        alignItems: 'center'
    }
});