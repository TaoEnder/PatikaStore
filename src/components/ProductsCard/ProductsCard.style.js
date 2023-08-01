import  {StyleSheet,Dimensions}from "react-native";

export default StyleSheet.create({
    container:{
        margin:7,
        padding:9,
        borderRadius:10,
        flex:1,
        backgroundColor:'#eceff1',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'space-between',
    },
    image:{
        height:Dimensions.get('window').height/3.5,
        borderRadius:10,    
        alignItems:'center',
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:'black'
    }, 
    price:{
        flex:1,
        color:'gray',
        fontSize:15,
        fontWeight:'500',
    },
    inStock:{
        color:'red',
    },
})