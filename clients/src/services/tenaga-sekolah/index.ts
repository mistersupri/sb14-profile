import { httpClient } from "../services.config";

export const tenagaSekolahService = {
  getTenagaSekolahList: () =>
    httpClient.get("/tenaga-sekolahs?populate=*").then(({ data }) => data),
};
