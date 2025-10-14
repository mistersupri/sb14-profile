import { httpClient } from "../services.config";

export const beritaService = {
  getBeritaList: async (params?: {
    label?: string | null;
    keyword?: string | null;
    page: string | null;
  }) => {
    const filterLabel = params?.label
      ? `&filters[label_berita][nama][$eq]=${params?.label}`
      : "";
    const filterKeyword = params?.keyword
      ? `&filters[judul][$contains]=${params?.keyword}`
      : "";
    return await httpClient
      .get(
        `/beritas?populate=*&pagination[pageSize]=10&pagination[page]=${
          params?.page || 1
        }${filterLabel}${filterKeyword}`
      )
      .then(({ data }) => data);
  },
  getBeritaTerbaruList: () =>
    httpClient
      .get(
        "/beritas?filters&populate=*&pagination[pageSize]=5&sort[0]=tanggal_dibuat"
      )
      .then(({ data }) => data),
  getBerita: (id: string) =>
    httpClient.get(`/beritas/${id}?populate=*`).then(({ data }) => data),
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
