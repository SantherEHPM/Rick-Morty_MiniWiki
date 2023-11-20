import React from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import ImageButton from './ImageButton'
import * as global from '../globals'

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    searchBar:{
        height:40,
        backgroundColor:'#FFF',
        padding:5,
        marginVertical:10,
        borderRadius:10,
        width:'100%'
    },
    searchButton:{
        position:'absolute',
        zIndex:1,
        backgroundColor:global.ColorsPalette.Primary3,
        top:10,
        right:0,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        width:40
    }
})

export default function SearchBar({placeholder,width}){
    return(
        <View style={[styles.container,{width:width}]}>
            <ImageButton source={global.searchIcon} size={40} style={styles.searchButton}/>
            <TextInput
                style={styles.searchBar}
                placeholder={placeholder}
                keyboardType='default'
            />
        </View>
    )
}