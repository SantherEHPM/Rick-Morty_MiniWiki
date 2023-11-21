import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import * as global from '../general/globals'

import Indexer from './Indexer'
import CharacterCard from './CharacterCard'

import { useAPIContext } from '../context/APIContext'

const styles = StyleSheet.create({
    grid:{
        flexWrap:'wrap',
        flexDirection:'row',
        gap:4,width:308
    }
})

export default function CharacterList(navigation){
    const {search} = useAPIContext()

    return(
        <View style={styles.grid}>
            {
                (search.results).map(result=>(
                    <View key={result.id}>
                        <CharacterCard source={result.image} name={result.name} id={result.id}/>
                    </View>
                ))
            }
            
            <Indexer nPages={4} style={{marginTop:10}}/>
        </View>
    )
}