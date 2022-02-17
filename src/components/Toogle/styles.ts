import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native'

interface Props {
  themeType: string;
}

export const Toogle = styled.TouchableOpacity `
    width: 50px;
    height: 25px;
    border-radius: 20px;
`;


export const ToogleBackgroundGradient = styled(LinearGradient)`
  border-radius: 20px;
  flex: 1;
  justify-content: center;
  padding-left: 3px;
  padding-right: 3px;
`;


export const TogleCircle = styled(Animated.View)<Props>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background};
`;

