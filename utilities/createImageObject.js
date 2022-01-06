/**
 * @param {String} src - location of the image.
 * @returns Object with src and alt.
 *
 * Since we already have the src, we just have to get the
 * alt.
 */
function createImageObject(src) {
  const alt = getAlt(src);
  return {
    src,
    alt,
  };
}

/**
 * @param {String} src - location of the image.
 * @returns String with each word uppercased.
 *
 * Removes text we do not want in the name
 * and returns an uppercase version of it.
 */
function getAlt(src) {
  // Example format:
  // img/union-gables-inn_exterior_01.jpg
  let temp = src;
  const regex = /-/gi;
  const regex2 = /_/gi;
  const numbers = /\d/gi;

  temp = temp.replace("img/", "");
  temp = temp.replace(regex, " ");
  temp = temp.replace(regex2, " ");
  temp = temp.replace(numbers, "");
  temp = temp.replace(".jpg", "");

  // Split the word by spaces and uppercase each word.
  const split = temp.split(" ");
  const uppercase = split.map((word) => {
    if (word.length !== 0) {
      const newWord = word[0].toUpperCase() + word.slice(1, word.length);
      return newWord;
    }
  });

  // Filter the words because we were getting undefined
  // after removing the .jpg.
  const filtered = uppercase.filter((word) => {
    if (word !== undefined || word !== "") {
      return word;
    }
  });

  return filtered.join(" ");
}

export default createImageObject;
