import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { inputOverrides } from "@/theme/overrides/input-overrides";

export const generateTheme = (): Theme => {
  const theme = createTheme({
    palette,
    typography,
    components: {
      MuiInput: {
        styleOverrides: {
          root: inputOverrides,
        },
      },
    },
  });

  return theme;
};
