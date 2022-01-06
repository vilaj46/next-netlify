// Helper Functions
import createComponentsFromChildren from ".";

// Utilities
import components from "../../../../utilities/components";

function createHeader(child, tag) {
  const Component = components[tag];

  const childNodes = Array.from(child.childNodes);

  const children = childNodes.map((child) => {
    return createComponentsFromChildren(child);
  });

  return <Component>{children}</Component>;
}

export default createHeader;
