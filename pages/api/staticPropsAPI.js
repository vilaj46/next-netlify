import { getMarkdownBySlug } from "./getAPI";
import markdownToHtml from "./markdownToHtml";

import { PAGES_DIRECTORY } from "../apiHelpers/directories";

import { getMarkdownFilesInDirectory } from "./getAPI";

/**
 * Depending on page or post we use the parameters
 * to obtain the markdown data.
 * @param {Object} context
 * @param {String} type
 * @returns Object with needed data.
 */
export async function getMarkdownData(context, type) {
  try {
    let identifier;
    if (context.params) {
      identifier = context.params.pages;
    } else {
      identifier = "home";
    }

    const markdown = getMarkdownBySlug(identifier, "pagesDirectory");
    const { pageBody } = markdown;
    const data = await markdownToHtml(pageBody);

    return {
      props: {
        ...markdown,
        data,
        loadingError: false,
      },
    };
  } catch (e) {
    return {
      props: {
        loadingError: true,
      },
    };
  }
}

export function getDefaultStaticPaths() {
  try {
    return {
      paths: [],
      fallback: true,
    };
  } catch {
    return {};
  }
}

export function getAll(collection) {
  if (collection === "pages") {
    const markdownFiles = getMarkdownFilesInDirectory(PAGES_DIRECTORY);
    const pages = markdownFiles.map((slug) => {
      return getMarkdownBySlug(slug, PAGES_DIRECTORY);
    });
    return pages;
  } else {
    return [];
  }
}
