import "tailwindcss/tailwind.css";

import { getMarkdownData } from "./api/staticPropsAPI";

import { getAll } from "./api/staticPropsAPI";

// https://jakeprins.com/blog/how-to-implement-netlify-cms-with-next-js
// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/index.js

const HomePage = ({ pages }) => {
  return (
    <>
      <h1>Main Page</h1>
      {/* <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.post_title}</a>
              </Link>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export const getStaticProps = async (context) => {
  const pages = getAll("pages");
  const data = await getMarkdownData(context, "pages");
  return {
    props: {
      pages,
      data,
    },
  };
};

export default HomePage;
