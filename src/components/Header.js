import React, { Children } from 'react'
import { View,Text,Image,StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import * as global from '../globals'

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:Constants.statusBarHeight,
        minHeight:'15%',
        zIndex:5,
        backgroundColor:global.ColorsPalette.Primary1
    },
    titleIcon:{
        marginTop:10,
        height:90,
        resizeMode:'contain'
    }
})

export default function Header({children}){
    return(
        <View style={styles.container}>
            <Image
                style={styles.titleIcon}
                source={global.wikiTittle}
            />
            {children}
        </View>
    )
}