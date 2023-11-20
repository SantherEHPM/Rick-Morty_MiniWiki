import React from 'react'
import { View,Text,StyleSheet,Image, Button } from 'react-native'
import * as global from '../globals'
import Header from '../components/Header'
import StylableText from '../components/StylableText'
import Link from '../components/Link'

const styles = StyleSheet.create({
    header:{
        flex:1
    },  
    detailsMain:{
        flex:25,
        width:'100%',
        backgroundColor:global.Secondary1,
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
        height:'65%',
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

export default function Details({navigation}){
    return(
        <View style={global.body}>
            <Header back style={styles.header} navigation={navigation}/>
            <View style={styles.detailsMain}>
                <View style={styles.details}>
                    <Image
                        style={styles.img}
                        source={global.noFoundIcon}
                    />
                    <View style={styles.info}>
                        <StylableText large>Nombre</StylableText>
                        <StylableText medium>Status</StylableText>
                        <StylableText medium>Especie</StylableText>
                        <StylableText medium>Genero</StylableText>
                        <StylableText medium>Ubicacion Actual:</StylableText>
                        <Link url={'https://music.youtube.com/watch?v=RyeNAYN6MU4&list=RDAMVMWeZRT6Uoc8k'}>
                            Más información
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    )
}