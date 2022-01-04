import getMarkdownBySlug from "./getMarkdownBySlug";
import getMarkdownFilesInDirectory from "./getMarkdownFilesInDirectory";

import { PAGES_DIRECTORY } from "../directories";

function getAllPages() {
  const markdownFiles = getMarkdownFilesInDirectory(PAGES_DIRECTORY);

  const pages = markdownFiles.map((slug) => {
    return getMarkdownBySlug(slug, PAGES_DIRECTORY);
  });

  return pages;
}

export default getAllPages;
