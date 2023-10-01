import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";

import palette from "./palette";
import typography from "./typography";

const generateTheme = (): Theme => {
  const theme = createTheme({
    palette,
    typography,

    components: {},
  });

  return theme;
};

export default generateTheme;
