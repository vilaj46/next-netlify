// Utilities
import randomKey from "../../../../utilities/randomKey";
import components from "../../../../utilities/components";
import isNestedImage from "../../../../utilities/isNestedImage";

// Creators
import createImage from "./createImage";
import createStrong from "./createStrong";

function createParagraph(child) {
  const isImage = isNestedImage(child);
  if (isImage) {
    // Netlify Image is sitting inside a p element.
    return createImage(child);
  } else {
    const Component = components.p;

    // Determine whether or not this is a special case.
    const isSpecial = isNextParagraph(child);
    const componentsForChild = loopNestedElements(child);
    if (isSpecial) {
      return <Component smallMarginTop={true}>{componentsForChild}</Component>;
    }
    return <Component>{componentsForChild}</Component>;
  }
}

function isNextParagraph(child) {
  try {
    const { previousElementSibling } = child;
    const { nodeName } = previousElementSibling;
    if (nodeName === "P") {
      return true;
    } else {
      return false;
    }
  } catch {
    // There were no elements before this.
    return false;
  }
}

function loopNestedElements(child) {
  const childNodes = Array.from(child.childNodes);
  const newChildren = childNodes.map((node) => {
    const { nodeName, nodeValue } = node;
    switch (nodeName) {
      case "#text":
        return nodeValue;
      case "STRONG":
        return createStrong(node);
      default:
        return "ERROR in creating paragraph";
    }
  });
  return newChildren;
}

export default createParagraph;
