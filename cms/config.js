export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "vilaj46/next-netlify",
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      label_singular: "Page",
      description: "Regular pages.",
      create: true,
      folder: "pages",
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/pages/home.md",
          fields: [
            {
              label: "Page Title",
              name: "page_title",
              widget: "string",
            },
            {
              label: "Page Url",
              name: "page_url",
              widget: "string",
            },
            {
              label: "Page Description",
              name: "page_description",
              widget: "markdown",
            },
          ],
        },
      ],
    },
  ],
};
