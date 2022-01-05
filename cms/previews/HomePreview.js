import React, { useState } from "react";
import "tailwindcss/tailwind.css";
// import colors from "tailwindcss/colors";
import markdownToHtml from "../../pages/api/markdownToHtml";

import { PageTitle } from "../../components/HeadingComponents";
import { MainImage } from "../../components/ImageComponents";
import { CenterContainer } from "../../components/ContainerComponents";

import createComponentsFromMd from "../../pages/api/createComponentsFromMd";

const HomePreview = (props) => {
  const { entry } = props;
  const title = entry.getIn(["data", "pageTitle"]);
  const pageBody = entry.getIn(["data", "pageBody"]);
  const mainImage = entry.getIn(["data", "mainImage"]);

  // State
  const [loaded, setLoaded] = useState(false);
  const [body, setBody] = useState("");
  const [currHtml, setCurrHtml] = useState(removeFragments(pageBody));

  const bodyNoFragments = removeFragments(pageBody);

  if (loaded && currHtml !== bodyNoFragments) {
    setCurrHtml(bodyNoFragments);

    (async function () {
      const html = await markdownToHtml(pageBody);
      const newMarkup = createMarkup(html);
      setBody(newMarkup);
    })();
  }

  /**
   * For initial loading.
   */
  if (!loaded) {
    (async function () {
      const html = await markdownToHtml(pageBody);
      resolveMarkdown(html, loaded, setBody, setLoaded);
    })();
  }

  const image = {
    src: mainImage,
    alt: "Main Image",
  };

  const components = createComponentsFromMd(body.__html);

  return (
    <div>
      <MainImage image={image} />
      <CenterContainer>
        <PageTitle>{title}</PageTitle>
        {loaded && <div>{components.map((comp) => comp)}</div>}
      </CenterContainer>
      {/* {loaded && <div dangerouslySetInnerHTML={body}></div>} */}
    </div>
  );
};

function removeFragments(str) {
  let temp = str;
  const end = "<!--EndFragment-->";
  const start = "<!--StartFragment-->";

  temp = temp.replace(end, "");
  temp = temp.replace(start, "");

  temp = temp.replace(/\s/g, "");

  return temp;
}

async function resolveMarkdown(html, loaded, setBody, setLoaded) {
  const value = await Promise.resolve(html);
  const newMarkup = createMarkup(value);

  if (!loaded) {
    // Order matters here.
    setBody(newMarkup);
    setLoaded(true);
  }
}

function createMarkup(html) {
  return { __html: html };
}

export default HomePreview;
