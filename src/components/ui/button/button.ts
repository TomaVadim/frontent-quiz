import { CSSProperties } from "@mui/material/styles/createMixins";

export const buttonTheme: CSSProperties = {
  backgroundColor: "#3a3a3a",
  boxShadow: "4px 6px 15px rgba(0, 0, 0, 0.06)",
  borderRadius: "6px",
  width: "100%",
  maxHeight: "59px",
  color: "#ffffff",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#707070",
  },
};
