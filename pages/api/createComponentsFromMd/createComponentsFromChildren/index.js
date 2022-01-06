import createComponent from "./createComponent";

function createComponentsFromChildren(children) {
  try {
    const components = children.map((child) => {
      const component = createComponent(child);
      return component;
    });

    return components;
  } catch (err) {
    // Children of children or #text.
    const { nodeValue } = children;

    if (nodeValue) {
      // #text
      return nodeValue;
    } else {
      const secondaryChildren = Array.from(children.childNodes);
      const components = secondaryChildren.map((child) => {
        const { parentElement } = child;
        const { nodeName } = parentElement;
        const component = createComponent(child, nodeName);
        return component;
      });
      return components;
    }
  }
}

export default createComponentsFromChildren;
