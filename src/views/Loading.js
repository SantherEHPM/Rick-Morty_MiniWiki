import React, { useEffect } from 'react'
import { View,Text,Image,StyleSheet, Alert } from 'react-native'
import * as global from '../general/globals'
import Constants from 'expo-constants';
import LoadingIcon from '../components/LoadingIcon';
import { useAPIContext } from '../context/APIContext';



const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor:global.ColorsPalette.Primary1,
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    titleIcon:{
        height:100,
        resizeMode:'contain'
    }
})



export default function Loading({navigation}){

    const {navigator,setNavigator} = useAPIContext();

    useEffect(()=>{
        setNavigator(navigation)
    },[])

    useEffect(()=>{
        if(navigator){
        setTimeout(()=>{
            navigator.navigate('Home')
        },3000)
        }
    },[navigator])

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

