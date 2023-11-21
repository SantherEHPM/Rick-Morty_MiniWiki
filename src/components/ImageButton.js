import React from 'react'
import { View,Text,StyleSheet,Image,Touchable, TouchableWithoutFeedback} from 'react-native'
import * as global from '../general/globals'

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height:'70%',
        resizeMode:'contain'
    }
})

export default function ImageButton({source,size,style,onPress}){
    return(
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View style={[styles.container,{height:size,width:size},style]}>
                <Image 
                    style={styles.image}
                    source={source}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}