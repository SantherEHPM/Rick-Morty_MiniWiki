import React, { useState } from 'react'
import { View,Text,StyleSheet,TextInput,Image, Button } from 'react-native'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CharacterCard from '../components/CharacterCard'
import * as global from '../globals'
import StylableText from '../components/StylableText'
import Indexer from '../components/lndexer'


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
    
    const [searched,setSearched] = useState(true)
    const [APIInfo,setAPIInfo] = useState(true)

    function responses(){
        let response

        if(searched){
            if(APIInfo){
                response=(
                    <View style={{flexWrap:'wrap',flexDirection:'row',gap:4,width:308}}>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'} navigation={navigation}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <CharacterCard source={global.noFoundIcon} name={'Propouse Bot'}/>
                        <Indexer nPages={4} style={{marginTop:10}}/>
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
        <View style={global.body}>
            <Header navigation={navigation}>
                <SearchBar placeholder={'Buscar nombre'} width={'80%'}/>
            </Header>
            {responses()}
        </View>
    )
}