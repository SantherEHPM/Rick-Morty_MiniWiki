import React,{useCallback} from 'react'
import { View,Text,StyleSheet,Linking, TouchableHighlight, Button,Alert } from 'react-native'
import * as global from '../globals'
import StylableText from './StylableText';

const styles = StyleSheet.create({
    link:{
        color:'#00A0FF'
    }
})

export default function Link({url,children}){

    const h = () =>{
        Alert.alert(`Abriendo...`)
    }

    const handlePress = useCallback(async () => {
        await Linking.openURL(url)
      }, [url]);
    
    return(
        <TouchableHighlight
            title='Link'
            onPress={handlePress}
            underlayColor={'#003AFF33'}
        >
            <StylableText medium underline style={styles.link}>
                {children}
            </StylableText>
        </TouchableHighlight>
    )
}