import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export const Toogle = styled(RectButton) `
    width: 50px;
    height: 24px;
    border-radius: 20px;
`;


export const ToogleBackgroundGradient = styled(LinearGradient)`
  border-radius: 20px;
`;