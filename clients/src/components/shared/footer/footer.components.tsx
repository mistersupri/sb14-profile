import { Services } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
  const { data: profilSekolahResData } = useQuery({
    queryKey: ["PROFIL_SEKOLAH"],
    queryFn: () => Services.getProfilSekolah(),
  });

  const profilSekolahData = profilSekolahResData?.data;

  if (!profilSekolahData) return;

  return (
    <div className="bg-black text-white">
      <div className="py-16 px-8 lg:px-32 xl:max-w-380 m-auto grid lg:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="min-w-12 flex justify-center">
              <img src="/logo.png" className="w-8" />
            </div>
            <p className="font-bold text-lg lg:text-xl">
              {profilSekolahData.nama}
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={profilSekolahData.instagram}
              target="_blank"
              className="cursor-pointer hover:bg-white hover:text-black rounded-xl p-2 transition-all"
            >
              <Instagram />
            </a>
            <a
              href={profilSekolahData.youtube}
              target="_blank"
              className="cursor-pointer hover:bg-white hover:text-black rounded-xl p-2 transition-all"
            >
              <Youtube />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
            <div className="min-w-8 flex justify-center">
              <MapPin className="w-8" />
            </div>
            <p>{profilSekolahData.lokasi}</p>
          </div>
          <div className="flex gap-1">
            <div className="min-w-8 flex justify-center">
              <Mail className="w-8" />
            </div>
            <a
              href={`mailto:${profilSekolahData.email}`}
              className="border-b border-b-transparent hover:border-b-white cursor-pointer"
            >
              {profilSekolahData.email}
            </a>
          </div>
          <div className="flex gap-1">
            <div className="min-w-8 flex justify-center">
              <Phone className="w-8" />
            </div>
            <a
              href={`https://wa.me/${profilSekolahData.telepon.replace(
                "+",
                ""
              )}`}
              target="_blank"
              className="border-b border-b-transparent hover:border-b-white cursor-pointer"
            >
              {profilSekolahData.telepon}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Lokasi Sekolah</p>
          <div
            className="[&_iframe]:w-full [&_iframe]:h-54 [&_iframe]:rounded-xl"
            dangerouslySetInnerHTML={{ __html: profilSekolahData.google_maps }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
