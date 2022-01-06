import "tailwindcss/tailwind.css";

const classes = "text-base leading-loose font-droid text-lightBlack";

/**
 * @param {Array} children -
 * @param {Boolean} smallMargin -
 * @returns
 *
 * Links in the paragraph were getting the key warning.
 * This wasn't game breaking and just annoying. Since
 * the key property is read only, I have to create an all
 * together new component and add the random key.
 */
export function Paragraph({
  children,
  smallMarginBottom = false,
  smallMarginTop = false,
  center = false,
}) {
  // If given smallMargin prop, the next element is also a parapraph.
  const marginBottom = smallMarginBottom ? "mb-3" : "mb-14";
  const marginTop = smallMarginTop ? "-mt-12" : "";

  const textAlign = center ? "text-center" : "";

  return (
    <p className={`${marginBottom} ${textAlign} ${classes} ${marginTop}`}>
      {children.map((child) => child)}
    </p>
  );
}

// {children.map((child) => {
//   if (typeof child !== "string") {
//     const tempChild = {
//       ...child,
//     };
//     return tempChild;
//   } else {
//     return child;
//   }
// })}

export default Paragraph;
