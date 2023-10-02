import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

import palette from "@/theme/palette";
import typography from "@/theme/typography";

export const generateTheme = (): Theme => {
  const theme = createTheme({
    palette,
    typography,
    components: {},
  });

  return theme;
};
