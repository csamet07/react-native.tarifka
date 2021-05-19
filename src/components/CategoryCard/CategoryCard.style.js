import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#eceff1',
        margin:5,
        paddingBottom:1,
        paddingTop:1,
        padding:5,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50
    },
    image:{
        width:50,
        height:50,
        resizeMode: 'contain'
    },
    text: {
        alignSelf: 'center',
        marginLeft: 10,
        fontFamily: 'Arial'
    }
});