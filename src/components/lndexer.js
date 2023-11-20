import React from 'react'
import { View,Text,StyleSheet,Button, Alert} from 'react-native'
import * as global from '../globals'

const styles = StyleSheet.create({

})

export default function Indexer({nPages}){

    const pages = (() => {
        let array = []
        for(let i=0;i<nPages;++i){
            array.push(i)
        }
        return array
    })

    new Alert.alert({pages})

    return(
        <View>
            {
                
                pages.map(page=>{
                    <Text
                        
                    >{page}</Text>
                })
            }
        </View>
    )
}