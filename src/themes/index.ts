import type { AllThemes } from "../types/theme";
import { techyThemes } from "./techy-themes";
// import { nintendoThemes } from "./nintendo-themes";
import { testingThemes } from "./testing-themes";

export const allThemes: AllThemes = {
  ...techyThemes,
  ...testingThemes,
  // ...nintendoThemes,
};

export {
  // nintendoThemes,
  techyThemes,
};
