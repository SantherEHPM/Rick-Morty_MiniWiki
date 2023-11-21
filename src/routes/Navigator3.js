import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Route,Switch } from 'react-router-native'
import * as global from '../general/globals'

//Vistas
import Searcher from '../views/Searcher'
import Details from '../views/Details'

const styles = StyleSheet.create({
})

export default function Navigator({}){
    return(
            <Switch>
                <Route path="/" exact Component={Searcher}>
                </Route>
                <Route path="/detials" Component={Details}>
                </Route>
            </Switch>
    )
}