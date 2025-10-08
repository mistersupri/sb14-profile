export default () => ({
  "record-locking": {
    enabled: true,
    config: {
      transports: ["websocket"],
    },
  },
  "strapi-csv-import-export": {
    config: {
      authorizedExports: ["api::berita.berita"],
      authorizedImports: ["api::berita.berita"],
    },
  },
});
