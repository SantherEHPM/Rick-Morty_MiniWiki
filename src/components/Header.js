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
        width:'100%',
        zIndex:5,
        backgroundColor:global.ColorsPalette.Primary1
    },
    titleIcon:{
        marginTop:10,
        height:90,
        resizeMode:'contain'
    },
    back:{
        width:40,
        height:40,
        position:'absolute',
        left:10,
        top:50
    }
})

export default function Header({children,back,style}){
    return(
        <View style={[styles.container,style]}>
            {(back)&&
                <Image
                style={styles.back}
                source={global.backArrow}
                />
            }
            <Image
                style={styles.titleIcon}
                source={global.wikiTittle}
            />
            {children}
        </View>
    )
}