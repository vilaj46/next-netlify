import React, { useState } from "react";
import "tailwindcss/tailwind.css";

// Utilities
import colors from "../../../utilities/colors";

// Preview Panel
import { onMouseEnter, onMouseLeave } from "./redLinkHover";

const classes = "text-darkRed text-lg font-bold hover:text-lightRed underline";

function RedLinkForeign({ children, href }) {
  const [color, setColor] = useState(colors.SUPER_DARK_RED);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={classes}
      onMouseEnter={() => onMouseEnter(setColor)}
      onMouseLeave={() => onMouseLeave(setColor)}
      style={{ color, fontFamily: "juni" }}
    >
      {children}
    </a>
  );
}

export default RedLinkForeign;
