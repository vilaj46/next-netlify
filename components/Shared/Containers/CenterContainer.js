import "tailwindcss/tailwind.css";

const classes = "w-10/12 lg:w-10/12 mr-auto ml-auto";

/**
 * @param {Array} children
 * @returns
 *
 * Our main centering component.
 */
function CenterContainer({ children }) {
  return <div className={classes}>{children}</div>;
}

export default CenterContainer;
