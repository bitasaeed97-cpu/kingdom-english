import dailyRoutine from "./units/dailyRoutine.js";
import family from "./units/family.js";
import colorsNumbers from "./units/colorsNumbers.js";
import animals from "./units/animals.js";
import storyTime from "./units/storyTime.js";

// Add new units here as they're built — the key must match a castle id in castles.js.
export const UNIT_CONTENT = {
  "daily-routine": dailyRoutine,
  family,
  "colors-numbers": colorsNumbers,
  animals,
  "story-time": storyTime,
};
