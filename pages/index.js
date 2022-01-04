import getAllPages from "./api/getAllPages";

/**
 * Change information in the Header
 *
 */
export default function Home() {
  return (
    <div>
      <p className="text-xs">Hey</p>
      <p className="text-xl">Hey</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = getAllPages();
  console.log(pages);
  return {
    props: {}, // will be passed to the page component as props
  };
}
