import 'styled-components';

declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {
        colors: {
            background: string;
            backgroundSecondary: string;
            cardBackground: string;
            textPrimary: string;
            textSecondary: string;

            limeGreen: string;
            brightRed: string;
            facebook: string;
            twitter: string;
            youTube: string;
            linearInstagranPrimary: string;
            linearInstagranSecondary: string;

            toggle: string;
        },

        fonts: {
            regular: string;
            bold: string;
        }
    }
}