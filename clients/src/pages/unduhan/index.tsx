import { BigTitleLayout } from "@/layouts";
import { Input, Pagination } from "antd";
import classNames from "classnames";
import { FileText } from "lucide-react";

const UnduhanPage = () => {
  const unduhanList = [
    {
      label: "ANBK",
      name: "Jakarta Edu",
      url: "",
      created_at: new Date().getTime(),
    },
    { label: "ANBK", name: "Siera", url: "", created_at: new Date().getTime() },
    {
      label: "ANBK",
      name: "Sireina",
      url: "",
      created_at: new Date().getTime(),
    },
    {
      label: "ANBK",
      name: "E-Rapor",
      url: "",
      created_at: new Date().getTime(),
    },
    {
      label: "ANBK",
      name: "Absensi Mobile",
      url: "",
      created_at: new Date().getTime(),
    },
    {
      label: "ANBK",
      name: "Jak Aset Inventarisasi",
      url: "",
      created_at: new Date().getTime(),
    },
    { label: "ANBK", name: "ANBK", url: "", created_at: new Date().getTime() },
  ];

  return (
    <BigTitleLayout title="UNDUHAN">
      <div className="xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 flex flex-col gap-8">
        <div className="w-full lg:w-128 mx-auto flex flex-col gap-4">
          <Input.Search
            placeholder="Cari file unduhan di sini..."
            enterButton="Search"
            size="large"
            onSearch={() => undefined}
          />
          <div className="flex gap-2 flex-wrap">
            <a
              className={classNames([
                "rounded bg-gray-200 py-2 px-4 font-bold",
                "bg-teal-800 text-white",
              ])}
            >
              SEMUA
            </a>
            <a className="rounded bg-gray-200 py-2 px-4 font-bold hover:bg-black hover:text-white cursor-pointer">
              #ANBK
            </a>
            <a className="rounded bg-gray-200 py-2 px-4 font-bold hover:bg-black hover:text-white cursor-pointer">
              #KJP
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {unduhanList.map((item) => (
            <a
              href={item.url}
              target="_blank"
              className="rounded-xl flex gap-4 p-2 border border-gray-200 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition-all"
            >
              <div className="rounded-xl bg-pink-500 w-24 h-24 flex justify-center items-center text-white">
                <FileText className="w-16 h-16" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-500 text-sm">#{item.label}</p>
                <p className="font-bold text-xl">{item.label}</p>
                <p className="">{new Date(item.created_at).toDateString()}</p>
              </div>
            </a>
          ))}
        </div>
        <Pagination align="center" defaultCurrent={1} total={50} />
      </div>
    </BigTitleLayout>
  );
};

export default UnduhanPage;
