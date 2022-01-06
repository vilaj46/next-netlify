import "tailwindcss/tailwind.css";

import colors from "../../../utilities/colors";

const classes =
  "text-lightRed text-4xl text-center uppercase font-juni mt-14 mb-4";

/**
 * @param {Array} children - child components or text.
 * @returns h1 component.
 *
 * style with color is included for netlify preview.
 */
function PageTitle({ children }) {
  return (
    <h1
      className={classes}
      style={{ color: colors.LIGHT_RED, fontFamily: "juni" }}
    >
      {children}
    </h1>
  );
}

export default PageTitle;
