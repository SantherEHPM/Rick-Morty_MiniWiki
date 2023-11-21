import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,TextInput,Image, Button,Alert} from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import StylableText from '../components/StylableText'
import CharacterList from '../components/CharacterList'
import { useAPIContext } from '../context/APIContext'
import * as global from '../general/globals'


function ImageResponse({source,text}){
    const styles = StyleSheet.create({
        container:{
            justifyContent:'center',
            alignItems:'center',
            height:400,
            width:'100%'
        },
        img:{
            height:180,
            resizeMode:'contain'
        }
    })

    return(
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={source}
            />
            <StylableText opaque medium>{text}</StylableText>
        </View>
    )
}


export default function Searcher({navigation}){
    
    const {search,reset} = useAPIContext();

    const styles = StyleSheet.create({
        body:{
            height:'100%',
            width:'100%',
            backgroundColor:global.ColorsPalette.Secondary1
        },
        main:{
            paddingVertical:40,
            justifyContent:'center',
            alignItems:'center'
        }
    })

    function responses(){
        let response

        if(!reset){
            if(search){
                response=<CharacterList/>
            }
            else{
                response=(
                    <ImageResponse source={global.noFoundIcon} text={'No se han encontrado resultados'}/>
                )
            }
        }
        else{
            response=(
                <ImageResponse source={global.cSearchIcon} text={'Comienza a explorar'}/>
            )
        }

        return (
            <View style={styles.main}>
                {response}
            </View>
            )
    }

    return(
        <View style={global.body}>
            <Header navigation={navigation}>
                <SearchBar placeholder={'Buscar nombre'} width={'80%'}/>
            </Header>
            {responses()}
        </View>
    )
}