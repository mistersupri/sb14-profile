import { IMGProfilePlaceholder } from "@/assets";
import { getEnv } from "@/config/env.config";
import { BigTitleLayout } from "@/layouts";
import { Services } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Image } from "antd";
import { useParams } from "react-router";

const TenagaSekolahPage = () => {
  const { id } = useParams();

  if (!id) return;

  const { data: tenagaSekolahResData } = useQuery({
    queryKey: [],
    queryFn: () => Services.getTenagaSekolah({ id }),
  });

  const tenagaSekolahData = tenagaSekolahResData?.data;

  return (
    <BigTitleLayout title="Profil Tenaga Sekolah">
      <div className="max-w-128 lg:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-2xl lg:text-4xl font-bold">
            {tenagaSekolahData?.nama}
          </h1>
          <p>
            {tenagaSekolahData?.peran}
            {tenagaSekolahData?.peran === "Guru" &&
              ` ${tenagaSekolahData?.kelas}`}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: tenagaSekolahData?.pengalaman }}
          />
        </div>
        <div className="flex-1">
          <div className="w-full aspect-square md:w-128 md:h-128 m-auto">
            <Image
              width="100%"
              height="100%"
              className="object-cover rounded-xl border border-gray-200"
              preview={false}
              src={
                tenagaSekolahData?.foto
                  ? `${getEnv().BASE_API_URL}${tenagaSekolahData?.foto.url}`
                  : IMGProfilePlaceholder
              }
            />
          </div>
        </div>
      </div>
    </BigTitleLayout>
  );
};

export default TenagaSekolahPage;
