import "tailwindcss/tailwind.css";

// Utilities
import colors from "../../../utilities/colors";

const classes =
  "text-superDarkRed text-3xl text-center uppercase font-juni mt-14 mb-4";

function PageSubTitle({ children }) {
  return (
    <h2
      className={classes}
      style={{ color: colors.SUPER_DARK_RED, fontFamily: "droid" }}
    >
      {children}
    </h2>
  );
}

export default PageSubTitle;
