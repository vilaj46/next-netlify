import getAllPages from "./api/getAllPages";
import findDataBySlug from "./api/findDataBySlug";

/**
 * Change information in the Header
 *
 * Errors on the admin panel.
 */
export default function Home(props) {
  console.log(props);
  return (
    <div>
      <p className="text-xs">Hey</p>
      <p className="text-xl">Hey</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = getAllPages();
  const homePage = findDataBySlug("home", pages);

  return {
    props: {
      ...homePage,
    }, // will be passed to the page component as props
  };
}
