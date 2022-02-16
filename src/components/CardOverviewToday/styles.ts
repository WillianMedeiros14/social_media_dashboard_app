import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface Props {
    decreaseViews: boolean;
}

export const Container = styled(RectButton)`
    width: 100%;
    height: 125px;
    background-color: ${({theme}) => theme.colors.cardBackground};
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    margin-top: 16px;
`;

export const ContainerSection= styled.View `
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;
    
export const Title = styled.Text `
    color: ${({theme}) => theme.colors.textPrimary};
`;

export const NumberFollowers = styled.Text `
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 30px;
    font-weight: 700;
`;

export const ContainerSectionSecondary= styled(ContainerSection) `
    align-items: flex-end;
`;

export const ContainerViewPercent= styled.View `
    flex-direction: row;
    align-items: center;
    margin-bottom: 3px;
`;

export const TextFollowersPercent = styled.Text<Props> `
    color: ${({theme, decreaseViews}) => decreaseViews ? theme.colors.brightRed : theme.colors.limeGreen};
    font-size: 12px;
    margin-left: 5px;font-size: 12px;
    margin-left: 5px;
`;
    