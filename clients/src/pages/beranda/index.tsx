import { Carousel, Empty, Image, Tag } from "antd";
import { useMemo } from "react";
import { MoveRight } from "lucide-react";
import { MainLayout } from "@/layouts";
import { useQuery } from "@tanstack/react-query";
import { Services } from "@/services";
import { getEnv } from "@/config/env.config";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";
import { useLocation } from "react-router";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("id");

const BerandaPage = () => {
  const { pathname } = useLocation();

  const { data: facilitiesData } = useQuery({
    queryKey: ["FACILITIES", pathname],
    queryFn: () => Services.getFasilitasSekolah(),
  });

  const { data: newsData } = useQuery({
    queryKey: ["NEWS", pathname],
    queryFn: () => Services.getBeritaBerandaList(),
  });

  const { data: prestasiData } = useQuery({
    queryKey: ["PRESTASI", pathname],
    queryFn: () => Services.getBeritaPrestasi(),
  });

  const { data: videoProfilSekolahData } = useQuery({
    queryKey: ["VIDEO_PROFIL_SEKOLAH", pathname],
    queryFn: () => Services.getVideoProfilSekolah(),
  });

  const videoProfilSekolah = videoProfilSekolahData?.data?.embed;

  const facilities = useMemo(
    () =>
      facilitiesData?.data?.map((item: Record<string, any>) => ({
        label: item.nama,
        image: `${getEnv().BASE_API_URL}${item.foto.formats.medium.url}`,
      })) ?? [],
    [facilitiesData]
  );

  const news = useMemo(
    () =>
      newsData?.data?.map((item: any) => ({
        image: `${getEnv().BASE_API_URL}${item.foto_header.formats.medium.url}`,
        title: item.judul,
        description: item.deskripsi,
        created_at: item.tanggal_dibuat
          ? dayjs(new Date(item.tanggal_dibuat)).format("DD MMM YYYY")
          : "",
        labelBerita: item.label_berita?.nama,
        ctaDisplay: item.cta_display,
        ctaUrl: item.cta_url,
      })) ?? [],
    [newsData]
  );

  const prestasiNews = useMemo(
    () =>
      prestasiData?.data?.map((item: any) => ({
        image: `${getEnv().BASE_API_URL}${item.foto_header.formats.medium.url}`,
        title: item.judul,
        description: item.deskripsi,
        created_at: item.tanggal_dibuat
          ? dayjs(new Date(item.tanggal_dibuat)).format("DD MMM YYYY")
          : "",
        labelBerita: item.label_berita?.nama,
        ctaDisplay: item.cta_display,
        ctaUrl: item.cta_url,
      })) ?? [],
    [prestasiData]
  );

  return (
    <MainLayout>
      <div className="min-h-screen">
        <Carousel
          arrows
          autoplay={{ dotDuration: true }}
          className="[&_.slick-arrow]:text-black!"
        >
          {news.map((item: any, idx: number) => (
            <div className="relative h-128 lg:h-154" key={`hero-${idx}`}>
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
                <div className="max-w-164 xl:max-w-380 pt-18 px-16 lg:px-32 h-full flex flex-col justify-center items-start gap-8">
                  <div className="w-full xl:w-3/4 flex flex-col gap-6">
                    <h1 className="text-2xl lg:text-4xl font-bold">
                      {item.title}
                    </h1>
                    <p className="text-md lg:text-lg line-clamp-5">
                      {item.description}
                    </p>
                  </div>
                  <a href={item.ctaUrl}>
                    <button className="bg-teal-700 px-8 py-2 lg:text-lg text-white rounded-xl hover:bg-black cursor-pointer">
                      {item.ctaDisplay}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* ---------------------------------------- */}

        <div className="flex flex-col lg:flex-row gap-14 pt-16 px-8 lg:px-32 xl:max-w-380 m-auto">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text:xl lg:text-2xl font-bold">PENGUMUMAN</h2>
              <div className="flex gap-2 items-center text-gray-500 border-b border-b-transparent hover:text-black hover:border-b hover:border-b-black cursor-pointer transition-all">
                <a href="/pengumuman" className="text-xs lg:text-sm">
                  Selengkapnya
                </a>
                <MoveRight className="w-3 lg:w-4" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {news.length ? (
                news.map((item: any, idx: number) => (
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
                            height="100%"
                          />
                        }
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1 p-4">
                      <div className="w-full flex justify-between items-center">
                        <Tag color="magenta" className="text-xs!">
                          {item.labelBerita}
                        </Tag>
                        <p className="text-xs text-gray-500">
                          {item.created_at}
                        </p>
                      </div>
                      <h4 className="font-bold line-clamp-2 text-sm lg:text-base">
                        {item.title}
                      </h4>
                      <p className="line-clamp-3 text-xs lg:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <Empty />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:w-2/7">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">PRESTASI</h2>
              <div className="flex gap-2 items-center text-gray-500 border-b border-b-transparent hover:text-black hover:border-b hover:border-b-black cursor-pointer transition-all">
                <a
                  href="/pengumuman?label=PRESTASI"
                  className="text-xs lg:text-sm"
                >
                  Selengkapnya
                </a>
                <MoveRight className="w-4" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {prestasiNews.length ? (
                prestasiNews.map((item: any) => (
                  <div className="flex overflow-hidden rounded border border-gray-100 hover:border-black cursor-pointer transition-all">
                    <div className="w-24 lg:w-16">
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
                      <p className="text-xs text-gray-500">{item.created_at}</p>
                      <h4 className="font-bold text-sm line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="line-clamp-2 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <Empty />
              )}
            </div>
          </div>
        </div>

        {/* ---------------------------------------- */}

        <div className="w-64 h-1 bg-black my-24 mx-auto" />
        <div className="xl:max-w-380 m-auto px-8 lg:px-32 pb-32 flex flex-col gap-14 items-center justify-center">
          <div className="flex flex-col gap-6 items-center justify-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-center">
              Video Profil <br />
              SDN SUMUR BATU 14
            </h2>
          </div>

          <div
            className="[&_iframe]:h-64 [&_iframe]:w-128 [&_iframe]:sm:h-92 [&_iframe]:sm:w-184 [&_iframe]:lg:h-128 [&_iframe]:lg:w-256 [&_iframe]:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: videoProfilSekolah }}
          />
        </div>

        {/* ---------------------------------------- */}

        <div className="grid grid-cols-3 xl:max-w-380 m-auto">
          {facilities.map((item: any) => (
            <div className="relative">
              <p className="absolute top-1/2 left-1/2 -translate-1/2 z-20 md:text-xl lg:text-2xl text-center text-white font-bold">
                {item.label}
              </p>
              <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-70" />
              <Image
                width="100%"
                height="100%"
                src={item.image}
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
    </MainLayout>
  );
};

export default BerandaPage;
