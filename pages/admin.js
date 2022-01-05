import dynamic from "next/dynamic";
import config from "../cms/config";

import EditorTemplate from "../components/admin/EditorTemplate";

import HomePreview from "../cms/previews/HomePreview";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.registerPreviewStyle(
        "https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
      );
      cms.registerEditorComponent(EditorTemplate);
      cms.registerPreviewTemplate("pages", HomePreview);
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return (
    <div>
      <CMS />;
    </div>
  );
};
export default AdminPage;
