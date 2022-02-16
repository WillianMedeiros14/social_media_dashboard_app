import React from "react";
import { useTheme } from 'styled-components';

import * as S from './styles';

export function Toogle(){
    const theme = useTheme();
    
    return(
        <S.Toogle>
            <S.ToogleBackgroundGradient
                start={{x:0,y:1}}
                end={{x:1,y:0}}
                colors={[theme.colors.togleGradientPrimary, theme.colors.togleGradientSecondary]}
            >

            </S.ToogleBackgroundGradient>
        </S.Toogle>
    )
}