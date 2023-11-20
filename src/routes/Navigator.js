import React from 'react'
import { View,Text,StyleSheet,StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import * as global from '../globals'
import Searcher from '../views/Searcher'
import Details from '../views/Details'

const styles = StyleSheet.create({
})

const Stack = createNativeStackNavigator()

export default function Navigator({}){
    return(
        <NavigationContainer>
            <StatusBar
                backgroundColor={global.ColorsPalette.Primary2}
            />
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
                initialRouteName='Home'
            >
                <Stack.Screen
                    name='Home'
                    component={Searcher}
                    
                />
                <Stack.Screen
                    name='Details'
                    component={Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}