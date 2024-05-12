import React from "react";
import { View, Text, Image, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import news_data from './news_data.json';
import Card from "./component/cards/Card";
function App(){
  return(
    <SafeAreaView style={styles.container} >
    <View>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <View style={styles.search_bar}>
        <Text>Ara...</Text>
      </View>
    </View>
    <FlatList
    contentContainerStyle={{justifyContent: 'center'}}
      numColumns={2}
      data={news_data}
      renderItem={({item}) => <Card news={item} />}
    ></FlatList>
    </SafeAreaView>
  
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  search_bar: {
    backgroundColor: '#e8e8e8',
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    margin: 2,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'purple', 
  },
});

export default App;