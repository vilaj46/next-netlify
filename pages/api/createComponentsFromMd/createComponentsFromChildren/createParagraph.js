// Helper Functions
import createComponentsFromChildren from ".";

// Utilities
import randomKey from "../../../../utilities/randomKey";
import components from "../../../../utilities/components";

function createParagraph(child) {
  const Component = components.p;

  const childNodes = Array.from(child.childNodes);

  const children = childNodes.map((child) => {
    return createComponentsFromChildren(child);
  });

  return <Component key={randomKey()}>{children}</Component>;
}

export default createParagraph;
