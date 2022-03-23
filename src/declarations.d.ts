import { Theme, ThemeOptions, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
  }
  interface CustomPaletteOptions extends PaletteOptions {
    neutral: {
      [key: number]: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
    };
    palette: CustomPaletteOptions;
  }
  function createTheme(options?: CustomThemeOptions): CustomTheme;
}

