import React from "react";

import { IconDown, IconUp } from '../../assets/icons'

import * as S from './styles';

interface Props {
    title: string; 
    Icon: any; 
    qtdFollowers: string; 
    qtdFollowersPercent: string;
    decreaseViews: boolean;
}

export function CardOverviewToday({
    title,
    Icon,
    qtdFollowers,
    qtdFollowersPercent,
    decreaseViews
}: Props){
    return (
        <S.Container>
            <S.ContainerSection>
                <S.Title>{title}</S.Title>
                <Icon />
            </S.ContainerSection>

            <S.ContainerSectionSecondary>
                <S.NumberFollowers>{qtdFollowers}</S.NumberFollowers>
                <S.ContainerViewPercent>
                    {
                        decreaseViews ? 
                        <IconDown />
                        :
                        <IconUp />
                    }
                    <S.TextFollowersPercent decreaseViews={decreaseViews}>{qtdFollowersPercent}</S.TextFollowersPercent>
                </S.ContainerViewPercent>
            </S.ContainerSectionSecondary>
        </S.Container>
    );
}