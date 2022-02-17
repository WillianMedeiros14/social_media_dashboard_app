import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { useTheme } from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useThemeAplication } from '../../hooks/theme';

import * as S from './styles';

export function Toogle(){
    const theme = useTheme();

    const {themeAplication, setThemeAplication } = useThemeAplication();
    const [themeAplicationHandle, setThemeAplicationHandle] = useState(themeAplication);

    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: themeAplicationHandle === 'light' ? 23 : 0, 
            duration: 500,
            useNativeDriver: false,
        }).start();
    },[]);

    async function handleChangeTheme(){
        if (themeAplicationHandle === "light") {
            setThemeAplication("dark");
            setThemeAplicationHandle("dark");
          await AsyncStorage.setItem('@_app_theme', "dark");
        } else {
            setThemeAplication("light");
            setThemeAplicationHandle("light");
            await AsyncStorage.setItem('@_app_theme', "light");
        }
        Animated.timing(animation, {
            toValue: themeAplicationHandle === 'light' ? 23 : 0, 
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }
    
    return(
        <S.Toogle onPress={handleChangeTheme} 
            activeOpacity={0.5}
        >
            <S.ToogleBackgroundGradient
                start={{x:0,y:1}}
                end={{x:1,y:0}}
                colors={[theme.colors.togleGradientPrimary, theme.colors.togleGradientSecondary]}
            >
                <S.TogleCircle 
                    themeType={themeAplicationHandle}
                    style={{
                        transform: [{translateX: animation}]
                    }}
                />
            </S.ToogleBackgroundGradient>
        </S.Toogle>
    )
}