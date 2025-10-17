import { IMGProfilePlaceholder, IMGSekolah } from "@/assets";
import { getEnv } from "@/config/env.config";
import { MainLayout } from "@/layouts";
import { Services } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Carousel, Image, Skeleton } from "antd";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { useLocation } from "react-router";

const TentangSekolahPage = () => {
  const { pathname } = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: profilSekolahResData, isSuccess: isProfilSekolahSuccess } =
    useQuery({
      queryKey: ["PROFIL_SEKOLAH", pathname],
      queryFn: () => Services.getProfilSekolah(),
    });

  const profilSekolahData = profilSekolahResData?.data;

  const { data: kepalaSekolahResData, isSuccess: isKepalaSekolahSuccess } =
    useQuery({
      queryKey: ["KEPALA_SEKOLAH", pathname],
      queryFn: () => Services.getKepalaSekolah(),
    });

  const kepalaSekolahData = kepalaSekolahResData?.data;

  const { data: facilitiesData, isSuccess: isFacilitiesSuccess } = useQuery({
    queryKey: ["FACILITIES", pathname],
    queryFn: () => Services.getFasilitasSekolah(),
  });

  const facilities = useMemo(
    () =>
      facilitiesData?.data?.map((item: Record<string, any>) => ({
        label: item.nama,
        image: `${getEnv().BASE_API_URL}${item.foto.formats.medium.url}`,
      })) ?? [],
    [facilitiesData]
  );

  const { data: tenagaSekolahResData, isSuccess: isTenagaSekolahSuccess } =
    useQuery({
      queryKey: ["TENAGA_SEKOLAH", pathname],
      queryFn: () => Services.getTenagaSekolahList(),
    });

  const tenagaSekolahData = tenagaSekolahResData?.data;

  const imageList = profilSekolahData?.foto?.map(
    (item: Record<string, any>) => `${getEnv().BASE_API_URL}${item.url}`
  );

  const tenagaSekolahList = useMemo(
    () =>
      tenagaSekolahData?.map((item: Record<string, any>) => ({
        id: item.documentId,
        nama: item.nama,
        peran: item.peran,
        foto: item.foto
          ? `${getEnv().BASE_API_URL}${item.foto?.formats.small.url}`
          : IMGProfilePlaceholder,
        kelas: item.kelas,
      })) ?? [],
    [tenagaSekolahData]
  );

  const formattedTenagaSekolahList = useMemo(() => {
    const result = [];
    for (let i = 0; i < tenagaSekolahList.length; i += 10) {
      result.push(tenagaSekolahList.slice(i, i + 10));
    }
    return result;
  }, [tenagaSekolahList]);

  return (
    <MainLayout
      isLoading={
        !isProfilSekolahSuccess ||
        !isKepalaSekolahSuccess ||
        !isFacilitiesSuccess ||
        !isTenagaSekolahSuccess
      }
    >
      <div className="xl:max-w-380 m-auto py-32 px-4 md:px-16 xl:px-32 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">{profilSekolahData?.nama}</h2>
            <div className="flex gap-2 items-center">
              <p className="italic">NPSN : {profilSekolahData?.npsn}</p>
              <p>-</p>
              <p>Akreditasi</p>
              <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center font-bold">
                {profilSekolahData?.akreditasi}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold">Visi</h4>
            <p className="text-justify">{profilSekolahData?.visi}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold">Misi</h4>
            <div
              className="[&_*]:[all:revert]"
              dangerouslySetInnerHTML={{ __html: profilSekolahData?.misi }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {imageList?.length && imageList[selectedImage] && (
            <Image
              height={320}
              className="object-cover rounded-xl"
              width="100%"
              src={imageList[selectedImage]}
            />
          )}
          <div className="w-full overflow-x-auto">
            <div className="flex gap-2">
              {imageList?.map((item: any, index: number) => (
                <div
                  className={classNames([
                    "rounded-xl min-w-24 h-24 overflow-hidden cursor-pointer relative",
                    "after:w-full after:h-full after:absolute after:left-0 after:top-0 hover:after:bg-black/50",
                    selectedImage === index && "border-4 after:bg-black/50",
                  ])}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    height="100%"
                    preview={false}
                    className="object-cover"
                    width="100%"
                    src={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 w-full py-32 px-4 md:px-16 lg:px-32 flex flex-col gap-16">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Sambutan Kepala Sekolah</h2>
            <div className="flex gap-2 items-center">
              <p className="italic">{kepalaSekolahData?.nama}</p>
            </div>
            <p className="text-justify italic">{kepalaSekolahData?.sambutan}</p>
          </div>

          <div className="w-64 h-64 md:w-128 md:h-128 m-auto">
            <Image
              width="100%"
              height="100%"
              className="object-cover rounded-xl"
              preview={false}
              src={`${getEnv().BASE_API_URL}${kepalaSekolahData?.photo.url}`}
            />
          </div>
        </div>

        <Carousel
          arrows
          autoplay={{ dotDuration: true }}
          className="[&_.slick-arrow]:opacity-100! [&_.slick-arrow]:shadow-lg! [&_.slick-arrow]:text-black! [&_.slick-arrow]:bg-white! [&_.slick-arrow]:w-8! [&_.slick-arrow]:h-8! [&_.slick-arrow]:rounded-full [&_.slick-arrow]:flex! [&_.slick-arrow]:items-center! [&_.slick-arrow]:justify-center! [&_.slick-arrow]:after:static! [&_.slick-arrow.slick-next]:after:-ml-1 [&_.slick-arrow.slick-prev]:after:-mr-1"
        >
          {formattedTenagaSekolahList.map((list) => (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
                {list.map((item: any) => (
                  <a
                    href={`/tentang-sekolah/tenaga-sekolah/${item.id}`}
                    className="flex flex-col gap-4"
                  >
                    <div
                      className={classNames([
                        "rounded-xl w-full aspect-square overflow-hidden cursor-pointer relative",
                        "after:w-full after:h-full after:absolute after:left-0 after:top-0 hover:after:bg-black/50",
                      ])}
                    >
                      <Image
                        preview={false}
                        className="object-cover"
                        width="100%"
                        height="100%"
                        src={item.foto}
                      />
                    </div>
                    <div>
                      <p className="text-black">
                        {item.peran +
                          (item.peran === "Guru Kelas" ? ` ${item.kelas}` : "")}
                      </p>
                      <p className="font-bold text-black">{item.nama}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="xl:max-w-380 m-auto py-32 px-4 md:px-16 lg:px-32 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Sejarah SDN Sumur Batu 14</h2>
          <p className="text-justify">
            SD Negeri Sumur Batu 14 berdiri sejak tahun 1978 dan telah menjadi
            bagian penting masyarakat Jakarta Pusat, khususnya wilayah
            Kemayoran. Berlokasi di Jalan Nilam Raya No. 6, Kelurahan Sumur
            Batu, sekolah ini memberikan layanan pendidikan dasar yang
            berkualitas. Letaknya strategis, dekat dengan berbagai fasilitas
            vital seperti Kantor Kelurahan, Pengadilan Tinggi DKI Jakarta,
            pasar, pusat perbelanjaan ITC Cempaka Mas, rumah sakit, taman kota,
            dan bank.
          </p>
        </div>
        <Image
          height={320}
          className="object-cover rounded-xl"
          width="100%"
          preview={false}
          src={IMGSekolah}
        />
      </div>

      <div className="grid grid-cols-3 xl:max-w-380 m-auto">
        {facilities.map((item: any) => (
          <div className="relative h-42 lg:h-64 xl:h-96">
            <p className="absolute top-1/2 left-1/2 -translate-1/2 z-20 md:text-xl lg:text-2xl text-center text-white font-bold">
              {item.label}
            </p>
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-70" />
            <Image
              className="object-cover"
              width="100%"
              height="100%"
              src={item.image}
              preview={false}
            />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TentangSekolahPage;
