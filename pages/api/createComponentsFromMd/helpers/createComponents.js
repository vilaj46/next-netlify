// Utilities
import isNestedImage from "../../../../utilities/isNestedImage";

// Creator Functions
import createImage from "./createImage";
import createHeader from "./createHeader";
import createParagraph from "./createParagraph";

function createComponents(children) {
  const components = children.map((child, index) => {
    const { nodeName } = child;

    switch (nodeName) {
      case "P":
        return createParagraph(child);
      case "H2":
        return createHeader(child, "h2");
      case "IMG":
        return createImage(child);
      default:
        return <p>Filler for {nodeName}</p>;
    }
  });

  return components;
}

export default createComponents;
