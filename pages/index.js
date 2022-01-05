import "tailwindcss/tailwind.css";

import { getMarkdownData } from "./api/staticPropsAPI";
import createComponentsFromMd from "./api/createComponentsFromMd";

import { PageTitle } from "../components/HeadingComponents";
import { MainImage } from "../components/ImageComponents";
import { CenterContainer } from "../components/ContainerComponents";

// https://jakeprins.com/blog/how-to-implement-netlify-cms-with-next-js
// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/index.js

const HomePage = (props) => {
  const { data, pageTitle, mainImage } = props;
  const components = createComponentsFromMd(data);

  const image = { src: mainImage, alt: "Main Image" };

  return (
    <>
      <MainImage image={image} />
      <CenterContainer>
        <PageTitle>{pageTitle}</PageTitle>
        {components.map((comp) => comp)}
      </CenterContainer>
    </>
  );
};

export const getStaticProps = async (context) => {
  const data = await getMarkdownData(context, "pages");
  return {
    ...data,
  };
};

export default HomePage;
