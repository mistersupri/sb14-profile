import { useLocation, useNavigate } from "react-router";
import { IMGJayaRaya } from "../../../assets";
import classNames from "classnames";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navList = [
    { label: "Beranda", url: "/" },
    { label: "Tentang Sekolah", url: "/tentang-sekolah" },
    { label: "Pengumuman", url: "/pengumuman" },
    { label: "Galeri", url: "/galeri" },
    { label: "Unduhan", url: "/unduhan" },
    { label: "Portal", url: "/portal" },
    { label: "FAQ", url: "/faq" },
    { label: "Kotak Saran", url: "/kotak-saran" },
  ];

  return (
    <div
      className={classNames([
        "fixed z-50 left-0 right-0 px-10 py-4",
        "backdrop-blur-sm bg-white/80",
        "mx-8 mt-2 border border-slate-100 rounded-full",
      ])}
    >
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-4">
          <img src={IMGJayaRaya} className="w-8" />
          <p className="font-bold text-lg">SDN Sumur Batu 14</p>
        </div>
        <div>
          <ul className="flex gap-2 text-sm">
            {navList.map((item, idx) => (
              <li key={`navitem-${idx}`}>
                <a
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.url);
                  }}
                  className={classNames([
                    "w-full h-full py-2 px-4 rounded-full flex items-center justify-center font-bold transition-all",
                    (item.url === "/" && pathname === item.url) ||
                    (item.url !== "/" && pathname.includes(item.url))
                      ? "bg-black text-white"
                      : "hover:bg-gray-200",
                  ])}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
