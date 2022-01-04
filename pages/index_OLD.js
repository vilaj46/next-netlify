import React, { useState } from "react";
// import getMarkdownData from "./api/getters/getMarkdownData";
import getAllPages from "./api_OLD/getters/getAllPages";
import markdownToComponents from "./api_OLD/markdown/markdownToComponents";
import getMarkdownBySlug from "./api_OLD/getters/getMarkdownBySlug";

import { PAGES_DIRECTORY } from "./api_OLD/directories";

import loadingAPI from "./api_OLD/loadingAPI";

/**
 * Change information in the Header
 *
 * Errors on the admin panel.
 */
export default function Home(props) {
  const [loaded, setLoaded] = useState(false);
  const [components, setComponents] = useState([]);
  const { pageTitle, pageBody, data } = props;
  const requestComponents = markdownToComponents(data);

  if (loaded === false) {
    Promise.resolve(requestComponents).then((value) => {
      console.log(value);
      setComponents(value);
      setLoaded(true);
    });
  }

  if (loaded) {
    console.log(components);
    return (
      <div>
        <p className="text-xs">{pageTitle}</p>
        <div>
          {components.map((component) => {
            return component;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="text-xs">{pageTitle}</p>
      </div>
    );
  }
}

export async function getStaticProps(context) {
  // Not sure why we are running this.
  // We are getting an fs error otherwise.
  const pages = getAllPages();
  const homePage = await getMarkdownBySlug("home.md", PAGES_DIRECTORY, true);

  return {
    props: {
      ...homePage,
    }, // will be passed to the page component as props
  };
}
