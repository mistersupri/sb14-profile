import { getEnv } from "@/config/env.config";
import { BigTitleLayout } from "@/layouts";
import { Services } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Image, Pagination } from "antd";
import classNames from "classnames";
import queryString from "query-string";
import { useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

const GaleriPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname, search } = useLocation();
  const parsedQuery = queryString.parse(search);
  const label = searchParams.get("label");
  const keyword = searchParams.get("keyword");
  const page = searchParams.get("page");

  const { data: galleryLabelsData, isSuccess: isGalleryLabelsSuccess } =
    useQuery({
      queryKey: ["GALLERY_LABELS", pathname, page],
      queryFn: () => Services.getLabelGalleryList(),
    });

  const galleryLabels = useMemo(
    () =>
      galleryLabelsData?.data?.map((item: Record<string, any>) => item.nama) ??
      [],
    [galleryLabelsData]
  );

  const { data: galleryData, isSuccess: isGallerySuccess } = useQuery({
    queryKey: ["GALLERY", label, keyword, page],
    queryFn: () =>
      Services.getGalleryList({
        label,
        page,
      }),
  });

  const imageList = useMemo(
    () =>
      galleryData?.data
        ?.map((item: Record<string, any>) =>
          item.images.map((image: Record<string, any>) => ({
            url: `${getEnv().BASE_API_URL}${image.formats.medium.url}`,
            hash: `${getEnv().BASE_API_URL}${image.formats.thumbnail.url}`,
          }))
        )
        .flat() ?? [],
    [galleryData]
  );

  return (
    <BigTitleLayout
      title="Galeri"
      isLoading={!isGalleryLabelsSuccess || !isGallerySuccess}
    >
      <div className="xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {imageList.map((item: any) => (
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
                    src={item.hash}
                    fetchPriority="high"
                  />
                }
              />
            ))}
          </div>
          <Pagination
            align="center"
            defaultCurrent={1}
            total={galleryData?.meta.pagination.total}
            pageSize={galleryData?.meta.pagination.pageSize}
            onChange={(page) =>
              setSearchParams({ ...parsedQuery, page: String(page) })
            }
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-2/7">
          <h2 className="text-xl font-bold">Label</h2>
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
            {galleryLabels.map((label: string) => (
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
      </div>
    </BigTitleLayout>
  );
};

export default GaleriPage;
