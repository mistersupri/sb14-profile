import BerandaPage from "@/pages/beranda";
import TentangSekolahPage from "@/pages/tentang-sekolah";
import PengumumanPage from "@/pages/pengumuman";
import GaleriPage from "@/pages/galeri";
import UnduhanPage from "@/pages/unduhan";
import PortalPage from "@/pages/portal";
import FAQPage from "@/pages/faq";
import KotakSaranPage from "@/pages/kotak-saran";
import DetailPengumumanPage from "@/pages/pengumuman/detail";

const routers = [
  {
    path: "/",
    element: <BerandaPage />,
  },
  {
    path: "/tentang-sekolah",
    element: <TentangSekolahPage />,
  },
  {
    path: "/pengumuman",
    element: <PengumumanPage />,
  },
  {
    path: "/pengumuman/:id/:date/:title",
    element: <DetailPengumumanPage />,
  },
  {
    path: "/galeri",
    element: <GaleriPage />,
  },
  {
    path: "/unduhan",
    element: <UnduhanPage />,
  },
  {
    path: "/portal",
    element: <PortalPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/kotak-saran",
    element: <KotakSaranPage />,
  },
];

export default routers;
