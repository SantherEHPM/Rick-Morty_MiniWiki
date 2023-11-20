import React, { Children } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import * as global from '../globals'
import StylableText from './StylableText'

const styles = StyleSheet.create({
    default:{
        width:40,
        height:40,
        padding:5,
        alignContent:'center',
        textAlign:'center',
        textAlignVertical:'center'
    },
    full:{
        width:'100%',
        height:'auto'
    }
})

export default function StylableButton({full,style,children}){
    const stylesAdd = [
        styles.default,
        full && styles.full,
        style
    ]

    return(
        <StylableText style={stylesAdd} medium>
            {children}
        </StylableText>
    )
}