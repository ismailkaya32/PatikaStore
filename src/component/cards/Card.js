import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './Card.style';

function Card({news}){
    return(
       <View style={styles.container}>
        <Image style={styles.image} source={{uri: news.imgURL}}/>
        <View style={styles.inner_container}>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.price}>{news.price}</Text>            
            <Text style={styles.inStock}>{news.inStock ? "" : "STOKTA YOK"}</Text>
       </View>
       </View>
    );
};

export default Card;