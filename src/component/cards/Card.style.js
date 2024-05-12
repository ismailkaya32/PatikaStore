import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: '47.5%',
        backgroundColor: '#e8e8e8',
        margin: 5,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4, 
        borderTopLeftRadius: 5, borderTopRightRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        marginTop: 3,
    },
    inStock: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'red',
    },
    inner_container: {
        padding: 3,
    },
});