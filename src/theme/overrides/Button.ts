import { Components, Theme } from "@mui/material";

export const Button = (theme: Theme): Components => {
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
          boxShadow: "4px 6px 15px rgba(0, 0, 0, 0.06)",
          borderRadius: 6,
          maxHeight: 59,
          color: theme.palette.primary.light,
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
          "&:focus": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
      },
    },
  };
};
