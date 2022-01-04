import fs from "fs";

function getMarkdownFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);
  const markdownFiles = files.filter((file) => {
    return file.indexOf(".md") === file.length - 3;
  });
  return markdownFiles;
}

export default getMarkdownFilesInDirectory;
