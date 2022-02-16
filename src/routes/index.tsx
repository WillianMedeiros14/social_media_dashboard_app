import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes  from './app.routes'; 
import { ThemeProvider } from 'styled-components';
import { useThemeAplication } from '../hooks/theme';
import dark from '../global/themes/dark';
import ligth from '../global/themes/ligth';

export function Routes(){

    return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    );
}