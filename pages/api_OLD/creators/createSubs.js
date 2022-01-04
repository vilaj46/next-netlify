import createPoundText from "./createPoundText";
import createStrong from "./createStrong";
import createAnchor from "./createAnchor";

function createSubs(htmlElement, parent) {
  const { nodeName } = htmlElement;

  if (nodeName === "#text") {
    const { nodeValue } = htmlElement;
    return <p>{nodeValue}</p>;
    // return createPoundText(htmlElement);
    // } else if (nodeName === "STRONG") {
    //   return createStrong(htmlElement);
    // } else if (nodeName === "A") {
    //   return createAnchor(htmlElement);
  } else {
    return <p>Filler from the createSubs</p>;
  }
}

export default createSubs;
