// Helper Functions
import createComponentsFromChildren from ".";
import randomKey from "../../../../utilities/randomKey";

// Utilities
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

  const childNodes = Array.from(child.childNodes);

  const children = childNodes.map((child) => {
    return createComponentsFromChildren(child);
  });

  return (
    <Component key={randomKey()} href={href}>
      {children}
    </Component>
  );
}

function isDomestic(href) {
  if (href.includes("http")) {
    return false;
  } else {
    return true;
  }
}

export default createAnchor;
