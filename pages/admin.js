import dynamic from "next/dynamic";
import config from "../cms/config";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.registerPreviewStyle(
        "https://unpkg.com/tailwindcss@^3.0.9/dist/tailwind.min.css"
      );
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);
const AdminPage = () => {
  return <CMS />;
};
export default AdminPage;
