import { Theme } from "@mui/material";

import { Button } from "@/theme/overrides/Button";

export function overrides(theme: Theme) {
  return Object.assign(Button(theme));
}
