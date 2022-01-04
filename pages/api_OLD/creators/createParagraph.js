import Paragraph from "../../../components/Shared/Paragraph";

import createSubs from "./createSubs";

function createParagraph(htmlElement) {
  const children = Array.from(htmlElement.childNodes);
  const components = children.map((element) => {
    const component = createSubs(element);
    return component;
  });

  return <Paragraph>{components.map((component) => component)}</Paragraph>;
}

export default createParagraph;
