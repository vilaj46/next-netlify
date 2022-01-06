/**
 * @returns Number
 *
 * Randomizes and rounds a number out of a billion.
 */
function randomKey() {
  return Math.floor(Math.random() * 1000000000);
}

export default randomKey;
