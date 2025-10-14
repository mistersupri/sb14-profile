import { useMemo, useState } from "react";
import { getEnv } from "@/config/env.config";
import { BigTitleLayout } from "@/layouts";
import { Services } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Image, Input, Pagination, Tag } from "antd";
import classNames from "classnames";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import queryString from "query-string";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("id");

const PengumumanPage = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const parsedQuery = queryString.parse(search);
  const [searchParams, setSearchParams] = useSearchParams();
  const label = searchParams.get("label");
  const keyword = searchParams.get("keyword");
  const page = searchParams.get("page");

  const { data: newsData } = useQuery({
    queryKey: ["NEWS", label, keyword, page],
    queryFn: () =>
      Services.getBeritaList({
        label,
        keyword,
      }),
  });

  const { data: newsLabelsData } = useQuery({
    queryKey: ["NEWS_LABELS"],
    queryFn: () => Services.getLabelBeritaList(),
  });

  const newsLabels = useMemo(
    () => newsLabelsData?.data?.map((item: any) => item.nama) ?? [],
    [newsLabelsData]
  );

  const paginatedNews = useMemo(
    () =>
      newsData?.data?.map((item: any) => ({
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
    [newsData]
  );

  const latestNews = useMemo(
    () =>
      newsData?.data?.map((item: any) => ({
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
    [newsData]
  );

  return (
    <BigTitleLayout title="PENGUMUMAN">
      <div className="flex flex-col lg:flex-row gap-8 xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32">
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {paginatedNews.map((item: any, idx: number) => (
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
                        src={item.hashImage}
                        width="100%"
                      />
                    }
                  />
                </div>
                <div className="flex flex-col items-start gap-1 p-4">
                  <div className="w-full flex justify-between items-center">
                    <Tag color="magenta" className="text-xs!">
                      {item.labelBerita}
                    </Tag>
                    <p className="text-xs text-gray-500">{item.created_at}</p>
                  </div>
                  <h4 className="font-bold line-clamp-2">{item.title}</h4>
                  <p className="line-clamp-3 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            align="center"
            defaultCurrent={1}
            total={newsData?.meta.pagination.total}
            onChange={(page) =>
              setSearchParams({ ...parsedQuery, page: String(page) })
            }
          />
        </div>

        <div className="flex flex-col gap-8 lg:w-2/7">
          <Input.Search
            placeholder="Cari pengumuman di sini..."
            enterButton="Search"
            size="large"
            onSearch={(value) =>
              setSearchParams({ ...parsedQuery, page: "1", keyword: value })
            }
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">LABEL</h2>
            <div className="flex flex-wrap gap-2">
              <a
                href={`${pathname}?${queryString.stringify({
                  ...parsedQuery,
                  page: "1",
                  label: undefined,
                })}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(
                    `${pathname}?${queryString.stringify({
                      ...parsedQuery,
                      page: "1",
                      label: undefined,
                    })}`
                  );
                }}
                className={classNames([
                  "rounded bg-gray-200 py-2 px-4 font-bold",
                  !searchParams.get("label")
                    ? "bg-teal-800 text-white"
                    : "hover:bg-black hover:text-white cursor-pointer",
                ])}
              >
                SEMUA
              </a>
              {newsLabels.map((label: string) => (
                <a
                  href={`${pathname}?${queryString.stringify({
                    ...parsedQuery,
                    page: "1",
                    label,
                  })}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSearchParams({ ...parsedQuery, page: "1", label });
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
              {latestNews.map((item: any) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </BigTitleLayout>
  );
};

export default PengumumanPage;
