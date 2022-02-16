import React from "react";
import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props {
    onPress: () => void;
}

export function Toogle({ onPress }: Props){
    const theme = useTheme();
    
    return(
        <S.Toogle onPress={onPress}>
            <S.ToogleBackgroundGradient
                start={{x:0,y:1}}
                end={{x:1,y:0}}
                colors={[theme.colors.togleGradientPrimary, theme.colors.togleGradientSecondary]}
            >
                <S.TogleCircle />
            </S.ToogleBackgroundGradient>
        </S.Toogle>
    )
}