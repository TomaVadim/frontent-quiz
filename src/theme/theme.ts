import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { inputTheme } from "@/components/ui/input/input-theme";

export const generateTheme = (): Theme => {
  const theme = createTheme({
    palette,
    typography,
    components: {
      MuiInput: {
        styleOverrides: {
          root: inputTheme,
        },
      },
    },
  });

  return theme;
};
