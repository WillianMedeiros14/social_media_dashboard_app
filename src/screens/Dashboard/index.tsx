import React, { useState } from "react";
import { useTheme } from "styled-components";

import { IconFacebook, Iconinstagram, IconTwitter, IconYoutube } from "../../assets/icons";
import { CardSectionPrimary, CardOverviewToday, Toogle } from "../../components";
import { useThemeAplication } from "../../hooks/theme";

import * as S from './styles';

export function Dashboard(){
    const theme = useTheme();

    const [dataPrimaryCard, setDataPrimaryCard] = useState([
        {id: 1, userName: '@nathanf', icon: IconFacebook, qtdFollowers: '1987', qtdFollowersToday: 12, type: 'facebook', decreaseViews: false},
        {id: 2, userName: '@nathanf', icon: IconTwitter, qtdFollowers: '1044', qtdFollowersToday: 99, type: 'twiter', decreaseViews: false},
        {id: 3, userName: '@realnathanf', icon: Iconinstagram, qtdFollowers: '11k', qtdFollowersToday: 1099, type: 'instagran', decreaseViews: false},
        {id: 4, userName: 'Nathan F.', icon: IconYoutube, qtdFollowers: '8239', qtdFollowersToday: 144,  type: 'youTube', decreaseViews: true},
    ]);

    const [dataOverviewToday, setDataOverviewToday] = useState([
        {id: 1, title: 'Page Views', icon: IconFacebook, qtdFollowers: '87', qtdFollowersPercent: '3%', decreaseViews: false},
        {id: 2, title: 'Likes', icon: IconFacebook, qtdFollowers: '52', qtdFollowersPercent: '2%', decreaseViews: true},
        {id: 3, title: 'Likes', icon: Iconinstagram, qtdFollowers: '5462', qtdFollowersPercent: '2257%', decreaseViews: false},
        {id: 4, title: 'Profile Views', icon: Iconinstagram, qtdFollowers: '52k', qtdFollowersPercent: '333%', decreaseViews: false},
        {id: 5, title: 'Retweets', icon: IconTwitter, qtdFollowers: '117', qtdFollowersPercent: '3%', decreaseViews: false},
        {id: 6, title: 'Likes', icon: IconTwitter, qtdFollowers: '507', qtdFollowersPercent: '553%', decreaseViews: false},
        {id: 7, title: 'Likes', icon: IconYoutube, qtdFollowers: '107', qtdFollowersPercent: '19%', decreaseViews: true},
        {id: 8, title: 'Page Views', icon: IconYoutube, qtdFollowers: '1407', qtdFollowersPercent: '12%', decreaseViews: true},
    ]);
    return(
        <S.Container>
            <S.ScrollView>
                <S.Header>
                    <S.SectionPrimary>
                        <S.TitlePage>Social Media Dashboard</S.TitlePage>
                        <S.TextTotalFollowers>Total Followers: 23,004</S.TextTotalFollowers>
                    </S.SectionPrimary>
                    <S.SectionScondary>
                        <S.TextDarkMode>Dark Mode</S.TextDarkMode>
                        <Toogle/>
                    </S.SectionScondary>
                </S.Header>

                <S.Main>
                    {
                        dataPrimaryCard.map((item) => {
                            return(
                                <CardSectionPrimary
                                    key={item.id}
                                    userName={item.userName}
                                    Icon={item.icon}
                                    qtdFollowers={item.qtdFollowers}
                                    qtdFollowersToday={item.qtdFollowersToday}
                                    type={item.type}
                                    decreaseViews={item.decreaseViews}
                                />
                            )
                        })
                    }

                    <S.TitleSectionOverViewToday>OverView - Today</S.TitleSectionOverViewToday>

                    {
                        dataOverviewToday.map((item) => {
                            return(
                                <CardOverviewToday
                                    key={item.id}
                                    title={item.title}
                                    Icon={item.icon}
                                    qtdFollowers={item.qtdFollowers}
                                    qtdFollowersPercent={item.qtdFollowersPercent}
                                    decreaseViews={item.decreaseViews}
                                />
                            )
                        })
                    }
                </S.Main>
            </S.ScrollView>
        </S.Container>
    );
}