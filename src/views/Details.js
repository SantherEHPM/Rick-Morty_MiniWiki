import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import * as global from '../globals'
import Header from '../components/Header'
import StylableText from '../components/StylableText'

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
        paddingBottom:100
    },
    details:{
        backgroundColor:global.ColorsPalette.Secondary2,
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

export default function Details({}){
    return(
        <View style={global.body}>
            <Header back style={styles.header}/>
            <View style={styles.detailsMain}>
                <View style={styles.details}>
                    <Image
                        style={styles.img}
                        source={global.noFoundIcon}
                    />
                    <View style={styles.info}>
                        <StylableText large>Nombre</StylableText>
                        <StylableText>Status</StylableText>
                        <StylableText>Especie</StylableText>
                        <StylableText>Genero</StylableText>
                        <StylableText>Ubicacion Actual:</StylableText>
                        <StylableText>Mas informacion</StylableText>
                    </View>
                </View>
            </View>
        </View>
    )
}