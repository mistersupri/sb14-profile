import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="py-16 px-32 xl:max-w-380 m-auto grid grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <p>SDN Sumur Batu 14</p>
          <div className="flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              className="cursor-pointer hover:bg-white hover:text-black rounded-xl p-2 transition-all"
            >
              <Instagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="cursor-pointer hover:bg-white hover:text-black rounded-xl p-2 transition-all"
            >
              <Youtube />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
            <div className="min-w-14 flex justify-center">
              <MapPin className="w-12" />
            </div>
            <p>
              Jl. Nilam Raya No.6, RT.2/RW.2, Sumur Batu, Kec. Kemayoran, Kota
              Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640
            </p>
          </div>
          <div className="flex gap-1">
            <div className="min-w-14 flex justify-center">
              <Mail className="w-12" />
            </div>
            <a
              href="mailto:sb14pagi.jakpus@gmail.com"
              className="border-b border-b-transparent hover:border-b-white cursor-pointer"
            >
              sb14pagi.jakpus@gmail.com
            </a>
          </div>
          <div className="flex gap-1">
            <div className="min-w-14 flex justify-center">
              <Phone className="w-12" />
            </div>
            <a
              href="https://wa.me/6285156116391"
              target="_blank"
              className="border-b border-b-transparent hover:border-b-white cursor-pointer"
            >
              +6285156116391
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Lokasi Sekolah</p>
          <iframe
            className="w-full h-54 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.768653036208!2d106.8661063747825!3d-6.1617305603888575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f507e57e2caf%3A0x265f88c68551c004!2sSekolah%20Dasar%20Negeri%20Sumur%20Batu%2014%20Pagi!5e0!3m2!1sid!2sid!4v1759799167316!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
