import React, { useState } from 'react'
import { View,Text,StyleSheet,TextInput,Image } from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CharacterCard from '../components/CharacterCard'
import * as global from '../globals'
import TextStylable from '../components/TextStylable'
import Indexer from '../components/lndexer'


function ImageResponse({source,text}){
    const styles = StyleSheet.create({
        container:{
            justifyContent:'center',
            alignItems:'center',
            height:'100%',
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
            <TextStylable opaque medium>{text}</TextStylable>
        </View>
    )
}


export default function Searcher(){

    const styles = StyleSheet.create({
        body:{
            height:'100%',
            width:'100%',
            backgroundColor:global.ColorsPalette.Secondary1
        },
        main:{
            height:'100%',
            width:'100%',
            position:'absolute',
            top:0,
            left:0,
            zIndex:0,
            justifyContent:'center',
            alignItems:'center'
        }
    })
    
    const [searched,setSearched] = useState(true)
    const [APIInfo,setAPIInfo] = useState(true)

    function responses(){
        let response

        if(searched){
            if(APIInfo){
                response=(
                    <View style={{flexWrap:'wrap',flexDirection:'row',gap:4,width:308}}>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <Indexer nPages={4}/>
                    </View>
                )
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
        <View style={styles.body}>
            <Header>
                <SearchBar placeholder={'Buscar nombre'} width={'80%'}/>
            </Header>
            {responses()}
        </View>
    )
}