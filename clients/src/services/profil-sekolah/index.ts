import { httpClient } from "../services.config";

export const profilSekolahService = {
  getProfilSekolah: () => httpClient.get("/profil-sekolah?populate=*"),
  getVideoProfilSekolah: () =>
    httpClient.get("/video-profil-sekolah?populate=*"),
};
