import Link from "next/link";
import "tailwindcss/tailwind.css";

// Utilities
import colors from "../../../utilities/colors";

const classes = "text-darkRed font-bold hover:text-lightRed underline";

function RedLinkDomestic({ children, href }) {
  return (
    <Link href={href}>
      <a
        // className={classes}
        className="text-darkRed font-bold hover:text-lightRed underline"
        // style={{ color: colors.DARK_RED }}
      >
        {children}
      </a>
    </Link>
  );
}

export default RedLinkDomestic;
