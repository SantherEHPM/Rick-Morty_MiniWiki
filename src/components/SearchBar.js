import React,{useEffect, useState} from 'react'
import { View,Text,StyleSheet,TextInput, Alert } from 'react-native'
import ImageButton from './ImageButton'
import * as global from '../general/globals'
import { useAPIContext } from '../context/APIContext'

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

    const {searchCharacters} = useAPIContext();
    const [input,setInput] = useState('');

    const handleSearch = () => {
        searchCharacters(input)
    }


    return(
        <View style={[styles.container,{width:width}]}>
            <ImageButton 
                source={global.searchIcon} 
                size={40} 
                style={styles.searchButton}
                onPress={handleSearch}
            />
            <TextInput
                style={styles.searchBar}
                placeholder={placeholder}
                keyboardType='default'
                onChangeText={setInput}
                value={input}
            />
        </View>
    )
}