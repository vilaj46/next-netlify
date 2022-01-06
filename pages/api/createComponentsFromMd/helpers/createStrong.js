// Utilities
import randomKey from "../../../../utilities/randomKey";
import components from "../../../../utilities/components";

// Creators
import createAnchor from "./createAnchor";

function createStrong(child) {
  const Component = components.strong;
  const componentsForChild = loopNestedElements(child);
  return <Component>{componentsForChild}</Component>;
}

function loopNestedElements(child) {
  const childNodes = Array.from(child.childNodes);
  const newChildren = childNodes.map((node) => {
    const { nodeName } = node;
    switch (nodeName) {
      case "A":
        return createAnchor(node);
      default:
        return "ERROR in creating strong";
    }
  });
  return newChildren;
}

export default createStrong;
