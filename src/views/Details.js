import React from 'react'
import { View,Text,StyleSheet,Image, Button } from 'react-native'
import * as global from '../general/globals'
import Header from '../components/Header'
import StylableText from '../components/StylableText'
import Link from '../components/Link'
import { useAPIContext } from '../context/APIContext';

const styles = StyleSheet.create({
    header:{
        flex:1
    },  
    detailsMain:{
        flex:25,
        width:'100%',
        backgroundColor:global.ColorsPalette.Secondary2,
        alignItems:'center',
        justifyContent:'center',
        padding:30,
        paddingBottom:80
    },
    details:{
        backgroundColor:global.ColorsPalette.Secondary1,
        width:'100%',
        height:'100%',
        borderRadius:30
    },
    img:{
        width:'100%',
        height:'60%',
        backgroundColor:'#AAA',
        resizeMode:'contain',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    info:{
        paddingHorizontal:40,
        paddingVertical:20
    }
})

export default function Details({}){
    
    const {navigator,character} = useAPIContext();

    return(

        <View style={global.body}>
            <Header back style={styles.header}/>
            
            <View style={styles.detailsMain}>
                {character&&
                <View style={styles.details}>
                    <Image
                        style={styles.img}
                        source={{uri:character.image}}
                    />
                    <View style={styles.info}>
                        <StylableText large>Nombre:{character.name}</StylableText>
                        <StylableText medium>Status:{character.status}</StylableText>
                        <StylableText medium>Especie:{character.species}</StylableText>
                        <StylableText medium>Genero:{character.gender}</StylableText>
                        <StylableText medium>Ubicacion Actual:{character.location.name}</StylableText>
                        <Link url={'https://rickandmorty.fandom.com/wiki/'+character.name}>
                            Más información
                        </Link>
                    </View>
                </View>
                }
            </View>
        </View>
    )
}