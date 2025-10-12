import { httpClient } from "../services.config";

export const beritaService = {
  getBeritaList: () => httpClient.get("/beritas?populate=*"),
  getBeritaBerandaList: () =>
    httpClient.get("/berita-beranda?populate[beritas]=*"),
  getBeritaPrestasi: () =>
    httpClient.get(
      "/beritas?filters[label_berita][nama][$eq]=PRESTASI&populate=*"
    ),
  getBeritaWithLabel: (value: string) =>
    httpClient.get(
      `/beritas?filters[label_berita][nama][$eq]=${value}}&populate=*`
    ),
  getBeritaWithKeyword: (value: string) =>
    httpClient.get(`/beritas?filters[title][$contains]=${value}}&populate=*`),
};
