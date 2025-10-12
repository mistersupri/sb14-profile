import { beritaService } from "./berita";
import { fasilitasSekolahService } from "./fasilitas-sekolah";

export const Services = {
  ...beritaService,
  ...fasilitasSekolahService,
};
