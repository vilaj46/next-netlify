import createSubs from "./createSubs";

function createStrong(htmlElement) {
  const childNodes = Array.from(htmlElement.childNodes);
  const components = childNodes.map((element) => {
    const component = createSubs(element);

    return component;
  });

  return <strong>{components.map((component) => component)}</strong>;
}

export default createStrong;
