import React, {
    createContext,
    useState,
    useContext,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components';
import dark from '../global/themes/dark';
import ligth from '../global/themes/ligth';
  
interface ThemeAplicationContextData {
    getTheme: () => void;
    themeAplication: string;
    setThemeAplication: (item: string) => void;
}
  
const ThemeAplicationContext = createContext<ThemeAplicationContextData>({} as ThemeAplicationContextData);
  
export const ThemeAplicationProvider: React.FC = ({ children }) => {
    const [themeAplication, setThemeAplication] = useState<any>();

    async function getTheme(){
      const localTheme = await AsyncStorage.getItem("@_app_theme");

      console.log('Tema buscado');
      console.log(localTheme);
      if(localTheme){
        const jsonValue = JSON.stringify(localTheme);
        setThemeAplication(jsonValue);
        if(localTheme === "dark"){
          setThemeAplication("dark");
        }else{
          setThemeAplication("light");
        }
      }
    }
    
    return (
      <ThemeProvider theme={themeAplication === "dark" ? dark : ligth}>
        <ThemeAplicationContext.Provider
          value={{
              getTheme,
              themeAplication,
              setThemeAplication
          }}
        >
            {children}
        </ThemeAplicationContext.Provider>
      </ThemeProvider>
    );
};
  
export function useThemeAplication(): ThemeAplicationContextData {
  const context = useContext(ThemeAplicationContext);
  
  return context;
}