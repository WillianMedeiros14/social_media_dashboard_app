import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';

import {
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { ThemeAplicationProvider } from './src/hooks/theme';

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
