import type React from "react";
import { MainLayout } from "../main";
import { Image } from "antd";
import { IMGSekolah } from "@/assets";

const BigTitleLayout: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <MainLayout>
      <div className="relative h-128 overflow-y-hidden">
        <Image
          className="max-h-128 object-cover"
          width="100%"
          height="100%"
          src={IMGSekolah}
          preview={false}
        />
        <div className="bg-linear-to-b from-white/80 to-white absolute top-0 left-0 w-full h-full" />
        <div className="absolute w-full h-full z-10 top-0 left-0">
          <div className="xl:max-w-380 m-auto pt-18 px-32 h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl lg:text-6xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
      {children}
    </MainLayout>
  );
};

export default BigTitleLayout;
