import type React from "react";
import { MainLayout } from "../main";
import { Image } from "antd";
import { useState } from "react";

const BigTitleLayout: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  const [random] = useState<number>(Date.now());

  return (
    <MainLayout>
      <div className="relative h-128 overflow-y-hidden">
        <Image
          className="max-h-128 object-cover"
          width="100%"
          src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
          preview={false}
          placeholder={
            <Image
              className="max-h-128 object-cover"
              width="100%"
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            />
          }
        />
        <div className="bg-linear-to-b from-white/80 to-white absolute top-0 left-0 w-full h-full" />
        <div className="absolute w-full h-full z-10 top-0 left-0">
          <div className="xl:max-w-380 m-auto pt-18 px-32 h-full flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
      {children}
    </MainLayout>
  );
};

export default BigTitleLayout;
