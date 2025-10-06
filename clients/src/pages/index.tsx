import { Button, Carousel, Image } from "antd";
import { Navbar } from "../components";
import { useState } from "react";
import { MoveRight } from "lucide-react";

const Home = () => {
  const [random] = useState<number>(Date.now());

  const facilities = [
    {
      label: "LAPANGAN",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      label: "KANTIN",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      label: "RUANG LAB",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      label: "UKS",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      label: "PERPUSTAKAAN",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
    {
      label: "TAMAN",
      url: `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`,
    },
  ];

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
    <div className="min-h-screen">
      <Navbar />
      <Carousel
        arrows
        autoplay={{ dotDuration: true }}
        className="[&_.slick-arrow]:text-black!"
      >
        {news.map((item, idx) => (
          <div className="relative h-132" key={`hero-${idx}`}>
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
                <Button type="primary" size="large">
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* ---------------------------------------- */}

      <div className="flex gap-14 pt-16 px-32">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">PENGUMUMAN</h2>
            <div className="flex gap-2 items-center text-gray-500 border-b border-b-transparent hover:text-black hover:border-b hover:border-b-black cursor-pointer">
              <p className="text-sm">Selengkapnya</p>
              <MoveRight className="w-4" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
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
                  <p className="line-clamp-3 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-2/7">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">PRESTASI</h2>
            <div className="flex gap-2 items-center text-gray-500 border-b border-b-transparent hover:text-black hover:border-b hover:border-b-black cursor-pointer">
              <p className="text-sm">Selengkapnya</p>
              <MoveRight className="w-4" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {news.map((item) => (
              <div className="flex gap-4">
                <div className="w-480">
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
                  <h4 className="font-bold text-md line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="line-clamp-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------- */}

      <div className="w-64 h-1 bg-black my-24 mx-auto" />
      <div className="px-32 pb-32 flex flex-col gap-14 items-center justify-center">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h2 className="text-5xl font-bold text-center">Video Profil</h2>
          <h2 className="text-5xl font-bold text-center">SDN SUMUR BATU 14</h2>
        </div>

        <iframe
          width="100%"
          height="480"
          className="rounded-2xl"
          src="https://www.youtube-nocookie.com/embed/ipLV8vb0DK8?si=ikr8gKyzkRau1B0e&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* ---------------------------------------- */}

      <div className="grid grid-cols-3">
        {facilities.map((item) => (
          <div className="relative">
            <p className="absolute top-1/2 left-1/2 -translate-1/2 z-20 text-2xl text-white font-bold">
              {item.label}
            </p>
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-70" />
            <Image
              width="100%"
              height="100%"
              src={item.url}
              preview={false}
              placeholder={
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  width="100%"
                  height="100%"
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
