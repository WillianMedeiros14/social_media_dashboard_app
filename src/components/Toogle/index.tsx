import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { useTheme } from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useThemeAplication } from '../../hooks/theme';

import * as S from './styles';

interface Props {
    typeTheme: string;
}

export function Toogle({typeTheme}:Props){
    const theme = useTheme();

    const { setThemeAplication } = useThemeAplication();
    const [themeAplicationHandle, setThemeAplicationHandle] = useState(typeTheme);

    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if(typeTheme === "dark"){
            Animated.timing(animation, {
                toValue: 23, 
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }else{
            Animated.timing(animation, {
                toValue: 0, 
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }
    }, [typeTheme]);

    async function handleChangeTheme(){
        if (typeTheme === "light") {
            setThemeAplicationHandle("dark");
            setThemeAplication("dark");
            Animated.timing(animation, {
                toValue: 23, 
                duration: 1000,
                useNativeDriver: false,
            }).start();
            await AsyncStorage.setItem("@_app_theme", "dark");
        } else {
            setThemeAplicationHandle("light");
            setThemeAplication("light");
            Animated.timing(animation, {
                toValue: 0, 
                duration: 1000,
                useNativeDriver: false,
            }).start();
            await AsyncStorage.setItem("@_app_theme", "light");
        }
    }
    
    return(
        <S.Toogle onPress={handleChangeTheme} 
            activeOpacity={0.5}
            hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
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