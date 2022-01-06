// import createChildComponent from "./createChildComponent";
import createComponentsFromChildren from "./createComponentsFromChildren";
import createComponents from "./helpers/createComponents";

// import setSkip from "./setSkip";

function createComponentsFromMd(htmlString) {
  try {
    // Creates an html document from the markdown string.
    const doc = new DOMParser().parseFromString(htmlString, "text/html");

    // Selects the body's children
    const children = Array.from(doc.children[0].children[1].children);
    // const components = createComponentsFromChildren(children);
    const components = createComponents(children);

    // return [];
    return components;
  } catch {
    return [];
  }
}

export default createComponentsFromMd;
