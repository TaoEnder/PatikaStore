import React from "react";
import {View,Text,Image} from 'react-native';
import styles from './ProductsCard.style'



const ProductsCard=({product})=>{
    return(
        
        <View style={styles.container}>
            <View >
                <View style={styles.image_container}>
                <Image style={styles.image} source={{uri: product.imgURL}}/>
                </View>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {product.inStock === false ? (
                <Text style={styles.inStock}>Stokta Yok</Text>
                ) : (<Text></Text>)}
                
            </View>
        </View>
    )
}
export default ProductsCard;