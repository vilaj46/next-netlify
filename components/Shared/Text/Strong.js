import "tailwindcss/tailwind.css";

// Utilities
import colors from "../../../utilities/colors";

const classes = "text-darkRed font-bold";

function Strong({ children }) {
  return (
    <strong className={classes} style={{ color: colors.LIGHT_RED }}>
      {children}
    </strong>
  );
}

export default Strong;
