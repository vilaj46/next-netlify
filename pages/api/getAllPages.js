import fs from "fs";
import matter from "gray-matter";

const pagesDirectory = join(process.cwd(), "/content/pages");

console.log(process.cwd());

function getMarkdownFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);
  const markdownFiles = files.filter((file) => {
    return file.indexOf(".md") === file.length - 3;
  });
  return markdownFiles;
}

function join(first, second) {
  return first + second;
}

function getAllPages() {
  const markdownFiles = getMarkdownFilesInDirectory(pagesDirectory);

  const pages = markdownFiles.map((slug) => {
    return getMarkdownBySlug(slug, pagesDirectory);
  });

  return pages;
}

/**
 * Formats markdown file name then reads and makes into json.
 * @param {String} slug - File name / slug.
 * @param {String} directory Folder name .
 * @returns
 */
export function getMarkdownBySlug(slug, directory) {
  const realSlug = slug.replace(/\.md$/, "");

  if (directory === "pagesDirectory") {
    directory = pagesDirectory;
  } else {
    //   directory = postsDirectory;
  }

  const fullPath = join(directory, `/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return data;
}

export default getAllPages;
