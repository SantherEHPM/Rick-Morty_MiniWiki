import React from 'react'
import { View,Text,Image,StyleSheet } from 'react-native'
import * as global from '../globals'
import Constants from 'expo-constants';
import LoadingIcon from '../components/LoadingIcon';



const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor:global.ColorsPalette.Primary1,
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    titleIcon:{
        height:70,
        resizeMode:'contain'
    }
})


export default function Loading(){
    return(
        <View style={styles.container}>
            <Image
                style={styles.titleIcon}
                source={global.wikiTittle}
            />
            <LoadingIcon/>
        </View>
    )
}

