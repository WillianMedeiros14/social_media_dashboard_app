import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View `
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    
`;

export const ScrollView = styled.ScrollView `
    padding-bottom: 42px;
`;

export const Header = styled.View `
    width: 100%;
    height: 320px;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    padding-top: 42px;
    padding-left: 24px;
    padding-right: 24px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`;

export const SectionPrimary = styled.View `
    width: 100%;
    padding-bottom: 11px;
`;


export const TitlePage = styled.Text `
    font-size: 30px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.textSecondary};
`;

export const SectionScondary= styled.View `
    border-top-width: 1px;
    border-color: rgba(99, 104, 126, 0.5);
    padding-top: 20px;
`;

export const TextTotalFollowers = styled.Text `
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.textPrimary};
    margin-bottom: 11px;
`;

export const TextDarkMode = styled(TextTotalFollowers) `
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.textPrimary};
    margin-bottom: 11px;
`;


///Main

export const Main = styled.View `
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 42px;
    margin-top: -60px;
`;

export const TitleSectionOverViewToday = styled.Text `
    font-size: 25px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.textSecondary};
    margin-top: 32px;
    margin-bottom: 20px;
`;

//Toogle

