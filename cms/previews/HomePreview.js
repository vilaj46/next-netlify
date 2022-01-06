import React, { useState } from "react";

// Helper functions
import markdownToHtml from "../../pages/api/markdownToHtml";
import createComponentsFromMd from "../../pages/api/createComponentsFromMd";

// Components
import MainImage from "../../components/Shared/Images/MainImage";
import PageTitle from "../../components/Shared/Headings/PageTitle";
import CenterContainer from "../../components/Shared/Containers/CenterContainer";

const HomePreview = (props) => {
  const { entry } = props;
  const title = entry.getIn(["data", "pageTitle"]);
  const pageBody = entry.getIn(["data", "pageBody"]);
  const mainImage = entry.getIn(["data", "mainImage"]);

  // State
  const [body, setBody] = useState("");
  const [loaded, setLoaded] = useState(false);
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

  const components = createComponentsFromMd(body.__html);

  return (
    <div>
      {mainImage !== undefined && <MainImage mainImage={mainImage} />}
      <CenterContainer>
        <PageTitle>{title}</PageTitle>
        {loaded && <div>{components.map((comp) => comp)}</div>}
      </CenterContainer>
      {/* {loaded && <div dangerouslySetInnerHTML={body}></div>} */}
    </div>
  );
};

function removeFragments(str) {
  if (str !== undefined) {
    let temp = str;
    const end = "<!--EndFragment-->";
    const start = "<!--StartFragment-->";

    temp = temp.replace(end, "");
    temp = temp.replace(start, "");

    temp = temp.replace(/\s/g, "");

    return temp;
  } else {
    return "";
  }
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
