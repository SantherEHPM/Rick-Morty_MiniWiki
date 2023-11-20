import React from "react"
import { createBottomTabNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

import Loading from "../views/Loading"
import Details from "../views/Details"
import Searcher from "../views/Searcher"

const Tab = createBottomTabNavigator()

function Tabs(){
    return(
        <Tab.Navigator
            initialRouteName="Loading"
            screenOptions={{
                tabBar
            }}
        >
            <Tab.Screen name='Loading' component={Loading}/>
            <Tab.Screen name='Home' component={Searcher}/>
            <Tab.Screen name='Details' component={Details}/>
        </Tab.Navigator>
    )
}

export default function Navigator (){
    return(
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}
