import { httpClient } from "../services.config";

export const tenagaSekolahService = {
  getTenagaSekolahList: () =>
    httpClient.get("/tenaga-sekolahs?populate=*").then(({ data }) => data),
  getTenagaSekolah: async (params?: { name?: string }) => {
    const filter = `&filters[nama][$eq]=${params?.name}`;
    return await httpClient
      .get(`/tenaga-sekolahs?populate=*${filter}`)
      .then(({ data }) => data);
  },
};
