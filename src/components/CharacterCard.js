import React, { useEffect } from 'react'
import { View,Text,StyleSheet,Image, TouchableWithoutFeedback, Alert} from 'react-native'
import * as global from '../general/globals'
import StylableText from './StylableText'
import { useAPIContext } from '../context/APIContext'

const styles = StyleSheet.create({
    container:{
        width:100,
        height:150,
        backgroundColor:global.ColorsPalette.Secondary3,
        borderRadius: 10,
        alignItems:'center'
    },
    img:{
        width:'100%',
        height:'70%',
        resizeMode:'center',
        backgroundColor:global.ColorsPalette.Secondary2,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    text:{
        marginTop:10
    }
})

export default function CharacterCard({source,name,id}){
    const {navigator,characterById,character} = useAPIContext()


    // useEffect(()=>Alert.alert(character&&JSON.stringify(character))
    // ,[character])
    return(
            <TouchableWithoutFeedback
                onPress={()=>{
                    characterById(id)
                    navigator.navigate('Details')
                }}
            >
                <View style={styles.container}>
                    
            <Image
                style={styles.img}
                source={{uri:source}}
            />
            <StylableText style={styles.text} white>{name}</StylableText>
                </View>
            </TouchableWithoutFeedback>
    )
}