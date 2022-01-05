import fs from "fs";
import matter from "gray-matter";

import { PAGES_DIRECTORY } from "../apiHelpers/directories";
// const pagesDirectory = join(process.cwd(), "/content/pages");
// const postsDirectory = join(process.cwd(), "/content/pages/posts\\[id]");

import join from "../apiHelpers/join";

/**
 * Helper function which reads a local directory
 * and filters out the md files.
 * @param {String} directory
 * @returns Array of markdown files.
 */
export function getMarkdownFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);
  const markdownFiles = files.filter((file) => {
    return file.indexOf(".md") === file.length - 3;
  });
  return markdownFiles;
}

/**
 * Formats markdown file name then reads and makes into json.
 * @param {String} slug - File name / slug.
 * @param {String} directory Folder name .
 * @returns
 */
export function getMarkdownBySlug(slug, directory) {
  const realSlug = slug.replace(/\.md$/, "");

  try {
    const fullPath = join(PAGES_DIRECTORY, `/${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data;
  } catch {
    // File does not exist.
  }
}

/**
 * Retrives posts, formats them in date order.
 * @returns
 */
// export function getAllPosts() {
//   const markdownFiles = getMarkdownFilesInDirectory(postsDirectory);

//   const posts = markdownFiles.map((slug) => {
//     return getMarkdownBySlug(slug, postsDirectory);
//   });

//   const sortedDates = posts.sort((a, b) => {
//     return b.date_published - a.date_published;
//   });

//   const dateToStringPosts = sortedDates.map((post) => {
//     const { date_published } = post;
//     return {
//       ...post,
//       date_published: `${date_published}`,
//     };
//   });

//   return dateToStringPosts;
// }

// export function getAllPages() {
//   const markdownFiles = getMarkdownFilesInDirectory(pagesDirectory);
//   const pages = markdownFiles.map((slug) => {
//     return getMarkdownBySlug(slug, pagesDirectory);
//   });
//   return pages;
// }
