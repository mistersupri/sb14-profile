import { useLocation, useNavigate } from "react-router";
import classNames from "classnames";
import { useMediaQuery } from "usehooks-ts";
import { Drawer } from "antd";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const matches = useMediaQuery("(min-width: 1280px)");
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <div
        className={classNames([
          "fixed z-50 left-0 right-0 px-4 py-2 lg:px-10 lg:py-4",
          "backdrop-blur-sm bg-white/80",
          "mx-2 mt-2 border border-slate-100 rounded-full",
        ])}
      >
        <div className="flex justify-between xl:max-w-380 m-auto">
          <div className="flex items-center justify-center gap-4">
            <img src="/logo.png" className="w-8" />
            <p className="font-bold text-sm lg:text-xl">SDN Sumur Batu 14</p>
          </div>
          <div>
            {!matches && (
              <button
                className="p-2 rounded-xl hover:bg-gray-100 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <Menu />
              </button>
            )}
            {matches && (
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
            )}
          </div>
        </div>
      </div>
      <Drawer
        closable={false}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        key="nav-mobile"
      >
        <div className="flex flex-col">
          <button
            className="p-2 rounded-xl hover:bg-gray-100 cursor-pointer ml-auto"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
          <ul>
            {navList.map((item, idx) => (
              <li key={`navitem-mobile-${idx}`}>
                <a
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.url);
                  }}
                  className="w-full h-full py-2 px-4 rounded-full flex items-center font-bold text-lg text-black! hover:bg-gray-100! transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
