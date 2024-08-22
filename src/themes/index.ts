import type { AllThemes } from "../types/theme";
import { nintendoThemes } from "./nintendo-themes";

export const allThemes: AllThemes = {
  ...nintendoThemes,
};

console.log("ALL THEMES: ", allThemes);

export { nintendoThemes };
