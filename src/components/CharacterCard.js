import React from 'react'
import { View,Text,StyleSheet,Image} from 'react-native'
import * as global from '../globals'
import StylableText from './StylableText'

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
    return(
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={source}
            />
            <StylableText style={styles.text} white>{name}</StylableText>
        </View>
    )
}