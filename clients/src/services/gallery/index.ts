import { httpClient } from "../services.config";

export const galleryService = {
  getGalleryList: () => httpClient.get("/galleries?populate=*"),
  getGalleryWithLabel: (value: string) =>
    httpClient.get(
      `/galleries?filters[label_gallery][nama][$eq]=${value}}&populate=*`
    ),
};
