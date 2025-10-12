import { httpClient } from "../services.config";

export const kepalaSekolahService = {
  getKepalaSekolah: () =>
    httpClient.get("/kepala-sekolah?populate=*").then(({ data }) => data),
};
