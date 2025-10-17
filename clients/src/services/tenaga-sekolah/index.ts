import { httpClient } from "../services.config";

export const tenagaSekolahService = {
  getTenagaSekolahList: () =>
    httpClient
      .get("/tenaga-sekolahs?populate=*&pagination[pageSize]=30")
      .then(({ data }) => data),
  getTenagaSekolah: async (params: { id: string }) =>
    httpClient
      .get(`/tenaga-sekolahs/${params.id}?populate=*`)
      .then(({ data }) => data),
};
