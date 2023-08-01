import React from "react";
import { ScrollView, View,FlatList,Text,StyleSheet,TextInput, Dimensions, SafeAreaView } from "react-native";
import products from './products.json';
import ProductsCard from './components/ProductsCard';

function App(){
    const renderProducts=({item})=><ProductsCard product={item}/>
    const keyExtractorF=((item)=>item.u_id.toString())
    return(
        <SafeAreaView  style={styles.container}>
        
        <View style={{margin:5}}>
        <Text style={styles.headerText}>PATIKASTORE</Text>
        <TextInput  style={styles.input}
        placeholder="Ara..."/>
        </View>

        <FlatList
            keyExtractor={keyExtractorF}
            data={products}
            renderItem={renderProducts}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
        /> 
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
    flexDirection: 'column',
    flexWrap: 'wrap',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:35,
        color:'purple',
    },
    input:{
        width:380,
        height:40,
        padding:10,
        borderRadius:10,
        color:"red",
        backgroundColor:'#eceff1'
    },
    

})

export default App;