import { httpClient } from "../services.config";

export const beritaService = {
  getBeritaList: async (params?: {
    label?: string | null;
    keyword?: string | null;
  }) => {
    const filterLabel = params?.label
      ? `&filters[label_berita][nama][$eq]=${params?.label}`
      : "";
    const filterKeyword = params?.keyword
      ? `&filters[judul][$contains]=${params?.keyword}`
      : "";
    return await httpClient
      .get(`/beritas?populate=*${filterLabel}${filterKeyword}`)
      .then(({ data }) => data);
  },
  getBeritaBerandaList: () =>
    httpClient
      .get("/beritas?filters[prioritas][$eq]=true&populate=*")
      .then(({ data }) => data),
  getBeritaPrestasi: () =>
    httpClient
      .get("/beritas?filters[label_berita][nama][$eq]=PRESTASI&populate=*")
      .then(({ data }) => data),
  getLabelBeritaList: () =>
    httpClient.get("/label-beritas?populate=*").then(({ data }) => data),
};
