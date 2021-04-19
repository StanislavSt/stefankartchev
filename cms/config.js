export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "StanislavSt/stefankartchev",
    branch: "master",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      create: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Price", name: "price", widget: "string" },
        { label: "Date", name: "date", widget: "datetime" },
        {
          label: "Image Ratio",
          name: "ratio",
          widget: "select",
          options: ["long", "wide"],
          default: ["long"],
        },
      ],
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/pages/home.md",
          fields: [
            {
              label: "Hero Title",
              name: "hero_title",
              widget: "string",
            },
            {
              label: "Hero Description",
              name: "hero_description",
              widget: "markdown",
            },
            {
              label: "Hero Image",
              name: "hero_image",
              widget: "image",
            },
          ],
        },
      ],
    },
  ],
};
