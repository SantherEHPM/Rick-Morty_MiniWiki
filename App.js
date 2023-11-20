import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import * as global from './src/globals'

//Vistas
import Searcher from './src/views/Searcher'
import Loading from './src/views/Loading'
import Details from './src/views/Details'

export default function App() {
  return (
    <View>
      <StatusBar
        backgroundColor={global.ColorsPalette.Primary2}
      />
      <Details/>
      <Text></Text>
    </View>
  );
}
