import dynamic from "next/dynamic";
import createParagraph from "../creators/createParagraph";

// function markdownToComponents(markdown) {
//   try {
// // Creates an html document from the markdown string.
// const doc = new DOMParser().parseFromString(markdown, "text/html");

// // Selects the body's children
// const children = Array.from(doc.children[0].children[1].children);

//     return children.map((element) => {
//       const { nodeName } = element;

//       return <p>FIller</p>;
//       // if (nodeName === "P") {
//       //   return createParagraph(element);
//       // } else {
//       //   return <p>Filler</p>;
//       // }
//     });

//     // const components = children.map((element) => {
//     //   const { nodeName } = element;

//     //   if (nodeName === "P") {
//     //     return createParagraph(element);
//     //   } else {
//     //     return <p>Filler</p>;
//     //   }
//     // });

//     // return components;
//   } catch (err) {
//     console.log(err);
//     // Not sure yet.
//     const dom = new jsdom.JSDOM(markdown);
//     return [<p>Loading...</p>];
//   }
// }

async function markdownToComponents() {
  try {
    // Creates an html document from the markdown string.
    const doc = new DOMParser().parseFromString(markdown, "text/html");

    // Selects the body's children
    const children = Array.from(doc.children[0].children[1].children);
    return [<p>Filler</p>];
  } catch (err) {
    // Not sure yet.
    return [<p>Loading1</p>];
  }
}

export default markdownToComponents;
