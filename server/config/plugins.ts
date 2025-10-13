export default () => ({
  "record-locking": {
    enabled: true,
    config: {
      transports: ["websocket"],
    },
  },
  "strapi-csv-import-export": {
    config: {
      authorizedExports: [
        "api::berita.berita",
        "api::tenaga-sekolah.tenaga-sekolah",
      ],
      authorizedImports: [
        "api::berita.berita",
        "api::tenaga-sekolah.tenaga-sekolah",
      ],
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
