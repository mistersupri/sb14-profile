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
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 10000000, // 10MB
        localServer: {
          maxage: 300000,
        },
        path: "./public/uploads",
      },
    },
  },
});
