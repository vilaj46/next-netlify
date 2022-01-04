import fs from "fs";
import matter from "gray-matter";

import { PAGES_DIRECTORY } from "../directories";
import join from "../join";
import markdownToHtml from "../markdownToHtml";

async function getMarkdownBySlug(slug, directory, includeMarkdown = false) {
  try {
    const realSlug = slug.replace(/\.md$/, "");

    if (directory === "pagesDirectory") {
      directory = PAGES_DIRECTORY;
    } else {
      //   directory = postsDirectory;
    }

    const fullPath = join(directory, `/${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    if (includeMarkdown) {
      const { pageBody } = data;
      const markdown = await markdownToHtml(pageBody);
      return {
        ...data,
        data: markdown,
      };
    }

    return data;
  } catch {
    return {
      props: {
        loadingError: true,
      },
    };
  }
}

export default getMarkdownBySlug;
