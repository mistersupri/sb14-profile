import { beritaService } from "./berita";
import { faqService } from "./faq";
import { fasilitasSekolahService } from "./fasilitas-sekolah";
import { galleryService } from "./gallery";
import { kepalaSekolahService } from "./kepala-sekolah";
import { portalService } from "./portal";
import { profilSekolahService } from "./profil-sekolah";
import { tenagaSekolahService } from "./tenaga-sekolah";
import { unduhanService } from "./unduhan";

export const Services = {
  ...beritaService,
  ...faqService,
  ...fasilitasSekolahService,
  ...galleryService,
  ...kepalaSekolahService,
  ...portalService,
  ...profilSekolahService,
  ...tenagaSekolahService,
  ...unduhanService,
};
