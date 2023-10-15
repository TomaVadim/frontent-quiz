import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { overrides } from "./overrides/overrides";

export const generateTheme = (): Theme => {
  const theme = createTheme({
    palette,
    typography,
  });
  theme.components = overrides(theme);

  return theme;
};
