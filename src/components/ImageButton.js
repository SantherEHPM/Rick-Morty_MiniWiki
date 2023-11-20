import React from 'react'
import { View,Text,StyleSheet,Image,Touchable} from 'react-native'
import * as global from '../globals'

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:'70%',
        height:'70%',
        resizeMode:'contain'
    }
})

export default function ImageButton({source,size,style}){
    return(
        <View style={[styles.container,{height:size,width:size},style]}>
            <Image 
                style={styles.image}
                source={source}
            />
        </View>
    )
}