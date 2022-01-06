// Utilities
import randomKey from "../../../../utilities/randomKey";
import components from "../../../../utilities/components";

function createAnchor(child) {
  let Component;

  // Determine which link.
  const { href } = child;
  if (isDomestic(href)) {
    Component = components.link;
  } else {
    Component = components.a;
  }

  const componentsForChild = loopNestedElements(child);

  return (
    <Component key={randomKey()} href={href}>
      {componentsForChild}
    </Component>
  );
}

function loopNestedElements(child) {
  const childNodes = Array.from(child.childNodes);
  const newChildren = childNodes.map((node) => {
    const { nodeName, nodeValue } = node;
    switch (nodeName) {
      case "#text":
        return nodeValue;
      default:
        return "ERROR in creating anchor";
    }
  });
  return newChildren;
}

function isDomestic(href) {
  if (href.includes("http")) {
    return false;
  } else {
    return true;
  }
}

export default createAnchor;
