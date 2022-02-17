import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components';
import dark from '../global/themes/dark';
import ligth from '../global/themes/ligth';
  
interface ThemeAplicationContextData {
    // toggleTheme: () => void;
    getTheme: () => void;
    themeAplication: string;
    setThemeAplication: (item: string) => void;
}
  
const ThemeAplicationContext = createContext<ThemeAplicationContextData>({} as ThemeAplicationContextData);
  
 
export const ThemeAplicationProvider: React.FC = ({ children }) => {
    const [themeAplication, setThemeAplication] = useState("dark");

    useEffect(() => {
      getTheme();
    }, []);

    async function getTheme(){
      const localTheme = await AsyncStorage.getItem('@_app_theme');
      const jsonValue = JSON.stringify(localTheme)
      localTheme && setThemeAplication(jsonValue);
    }
    
    // const toggleTheme = async () => {
    //     if (themeAplication === "light") {
    //       await AsyncStorage.setItem('@_app_theme', "dark");
    //       setThemeAplication("dark");
    //     } else {
    //       await AsyncStorage.setItem('@_app_theme', "light");
    //       setThemeAplication("light");
    //     }
    // };
  
    return (
      <ThemeAplicationContext.Provider
        value={{
            // toggleTheme,
            getTheme,
            themeAplication,
            setThemeAplication
        }}
      >
        <ThemeProvider theme={themeAplication === "dark" ? dark : ligth}>
          {children}
        </ThemeProvider>
      </ThemeAplicationContext.Provider>
    );
};
  
export function useThemeAplication(): ThemeAplicationContextData {
  const context = useContext(ThemeAplicationContext);
  
  return context;
}