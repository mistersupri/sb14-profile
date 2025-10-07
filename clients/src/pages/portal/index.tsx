import { BigTitleLayout } from "@/layouts";
import { Link2 } from "lucide-react";

const PortalPage = () => {
  const portalList = [
    { label: "Jakarta Edu", url: "" },
    { label: "Siera", url: "" },
    { label: "Sireina", url: "" },
    { label: "E-Rapor", url: "" },
    { label: "Absensi Mobile", url: "" },
    { label: "Jak Aset Inventarisasi", url: "" },
    { label: "ANBK", url: "" },
  ];

  return (
    <BigTitleLayout title="PORTAL">
      <div className="xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portalList.map((item) => (
          <a
            href={item.url}
            target="_blank"
            className="border rounded-xl p-8 flex gap-4 hover:bg-black hover:text-white cursor-pointer transition-all"
          >
            <Link2 />
            <p className="font-bold text-xl">{item.label}</p>
          </a>
        ))}
      </div>
    </BigTitleLayout>
  );
};

export default PortalPage;
