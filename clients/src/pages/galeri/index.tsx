import { BigTitleLayout } from "@/layouts";
import { Image, Pagination } from "antd";
import classNames from "classnames";

const random = Date.now();

const GaleriPage = () => {
  const imageList = [
    {
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
  ];

  return (
    <BigTitleLayout title="Galeri">
      <div className="xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {imageList.map((item) => (
              <Image
                className="object-cover rounded-xl"
                height={164}
                width="100%"
                src={item.url}
                placeholder={
                  <Image
                    className="object-cover rounded-xl"
                    height={164}
                    width="100%"
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  />
                }
              />
            ))}
          </div>
          <Pagination align="center" defaultCurrent={1} total={50} />
        </div>
        <div className="flex flex-col gap-4 lg:w-2/7">
          <h2 className="text-xl font-bold">Label</h2>
          <div className="flex flex-wrap gap-2">
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
      </div>
    </BigTitleLayout>
  );
};

export default GaleriPage;
