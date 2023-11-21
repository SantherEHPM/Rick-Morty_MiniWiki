import React, { useEffect,useState } from 'react'
import { View,Text,StyleSheet,Button, Alert, TouchableHighlight, TouchableWithoutFeedback, ScrollView} from 'react-native'
import * as global from '../general/globals'
import StylableButton from './StylableButon'
import { useAPIContext } from '../context/APIContext'
import StylableText from './StylableText'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        gap:4
    },
    button:{
        width:70,
        height:70,
        backgroundColor: global.ColorsPalette.Secondary2
    },
    btnPage:{
        width:40,
        height:40,
        backgroundColor:global.ColorsPalette.Primary2,
        color:'#FFF',
        borderRadius:10,
        textAlign:'center',
        textAlignVertical:'center'
    },
    scroll:{
        position:'absolute',
        bottom:10,
        height:40,width:'100%',
        padding:0

    },
    selected:{
        backgroundColor:global.ColorsPalette.Primary3
    }
})

function IndexButton({index}){
    
    const {currentPage,setCurrentPage} = useAPIContext()
    
    const handlePageChange = () => {setCurrentPage(index)}

    const [selected,setSelected] = useState(false)

    useEffect(()=>{
        if(currentPage==index){
            setSelected(true)
        }
        else{
            setSelected(false)
        }
    },[currentPage])

    return(
        <TouchableHighlight
        onPress={handlePageChange}
        >
            <StylableText
           style={[styles.btnPage,selected&&styles.selected]}
        >{index+1}</StylableText>
        </TouchableHighlight>
    )
}

export default function Indexer({nPages,style}){

    const {search} = useAPIContext()


    return(
        <ScrollView
        horizontal
        style={styles.scroll}
        >
            <View
           style={[styles.container,style]}
           >
            {search&&
            search.map(page=>(
                <IndexButton key={search.indexOf(page)} index={search.indexOf(page)}/>
            ))
            }

            </View>  

        </ScrollView>  
        )
}