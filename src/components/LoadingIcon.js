import React,{useEffect,useRef} from 'react'
import { View,Text,StyleSheet,Image,Animated } from 'react-native'
import * as global from '../globals'



export default function (){
    const fadeAnim = useRef(new Animated.ValueXY()).current; 

    useEffect(()=>{
        Animated.timing(fadeAnim, {
            toValue: 360,
            duration: 10000,
            useNativeDriver: true,
        }).start();
    },[fadeAnim])

    const styles = StyleSheet.create({
        loadingIcon:{
            height:120,
            width:120
            // transform:[
            //     {rotateZ:fadeAnim+"deg"}
            // ]
        }
    })

    return(
        <Animated.View 
            //style={{transform:[{rotateZ:(`${fadeAnim}deg`)}]}}
        >
            <Image
                style={styles.loadingIcon}
                source={global.loadingIcon}
            />
        </Animated.View>
    )
}