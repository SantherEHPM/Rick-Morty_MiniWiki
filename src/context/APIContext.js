import React,{createContext, useState} from 'react'
import { View,Text,StyleSheet, Alert } from 'react-native'
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
    const [currentPage,setCurrentPage] = useState(0)

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
        let response = (await apiGetter(`character/?name=${name}`))
        if(!response){
            setSearch(null)
            setReset(false)
            return
        }
        let nPages = response.info.pages
        let results = []

        for(let i=1;i<=nPages;i++){
            response = (await apiGetter(`character/?name=${name}&page=${i}`)).results
            response.forEach(r=>{
                results.push(r)
            })
            
        }

        let pages = []
        let page = []
        let nItems = 0

        results.forEach(r => {
            nItems++
            page.push(r)
            if(nItems>=9){
                pages.push(page)
                nItems=0
                page=[]
            }
        });
        if(page.length>0){
            pages.push(page)
        }
        
        setSearch(pages)
        setReset(false)
    }

    const characterById = async(id)=>{
        setCharacter(await apiGetter(`character/${id}`))
        setReset(false)
    }

    const randomCharacters = async() =>{
        const apiResponse = (await apiGetter(`character/`)).results
        let response = {random:[]}
        let randomIndex 

        for(let i=0; i<9;i++){
            randomIndex = parseInt(Math.random()*apiResponse.length)
            response.random.push(apiResponse[randomIndex])
        }
        
        setReset(false)
        setSearch(response)
    }

    const reseting = () =>{
        setCurrentPage(0)
        setReset(true)
    }

    return(
        <APIContext.Provider value={{
            character,
            search,
            reset,
            navigator,
            currentPage,
            reseting,
            setCurrentPage,
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