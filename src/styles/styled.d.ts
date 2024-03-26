import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      secondary: string,
      blue: {
        primary: string,
        secondary: string,
        tertiary: string,
        quaternary: string,
      },
      red: {
        primary: string,
        secondary: string,
        tertiary: string,
        quaternary: string,
      },
      gray: {
        primary: string
      }
    },
  
    fontsSizes: {
      desktop: {
        h1: string,
        h2: string,
        h3: string,
        h4: string,
        h5: string,
        p: string,
        p_small: string,
        caption: string,
      },
      mobile: {
        h1: string,
        h2: string,
        h3: string,
        h4: string,
        h5: string,
        p: string,
        p_small: string,
        caption: string,
      },
      colors: {
        black: string,
        white: string
      }
    }
  }
}