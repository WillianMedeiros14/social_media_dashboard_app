import React from "react";
import { useTheme } from 'styled-components';
import { IconDown, IconUp } from "../../assets/icons";

import * as S from './styles';

interface Props {
    userName: string; 
    Icon: any; 
    qtdFollowers: string;
    qtdFollowersToday: number; 
    type: string; 
    decreaseViews: boolean;
}

export function CardSectionPrimary({
    userName,
    Icon,
    qtdFollowers,
    qtdFollowersToday,
    type,
    decreaseViews
}: Props){
    const theme = useTheme();
    return (
        <S.Container type={type}>
            {
                type === 'instagran' &&
                <S.BorderGradientInstagran 
                    start={{x:0,y:1}}
                    end={{x:1,y:0}}
                    colors={[theme.colors.linearInstagranPrimary, theme.colors.linearInstagranSecondary]}
                />
            }
            <S.ContainerUserName>
                <Icon />
                <S.UserName>{userName}</S.UserName>
            </S.ContainerUserName>

            <S.ContainerCenter>
                <S.NumberFollowers>{qtdFollowers}</S.NumberFollowers>
                <S.TextFollowers>FOLLOWERS</S.TextFollowers>
            </S.ContainerCenter>

            <S.ContainerDay>
                {
                    decreaseViews ? 
                    <IconDown />
                    :
                    <IconUp />
                }
                <S.TextToday decreaseViews={decreaseViews}>{qtdFollowersToday} Today</S.TextToday>
            </S.ContainerDay>
        </S.Container>
    );
}