import getMarkdownData from "./api/getters/getMarkdownData";
import getDefaultStaticPaths from "./api/getters/getDefaultStaticPaths";

function CreatedPages(props) {
  const { pageBody, pageTitle } = props;
  // console.log(props);
  return (
    <>
      <h1>{pageTitle}</h1>
      <p>{pageBody}</p>
    </>
  );
}

export const getStaticProps = async (context) => {
  const pageData = await getMarkdownData(context, "page");
  return pageData;
};

export async function getStaticPaths() {
  return getDefaultStaticPaths();
}

export default CreatedPages;
