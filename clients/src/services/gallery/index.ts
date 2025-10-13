import { httpClient } from "../services.config";

export const galleryService = {
  getGalleryList: async (params?: { label?: string | null }) => {
    const filterLabel = params?.label
      ? `&filters[label_gallery][nama][$eq]=${params?.label}`
      : "";
    return await httpClient
      .get(`/galleries?populate=*${filterLabel}`)
      .then(({ data }) => data);
  },
  getGalleryWithLabel: (value: string) =>
    httpClient
      .get(`/galleries?filters[label_gallery][nama][$eq]=${value}}&populate=*`)
      .then(({ data }) => data),
  getLabelGalleryList: () =>
    httpClient.get("/label-galleries?populate=*").then(({ data }) => data),
};
