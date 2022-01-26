// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;
    fontSize: string;

    colors: {
      main: string;
      secondary: string;
      error: string;
      white: string;
      black: string;
    };
  }
}
