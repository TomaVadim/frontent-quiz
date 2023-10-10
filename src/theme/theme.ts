import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { buttonTheme } from "@/components/ui/button/button";

export const generateTheme = (): Theme => {
  const theme = createTheme({
    palette,
    typography,
    components: {
      MuiButton: {
        styleOverrides: {
          root: buttonTheme,
        },
      },
    },
  });

  return theme;
};
