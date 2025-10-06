import { Carousel, Image } from "antd";
import { Navbar } from "../components";
import { useState } from "react";

const Home = () => {
  const [random] = useState<number>(Date.now());

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
    <>
      <Navbar />
      <Carousel
        arrows
        autoplay={{ dotDuration: true }}
        className="[&_.slick-arrow]:text-black!"
      >
        {news.map((item, idx) => (
          <div className="relative h-164" key={`hero-${idx}`}>
            <Image
              width="100%"
              src={item.image}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width="100%"
                />
              }
            />
            <div className="bg-linear-to-b from-white/80 to-white absolute top-0 left-0 w-full h-full" />
            <div className="absolute w-full h-full z-10 top-0 left-0">
              <div className="xl:w-480 m-auto pt-18 px-32 h-full flex flex-col justify-center items-start gap-8">
                <div className="w-full xl:w-1/2 flex flex-col gap-6">
                  <h1 className="text-4xl font-bold">{item.title}</h1>
                  <p className="text-lg line-clamp-5">{item.description}</p>
                </div>
                <button className="bg-teal-700 w-[100px] h-[50px] transition-all hover:scale-up-center relative cursor-pointer">
                  <div className="absolute top-0 z-[1] w-full h-full flex flex-col justify-center peer text-white">
                    Daftar
                  </div>
                  <div className="transition-all w-0 peer-hover:w-full h-full bg-black absolute z-0 top-0 ease-out pointer-events-none"></div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="flex gap-14 pt-16 px-32">
        <div className="flex flex-col gap-4 w-6/8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">PENGUMUMAN</h2>
            <p className="text-sm text-gray-500">Selengkapnya</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {news.map((item, idx) => (
              <div className="flex flex-col gap-3" key={`news-${idx}`}>
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
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500">
                    {new Date(item.created_at).toDateString()}
                  </p>
                  <h4 className="font-bold line-clamp-2">{item.title}</h4>
                  <p className="line-clamp-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-2/8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">PRESTASI</h2>
            <p className="text-sm text-gray-500">Selengkapnya</p>
          </div>
          <div className="flex flex-col gap-4">
            {news.map((item) => (
              <div className="flex gap-4">
                <div className="w-320">
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
                <div className="flex flex-col">
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
      <div className="w-64 h-1 bg-black my-24 mx-auto" />
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-4xl font-bold text-center">
          Video Profil
          <br />
          SDN SUMUR BATU 14
        </h2>

        <iframe
          width="100%"
          src="https://www.youtube-nocookie.com/embed/ipLV8vb0DK8?si=ikr8gKyzkRau1B0e&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Home;
