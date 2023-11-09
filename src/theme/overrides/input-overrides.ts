import { CSSInterpolation } from "tss-react";

export const inputOverrides: CSSInterpolation = {
  fontWeight: 500,
  fontSize: "14px",
  borderRadius: "6px",
  backgroundColor: "#fff",
  boxShadow: "4px 6px 15px rgba(0, 0, 0, 0.06)",
  "::placeholder": {
    color: "#aaa",
  },
};
