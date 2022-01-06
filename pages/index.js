import "tailwindcss/tailwind.css";

// Helper functions
import { getMarkdownData } from "./api/staticPropsAPI";
import createComponentsFromMd from "./api/createComponentsFromMd/index";

// Utilities
import randomKey from "../utilities/randomKey";

// Components
import MainImage from "../components/Shared/Images/MainImage";
import PageTitle from "../components/Shared/Headings/PageTitle";
import CenterContainer from "../components/Shared/Containers/CenterContainer";

const HomePage = (props) => {
  const { data, pageTitle, mainImage } = props;
  const components = createComponentsFromMd(data);
  return (
    <>
      {mainImage !== undefined && <MainImage mainImage={mainImage} />}
      <CenterContainer>
        <PageTitle>{pageTitle}</PageTitle>
        {components.map((comp) => {
          // return <HigherOrder Component={() => comp} />;
          return comp;
        })}
      </CenterContainer>
    </>
  );
};

function HigherOrder({ Component }) {
  return <Component key={randomKey()} />;
}

export const getStaticProps = async (context) => {
  const data = await getMarkdownData(context, "pages");
  return {
    ...data,
  };
};

export default HomePage;
