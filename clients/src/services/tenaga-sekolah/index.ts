import { httpClient } from "../services.config";

export const tenagaSekolahService = {
  getTenagaSekolahList: () =>
    httpClient.get("/tenaga-sekolahs?populate=*").then(({ data }) => data),
  getTenagaSekolah: async (params: { id: string }) =>
    httpClient.get(`/tenaga-sekolahs/${params.id}`).then(({ data }) => data),
};
