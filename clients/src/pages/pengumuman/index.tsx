import { BigTitleLayout } from "@/layouts";
import { Image, Input, Pagination, Tag } from "antd";
import classNames from "classnames";

const random = Date.now();

const PengumumanPage = () => {
  const news = [
    {
      image: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
      title: "Pendaftaran KJP Dimulai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ut tortor non efficitur. Nunc interdum velit vel turpis rutrum, quis pulvinar nisl blandit. Vivamus non odio ac massa porta blandit. Cras imperdiet interdum sapien eu tempus. In hac habitasse platea dictumst. Nulla gravida, nulla eget posuere faucibus, eros ante ultricies lacus, quis luctus magna velit id dolor. Phasellus in rutrum nisi, id pellentesque turpis. In volutpat lacus enim, quis finibus lorem convallis in. Nullam lobortis, sapien vel fringilla varius, mi mauris porta diam, nec venenatis urna lacus id odio. Maecenas placerat, mauris ac iaculis volutpat, nisl purus lacinia risus, id placerat orci risus eget dui.",
      created_at: 1759538088605,
    },
    {
      image: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
      title: "Pendaftaran KJP Dimulai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ut tortor non efficitur. Nunc interdum velit vel turpis rutrum, quis pulvinar nisl blandit. Vivamus non odio ac massa porta blandit. Cras imperdiet interdum sapien eu tempus. In hac habitasse platea dictumst. Nulla gravida, nulla eget posuere faucibus, eros ante ultricies lacus, quis luctus magna velit id dolor. Phasellus in rutrum nisi, id pellentesque turpis. In volutpat lacus enim, quis finibus lorem convallis in. Nullam lobortis, sapien vel fringilla varius, mi mauris porta diam, nec venenatis urna lacus id odio. Maecenas placerat, mauris ac iaculis volutpat, nisl purus lacinia risus, id placerat orci risus eget dui.",
      created_at: 1759538088605,
    },
    {
      image: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
      title: "Pendaftaran KJP Dimulai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ut tortor non efficitur. Nunc interdum velit vel turpis rutrum, quis pulvinar nisl blandit. Vivamus non odio ac massa porta blandit. Cras imperdiet interdum sapien eu tempus. In hac habitasse platea dictumst. Nulla gravida, nulla eget posuere faucibus, eros ante ultricies lacus, quis luctus magna velit id dolor. Phasellus in rutrum nisi, id pellentesque turpis. In volutpat lacus enim, quis finibus lorem convallis in. Nullam lobortis, sapien vel fringilla varius, mi mauris porta diam, nec venenatis urna lacus id odio. Maecenas placerat, mauris ac iaculis volutpat, nisl purus lacinia risus, id placerat orci risus eget dui.",
      created_at: 1759538088605,
    },
    {
      image: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
      title: "Pendaftaran KJP Dimulai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ut tortor non efficitur. Nunc interdum velit vel turpis rutrum, quis pulvinar nisl blandit. Vivamus non odio ac massa porta blandit. Cras imperdiet interdum sapien eu tempus. In hac habitasse platea dictumst. Nulla gravida, nulla eget posuere faucibus, eros ante ultricies lacus, quis luctus magna velit id dolor. Phasellus in rutrum nisi, id pellentesque turpis. In volutpat lacus enim, quis finibus lorem convallis in. Nullam lobortis, sapien vel fringilla varius, mi mauris porta diam, nec venenatis urna lacus id odio. Maecenas placerat, mauris ac iaculis volutpat, nisl purus lacinia risus, id placerat orci risus eget dui.",
      created_at: 1759538088605,
    },
    {
      image: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
      title: "Pendaftaran KJP Dimulai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ut tortor non efficitur. Nunc interdum velit vel turpis rutrum, quis pulvinar nisl blandit. Vivamus non odio ac massa porta blandit. Cras imperdiet interdum sapien eu tempus. In hac habitasse platea dictumst. Nulla gravida, nulla eget posuere faucibus, eros ante ultricies lacus, quis luctus magna velit id dolor. Phasellus in rutrum nisi, id pellentesque turpis. In volutpat lacus enim, quis finibus lorem convallis in. Nullam lobortis, sapien vel fringilla varius, mi mauris porta diam, nec venenatis urna lacus id odio. Maecenas placerat, mauris ac iaculis volutpat, nisl purus lacinia risus, id placerat orci risus eget dui.",
      created_at: 1759538088605,
    },
    {
      image: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
      title: "Pendaftaran KJP Dimulai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam ut tortor non efficitur. Nunc interdum velit vel turpis rutrum, quis pulvinar nisl blandit. Vivamus non odio ac massa porta blandit. Cras imperdiet interdum sapien eu tempus. In hac habitasse platea dictumst. Nulla gravida, nulla eget posuere faucibus, eros ante ultricies lacus, quis luctus magna velit id dolor. Phasellus in rutrum nisi, id pellentesque turpis. In volutpat lacus enim, quis finibus lorem convallis in. Nullam lobortis, sapien vel fringilla varius, mi mauris porta diam, nec venenatis urna lacus id odio. Maecenas placerat, mauris ac iaculis volutpat, nisl purus lacinia risus, id placerat orci risus eget dui.",
      created_at: 1759538088605,
    },
  ];

  return (
    <BigTitleLayout title="PENGUMUMAN">
      <div className="flex gap-8 xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32">
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-4">
            {news.map((item, idx) => (
              <div
                className="flex flex-col overflow-hidden rounded border border-gray-100 hover:border-black cursor-pointer transition-all"
                key={`news-${idx}`}
              >
                <div className="w-full h-32 overflow-hidden">
                  <Image
                    width="100%"
                    src={item.image}
                    preview={false}
                    placeholder={
                      <Image
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        width="100%"
                      />
                    }
                  />
                </div>
                <div className="flex flex-col items-start gap-1 p-4">
                  <div className="w-full flex justify-between items-center">
                    <Tag color="magenta" className="text-xs!">
                      ANBK
                    </Tag>
                    <p className="text-xs text-gray-500">
                      {new Date(item.created_at).toDateString()}
                    </p>
                  </div>
                  <h4 className="font-bold line-clamp-2">{item.title}</h4>
                  <p className="line-clamp-3 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination align="center" defaultCurrent={1} total={50} />
        </div>

        <div className="flex flex-col gap-8 w-2/7">
          <Input.Search
            placeholder="Cari pengumuman di sini..."
            enterButton="Search"
            size="large"
            onSearch={() => undefined}
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">LABEL</h2>
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
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">TERBARU</h2>
            </div>
            <div className="flex flex-col gap-4">
              {news.map((item) => (
                <div className="flex overflow-hidden rounded border border-gray-100 hover:border-black cursor-pointer transition-all">
                  <div className="w-16">
                    <Image
                      height="100%"
                      className="object-cover"
                      src={item.image}
                      preview={false}
                      placeholder={
                        <Image
                          height="100%"
                          className="object-cover"
                          preview={false}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        />
                      }
                    />
                  </div>
                  <div className="flex-1 flex flex-col px-4 py-2">
                    <p className="text-xs text-gray-500">
                      {new Date(item.created_at).toDateString()}
                    </p>
                    <h4 className="font-bold text-sm line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="line-clamp-2 text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BigTitleLayout>
  );
};

export default PengumumanPage;
