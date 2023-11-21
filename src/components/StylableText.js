import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import * as global from '../general/globals'

const  styles = StyleSheet.create({
    default:{
        fontSize:14,
        color:'#000'
    },
    small:{
        fontSize:10
    },
    medium:{
        fontSize:18
    },
    large:{
        fontSize:24
    },
    opaque:{
        opacity:0.5
    },
    primary1:{
        color:global.ColorsPalette.Primary1
    },
    primary2:{
        color:global.ColorsPalette.Primary2
    },
    primary3:{
        color:global.ColorsPalette.Primary3
    },
    secondary1:{
        color:global.ColorsPalette.Secondary1
    },
    secondary2:{
        color:global.ColorsPalette.Secondary2
    },
    secondary3:{
        color:global.ColorsPalette.Secondary3
    },
    white:{
        color:'#FFF'
    },
    underline:{
        textDecorationLine:'underline'
    }
})


export default function StylableText({children,small,medium,large,opaque,white,underline,style}){
    const stylesAdd = [
        styles.default,
        small && styles.small,
        medium && styles.medium,
        large && styles.large,
        opaque && styles.opaque,
        white && styles.white,
        underline && styles.underline,
        style
    ]

    return(
        <Text style={stylesAdd}>
            {children}
        </Text>
    )
}

