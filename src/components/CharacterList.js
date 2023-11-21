import React, { useRef } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import * as global from '../general/globals'

import Indexer from './Indexer'
import CharacterCard from './CharacterCard'

import { useAPIContext } from '../context/APIContext'

const styles = StyleSheet.create({
    grid:{
        flexWrap:'wrap',
        flexDirection:'row',
        gap:4,
        width:308,
        height:520
    }
})

export default function CharacterList(navigation){
    const {search,currentPage} = useAPIContext()

    const keys = useRef(0)

    return(
        <View style={styles.grid}>
            {search&&
                (search[currentPage]).map(result=>(
                    <View key={result.id}>
                        <CharacterCard source={result.image} name={result.name} id={result.id}/>
                    </View>
                ))

            }
            {search.length > 1&&<Indexer nPages={4} />}
        </View>
    )
}