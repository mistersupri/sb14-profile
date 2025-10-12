import { httpClient } from "../services.config";

export const profilSekolahService = {
  getProfilSekolah: () =>
    httpClient.get("/profil-sekolah?populate=*").then(({ data }) => data),
  getVideoProfilSekolah: () =>
    httpClient.get("/video-profil-sekolah?populate=*").then(({ data }) => data),
};
