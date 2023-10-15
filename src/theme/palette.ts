import { PaletteOptions, alpha } from "@mui/material";

export const palette: PaletteOptions = {
  primary: {
    main: "#3a3a3a",
    dark: "#373737",
    light: "#707070",
  },
  // TODO: update secondary colors later
  secondary: {
    main: "#ffffff",
    dark: "#ffffff",
    light: "#ffffff",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  grey: {
    50: "#aaaaaa",
    100: "#808080",
    A100: alpha("#000000", 0.5),
  },
};
