import { httpClient } from "../services.config";

export const fasilitasSekolahService = {
  getFasilitasSekolah: () =>
    httpClient.get("/fasilitas-sekolahs?populate=*").then(({ data }) => data),
};
