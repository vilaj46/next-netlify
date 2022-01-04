import getMarkdownBySlug from "./getMarkdownBySlug";
import markdownToHtml from "../markdownToHtml";

import { PAGES_DIRECTORY } from "../directories";

/**
 * Depending on page or post we use the parameters
 * to obtain the markdown data.
 * @param {Object} context
 * @param {String} type
 * @returns Object with needed data.
 */
async function getMarkdownData(context, type) {
  let identifier;
  try {
    if (context.params === undefined) {
      // Home page
      identifier = "home";
    } else {
      identifier = context.params.pages;
    }

    const markdown = await getMarkdownBySlug(
      identifier,
      PAGES_DIRECTORY,
      false
    );
    const { pageBody } = markdown;
    const data = await markdownToHtml(pageBody);
    return {
      props: {
        ...markdown,
        data,
        loadingError: false,
      },
    };
  } catch {
    return {
      props: {
        loadingError: true,
      },
    };
  }
}

export default getMarkdownData;
