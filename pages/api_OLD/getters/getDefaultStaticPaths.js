/**
 * For the nextjs getStaticPaths function.
 * @returns
 */
function getDefaultStaticPaths() {
  try {
    return {
      paths: [],
      fallback: true,
    };
  } catch {
    return {};
  }
}

export default getDefaultStaticPaths;
