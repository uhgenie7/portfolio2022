import 'styled-components';
import type { ThemedCssFunction } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    borderColor: string;
    highlight: string;
    toggleBorder: string;
    gradient: string;
  }
}
