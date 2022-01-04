function findDataBySlug(slug, mds) {
  for (let i = 0; i < mds.length; i++) {
    const md = mds[i];
    const { page_url } = md;
    if (page_url === slug) {
      return md;
    }
  }

  return {};
}

export default findDataBySlug;
