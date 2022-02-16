import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';


import {
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import ligth from './src/global/themes/ligth';
import dark from './src/global/themes/dark';
import { Routes } from './src/routes';
import { ThemeAplicationProvider, useThemeAplication } from './src/hooks/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });
  
  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeAplicationProvider>
        <Routes />
    </ThemeAplicationProvider>
  );
}
