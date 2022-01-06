// Utilities
import components from "../../../../utilities/components";

function createHeader(child, tag) {
  const Component = components[tag];

  const componentsForChild = loopNestedElements(child);

  return <Component>{componentsForChild}</Component>;
}

function loopNestedElements(child) {
  const childNodes = Array.from(child.childNodes);
  const newChildren = childNodes.map((node) => {
    const { nodeName, nodeValue } = node;
    switch (nodeName) {
      case "#text":
        return nodeValue;
      default:
        return `ERROR in creating ${child.nodeName}`;
    }
  });
  return newChildren;
}

export default createHeader;
