import { BigTitleLayout } from "@/layouts";
import { Services } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Input, Pagination } from "antd";
import classNames from "classnames";
import { FileText } from "lucide-react";
import queryString from "query-string";
import { useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";
import { getEnv } from "@/config/env.config";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("id");

const UnduhanPage = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const parsedQuery = queryString.parse(search);
  const [searchParams, setSearchParams] = useSearchParams();
  const label = searchParams.get("label");
  const keyword = searchParams.get("keyword");
  const page = searchParams.get("page");

  const { data: unduhanLabelsData } = useQuery({
    queryKey: ["UNDUHAN_LABELS", pathname],
    queryFn: () => Services.getLabelUnduhanList(),
  });

  const unduhanLabels = useMemo(
    () => unduhanLabelsData?.data?.map((item: any) => item.nama) ?? [],
    [unduhanLabelsData]
  );

  const { data: unduhanData } = useQuery({
    queryKey: ["UNDUHAN", pathname, label, keyword, page],
    queryFn: () =>
      Services.getUnduhanList({
        label,
        keyword,
      }),
  });

  const unduhanList = useMemo(
    () =>
      unduhanData?.data?.map((item: any) => ({
        name: item.nama,
        label: item.label_unduhan.nama,
        url: `${getEnv().BASE_API_URL}${item.file.url}`,
        created_at: dayjs(new Date(item.tanggal_diunggah)).format(
          "DD MMM YYYY"
        ),
        filename: item.file.name,
      })) ?? [],
    [unduhanData]
  );

  return (
    <BigTitleLayout title="UNDUHAN">
      <div className="xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 flex flex-col gap-8">
        <div className="w-full lg:w-128 mx-auto flex flex-col gap-4">
          <Input.Search
            placeholder="Cari file unduhan di sini..."
            enterButton="Search"
            size="large"
            onSearch={(value) =>
              setSearchParams({ ...parsedQuery, page: "1", keyword: value })
            }
          />
          <div className="flex gap-2 flex-wrap">
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
            {unduhanLabels.map((label: string) => (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {unduhanList.map((item: any) => (
            <a
              href={item.url}
              target="_blank"
              download={item.filename}
              className="rounded-xl flex gap-4 p-2 border border-gray-200 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition-all"
            >
              <div className="rounded-xl bg-pink-500 min-w-24 min-h-24 flex justify-center items-center text-white">
                <FileText className="w-12 h-12" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <p className="text-gray-500 text-xs">#{item.label}</p>
                <p className="font-bold">{item.name}</p>
                <p className="text-xs">{item.created_at}</p>
              </div>
            </a>
          ))}
        </div>
        <Pagination
          align="center"
          defaultCurrent={1}
          total={unduhanData?.meta.pagination.total}
          onChange={(page) =>
            setSearchParams({ ...parsedQuery, page: String(page) })
          }
        />
      </div>
    </BigTitleLayout>
  );
};

export default UnduhanPage;
