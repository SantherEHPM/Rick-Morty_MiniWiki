import React, { Children } from 'react'
import { View,Text,StyleSheet} from 'react-native'
import ImageButton from './ImageButton'
import Constants from 'expo-constants'
import * as global from '../general/globals'
import { useAPIContext } from '../context/APIContext'

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        minHeight:'15%',
        width:'100%',
        zIndex:5,
        backgroundColor:global.ColorsPalette.Primary1
    },
    titleIcon:{
        marginTop:10,
        height:150,
        width:420,
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

    
    const {navigator} = useAPIContext();


    return(
        <View style={[styles.container,style]}>
            {(back)&&
                <ImageButton
                    style={styles.back}
                    source={global.backArrow}
                    onPress={()=>navigator.back()}
                />
            }
            <ImageButton
                style={styles.titleIcon}
                source={global.wikiTittle}
                onPress={()=>navigator.navigate('Home')}
            />
            {children}
        </View>
    )
}