function CreatedPages(props) {
  return <>Created Pages</>;
}

export const getStaticProps = async (context) => {
  return {};
};

export async function getStaticPaths() {
  return getDefaultStaticPaths();
}

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

export default CreatedPages;
