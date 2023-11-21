import React from 'react';
import * as global from './src/general/globals'
import { View,StatusBar } from 'react-native';

import Navigator from './src/routes/Navigator'
import APIContext from './src/context/APIContext';
import APIProvider from './src/context/APIContext';

export default function App() {
  return (
    <APIProvider>
      <Navigator/>
    </APIProvider>
  );
}
