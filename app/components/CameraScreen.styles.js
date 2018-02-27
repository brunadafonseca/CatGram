import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttons: {
        flex: 0,
        alignSelf: 'center',
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0
    },
    button: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 35,
        width: 70,
        height: 70,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
});