import { httpClient } from "../services.config";

export const beritaService = {
  getBeritaList: () =>
    httpClient.get("/beritas?populate=*").then(({ data }) => data),
  getBeritaBerandaList: () =>
    httpClient
      .get("/beritas?filters[prioritas][$eq]=true&populate=*")
      .then(({ data }) => data),
  getBeritaPrestasi: () =>
    httpClient
      .get("/beritas?filters[label_berita][nama][$eq]=PRESTASI&populate=*")
      .then(({ data }) => data),
  getBeritaWithLabel: (value: string) =>
    httpClient
      .get(`/beritas?filters[label_berita][nama][$eq]=${value}}&populate=*`)
      .then(({ data }) => data),
  getBeritaWithKeyword: (value: string) =>
    httpClient
      .get(`/beritas?filters[title][$contains]=${value}}&populate=*`)
      .then(({ data }) => data),
};
