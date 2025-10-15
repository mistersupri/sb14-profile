import { httpClient } from "../services.config";

export const galleryService = {
  getGalleryList: async (params?: {
    label?: string | null;
    page?: string | null;
  }) => {
    const filterLabel = params?.label
      ? `&filters[label_gallery][nama][$eq]=${params?.label}`
      : "";
    return await httpClient
      .get(
        `/galleries?populate=*&pagination[pageSize]=2&pagination[page]=${
          params?.page || 1
        }${filterLabel}`
      )
      .then(({ data }) => data);
  },
  getLabelGalleryList: () =>
    httpClient.get("/label-galleries?populate=*").then(({ data }) => data),
};
