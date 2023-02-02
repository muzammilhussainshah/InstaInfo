
import React, { useState, useEffect } from 'react';
import axios from "axios";

import {
  SafeAreaProvider,

} from 'react-native-safe-area-context';
import Navigation from './src/router/Tab';
import { PortalProvider } from '@gorhom/portal';
import { LogBox, StatusBar, View } from 'react-native';
const cheerio = require('react-native-cheerio')

function App() {
  useEffect(async () => {
    LogBox.ignoreLogs(['Remote debugger']);
  }, [])
  

  return (
      <SafeAreaProvider>
        <PortalProvider>
          <Navigation />
        </PortalProvider>
      </SafeAreaProvider>
  );
}

export default App;
