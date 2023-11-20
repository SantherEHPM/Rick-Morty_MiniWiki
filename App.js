import React from 'react';
import * as global from './src/globals'
import { View,StatusBar } from 'react-native';

import Navigator from './src/routes/Navigator'

export default function App() {
  return (
      <Navigator/>
  );
}
