import React from 'react'
import { View,Text,StyleSheet,Button, Alert} from 'react-native'
import * as global from '../globals'
import StylableButton from './StylableButon'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    button:{
        width:70,
        height:70,
        backgroundColor: global.ColorsPalette.Secondary2
    },
    btnPage:{
        width:40,
        height:40,
        backgroundColor:global.ColorsPalette.Primary2,
        color:'#FFF'
    }
})

export default function Indexer({nPages,style}){

    return(
        <View style={[styles.container,style]}>
            <StylableButton style={styles.btnPage}>1</StylableButton>
        </View>
    )
}