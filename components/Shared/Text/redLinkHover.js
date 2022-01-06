// Utilities
import colors from "../../../utilities/colors";

/**
 * For the preview panel.
 */
export const onMouseEnter = (setColor) => {
  setColor(colors.LIGHT_RED);
};

export const onMouseLeave = (setColor) => {
  setColor(colors.DARK_RED);
};
