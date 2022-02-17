import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes  from './app.routes'; 

import { useThemeAplication } from '../hooks/theme';

export function Routes(){
    const { getTheme } = useThemeAplication();

    useEffect(() => {
        getTheme();
    }, [])

    return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    );
}