import createImage from "./createImage";
import createStrong from "./createStrong";
import createAnchor from "./createAnchor";
import createHeader from "./createHeader";
import createParagraph from "./createParagraph";

// Utilities
import randomKey from "../../../../utilities/randomKey";
import isNestedImage from "../../../../utilities/isNestedImage";

function createComponent(child, parent = "") {
  const { nodeName } = child;
  if (nodeName === "H2") {
    return createHeader(child, "h2");
  } else if (nodeName === "P") {
    const isImage = isNestedImage(child);
    if (isImage) {
      const component = createImage(child);
      return component;
    }
    const component = createParagraph(child);
    return component;
  } else if (nodeName === "STRONG") {
    const component = createStrong(child);
    return component;
  } else if (nodeName === "A") {
    const component = createAnchor(child);
    return component;
  } else if (parent === "P") {
    const component = createParagraph(child);
    return component;
  } else if (parent === "STRONG") {
    const component = createStrong(child);
    return component;
  } else if (parent === "A") {
    const component = createAnchor(child);
    return component;
  } else {
    return <p key={randomKey()}>Filler for {nodeName}</p>;
  }
}

export default createComponent;
