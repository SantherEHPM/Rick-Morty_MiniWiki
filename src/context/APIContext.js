import React,{createContext, useState} from 'react'
import { View,Text,StyleSheet } from 'react-native'
import axios,{all} from 'axios'
import * as global from '../general/globals'

const styles = StyleSheet.create({
})

export const APIContext = createContext()

export default function APIProvider({children}){
    const [navigator,setNavigator] = useState(null)
    const [search,setSearch] = useState(null)
    const [character,setCharacter] = useState(null)
    const [reset,setReset] = useState(true)

    const API_URL = 'https://rickandmortyapi.com/api/'
    
    const api = axios.create({
        baseURL:API_URL
    })

    const apiGetter = async(endPoint) => {
        let response 
        try{
            response = (await api.get(endPoint)).data
        }catch(e){
            response = false
        }
        return response
    }

    const searchCharacters = async(name) => {
        setSearch(await apiGetter(`character/?name=${name}`))
        setReset(false)
    }

    const characterById = async(id)=>{
        setCharacter(await apiGetter(`character/${id}`))
        setReset(false)
    }

    const randomCharacters = async(id) =>{
        const apiResponse = await apiGetter(`character/`)
        let response = []
        let randomIndex 

        for(let i=0; i<9;i++){
            randomIndex = Math.random()*apiResponse.length()
            response.push(apiResponse[random])
        }

        setReset(false)
        setSearch(response)
    }

    const reseting = () =>{
        setReset(true)
    }

    return(
        <APIContext.Provider value={{
            character,
            search,
            reset,
            navigator,
            reseting,
            setNavigator,
            randomCharacters,
            characterById,
            searchCharacters
        }}>
            {children}
        </APIContext.Provider>
    )
}

export function useAPIContext(){
  const context = React.useContext(APIContext);
  if (!context) {
    throw new Error("No existe el contexto");
  }
  return context;
}