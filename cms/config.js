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
      folder: "content/pages",
      create: true,
      slug: "{{fields.slug}}",
      fields: [
        {
          label: "Main Image",
          name: "mainImage",
          widget: "image",
        },
        {
          label: "Page Title",
          name: "pageTitle",
          widget: "string",
        },
        {
          label: "Page Body",
          name: "pageBody",
          widget: "markdown",
        },
        {
          label: "Slug",
          name: "slug",
          required: true,
          widget: "string",
          pattern: [
            "^[a-z0-9]+(?:-[a-z0-9]+)*$",
            "A slug can have no spaces or special characters",
          ],
          hint: ">- The post URL (do not include folder or file extension)",
        },
      ],
    },
  ],
};
