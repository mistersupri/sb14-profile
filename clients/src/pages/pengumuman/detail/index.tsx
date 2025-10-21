import { useMemo } from "react";
import { getEnv } from "@/config/env.config";
import { MainLayout } from "@/layouts";
import { Services } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Image, Input } from "antd";
import classNames from "classnames";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import queryString from "query-string";
import { IMGSekolah } from "@/assets";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("id");

const DetailPengumumanPage = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const parsedQuery = queryString.parse(search);
  const [searchParams] = useSearchParams();
  const params = useParams();
  const id = params.id;

  if (!id) return;

  const { data: detailNewsData, isSuccess: isDetailNewsSuccess } = useQuery({
    queryKey: ["DETAIL_NEWS", pathname, search],
    queryFn: () => Services.getBerita(id),
  });

  const detailNews = detailNewsData?.data;

  const { data: latestNewsData, isSuccess: isLatestNewsSuccess } = useQuery({
    queryKey: ["LATEST_NEWS"],
    queryFn: () => Services.getBeritaTerbaruList(),
  });

  const { data: newsLabelsData, isSuccess: isNewsLabelsSuccess } = useQuery({
    queryKey: ["NEWS_LABELS"],
    queryFn: () => Services.getLabelBeritaList(),
  });

  const newsLabels = useMemo(
    () => newsLabelsData?.data?.map((item: any) => item.nama) ?? [],
    [newsLabelsData]
  );

  const latestNews = useMemo(
    () =>
      latestNewsData?.data?.map((item: any) => ({
        id: item.documentId,
        tanggalDibuat: item.tanggal_dibuat,
        image: `${getEnv().BASE_API_URL}${item.foto_header.url}`,
        hashImage: `${getEnv().BASE_API_URL}${
          item.foto_header.formats.thumbnail.url
        }`,
        title: item.judul,
        description: item.deskripsi,
        labelBerita: item.label_berita.nama,
        created_at: item.tanggal_dibuat
          ? dayjs(new Date(item.tanggal_dibuat)).format("DD MMM YYYY")
          : "",
      })) ?? [],
    [latestNewsData]
  );

  return (
    <MainLayout
      isLoading={
        !isDetailNewsSuccess || !isLatestNewsSuccess || !isNewsLabelsSuccess
      }
    >
      <div className="relative h-128 overflow-y-hidden">
        <Image
          className="max-h-128 object-cover"
          width="100%"
          src={IMGSekolah}
          preview={false}
        />
        <div className="bg-linear-to-b from-white/80 to-white absolute top-0 left-0 w-full h-full" />
      </div>

      <div className="-mt-96 relative z-10 flex flex-col lg:flex-row gap-8 xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32">
        <div className="flex-1 flex flex-col gap-4">
          <Image
            height="100%"
            className="max-h-96 rounded-xl object-cover"
            src={`${getEnv().BASE_API_URL}${detailNews?.foto_header.url}`}
            preview={false}
            placeholder={
              <Image
                height="100%"
                className="object-cover"
                preview={false}
                src={`${getEnv().BASE_API_URL}${
                  detailNews?.foto_header.formats.thumbnail.url
                }`}
              />
            }
          />

          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md flex flex-col gap-4">
            <h1 className="font-bold text-xl">{detailNews?.judul}</h1>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-center items-center">
                  <div className="bg-teal-700 text-white text-sm font-bold rounded-full pt-1 w-6 h-6 flex items-center justify-center">
                    {detailNews?.author.nama.charAt(0)}
                  </div>
                  <p>{detailNews?.author.nama}</p>
                </div>
                <div className="rounded text-xs px-2 py-1 bg-gray-200 w-fit font-bold">
                  #{detailNews?.label_berita.nama}
                </div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                {detailNews?.cta_url && (
                  <a href={detailNews?.cta_url}>
                    <button className="bg-teal-700 px-4 py-1 text-sm text-white rounded hover:bg-black cursor-pointer">
                      {detailNews?.cta_display || "Selengkapnya"}
                    </button>
                  </a>
                )}
                <p className="text-sm text-gray-500">
                  {dayjs(new Date(detailNews?.tanggal_dibuat)).format(
                    "DD MMMM YYYY"
                  )}
                </p>
              </div>
            </div>
            <div
              className="unreset"
              dangerouslySetInnerHTML={{ __html: detailNews?.isi_berita }}
            />
          </div>
          <div />
        </div>

        <div className="flex flex-col gap-8 lg:w-2/7">
          <Input.Search
            placeholder="Cari pengumuman di sini..."
            enterButton="Search"
            size="large"
            onSearch={(value) => {
              navigate(
                `/pengumuman?${queryString.stringify({
                  ...parsedQuery,
                  page: "1",
                  keyword: value,
                })}`
              );
            }}
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">LABEL</h2>
            <div className="flex flex-wrap gap-2">
              <a
                href={`/pengumuman?${queryString.stringify({
                  ...parsedQuery,
                  page: "1",
                  label: undefined,
                })}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(
                    `/pengumuman?${queryString.stringify({
                      ...parsedQuery,
                      page: "1",
                      label: undefined,
                    })}`
                  );
                }}
                className={classNames([
                  "rounded bg-gray-200 py-2 px-4 font-bold",
                  "hover:bg-black hover:text-white cursor-pointer",
                ])}
              >
                SEMUA
              </a>
              {newsLabels.map((label: string) => (
                <a
                  href={`/pengumuman?${queryString.stringify({
                    ...parsedQuery,
                    page: "1",
                    label,
                  })}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(
                      `/pengumuman?${queryString.stringify({
                        ...parsedQuery,
                        page: "1",
                        label,
                      })}`
                    );
                  }}
                  className={classNames([
                    "rounded bg-gray-200 py-2 px-4 font-bold",
                    searchParams.get("label") === label
                      ? "bg-teal-800 text-white"
                      : "hover:bg-black hover:text-white cursor-pointer",
                  ])}
                >
                  #{label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">TERBARU</h2>
            </div>
            <div className="flex flex-col gap-4">
              {latestNews.map((item: any, idx: number) => (
                <a
                  href={`/pengumuman/${item.id}/${
                    item.tanggalDibuat
                  }/${item.title.trim().toLowerCase().replaceAll(" ", "-")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(
                      `/pengumuman/${item.id}/${item.tanggalDibuat}/${item.title
                        .trim()
                        .toLowerCase()
                        .replaceAll(" ", "-")}`
                    );
                  }}
                  key={`news-${idx}`}
                >
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
                            src={item.hashImage}
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
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailPengumumanPage;
