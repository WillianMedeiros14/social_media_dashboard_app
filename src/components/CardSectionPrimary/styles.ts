import styled, {css} from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from "react-native-gesture-handler";

interface Props {
    type?: string;
    decreaseViews?: boolean;
}

export const Container = styled(RectButton)`
    width: 100%;
    height: 216px;
    background-color: ${({theme}) => theme.colors.cardBackground};
    border-radius: 5px;
    margin-bottom: 23px;
    position: relative;
`;

export const ContainerButton = styled.View<Props> `
    flex: 1;
    border-radius: 5px;
    border-top-width: 4px;
    justify-content: space-between;
    align-items: center;
    padding: 28px;

    ${({type}) => type === 'facebook' && css `
        border-color: ${({theme}) => theme.colors.facebook};
    `};

    ${({type}) => type === 'twiter' && css `
        border-color: ${({theme}) => theme.colors.twitter};
    `};

    ${({type}) => type === 'instagran' && css `
        border-top-width: 0px;
        padding-left: 0;
        padding-right: 0
    `};

    ${({type}) => type === 'youTube' && css `
        border-color: ${({theme}) => theme.colors.youTube};
    `};
`;


export const BorderGradientInstagran = styled(LinearGradient)`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 4px;
    position: absolute;
    top: 0;
    z-index: 1;
`

export const ContainerUserName = styled.View `
    flex-direction: row;
    justify-content: center;
`;

export const UserName = styled.Text `
   color: ${({theme}) => theme.colors.textPrimary};
   margin-left: 5px;
`;


export const ContainerCenter= styled.View ``;


export const NumberFollowers = styled.Text `
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 50px;
    text-align: center;
    font-weight: 700;
`;

export const TextFollowers = styled.Text `
    color: ${({theme}) => theme.colors.textPrimary};
    text-align: center;
`;

export const ContainerDay= styled(ContainerUserName) `
    align-items: center;
`;

export const TextToday = styled.Text<Props> `
    color: ${({theme, decreaseViews}) => decreaseViews ? theme.colors.brightRed : theme.colors.limeGreen};
    font-size: 12px;
    margin-left: 5px;
`;