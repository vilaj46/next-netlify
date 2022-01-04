import createSubs from "./createSubs";
import randomKey from "../randomKey";

function createAnchor(htmlElement) {
  const childNodes = Array.from(htmlElement.childNodes);

  const components = childNodes.map((element) => {
    const component = createSubs(element);
    return component;
  });

  return (
    <a href="#" key={randomKey()}>
      {components.map((component) => component)}
    </a>
  );
}

export default createAnchor;
