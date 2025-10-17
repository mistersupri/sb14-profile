import { BigTitleLayout } from "@/layouts";
import { Services } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { Link2 } from "lucide-react";
import { useMemo } from "react";

const PortalPage = () => {
  const { data: portalData, isSuccess: isPortalSuccess } = useQuery({
    queryKey: ["PORTAL"],
    queryFn: () => Services.getPortalList(),
  });

  const portalList = useMemo(
    () =>
      portalData?.data?.map((item: Record<string, any>) => ({
        label: item.nama,
        url: item.link,
      })) ?? [],
    [portalData]
  );

  return (
    <BigTitleLayout title="PORTAL" isLoading={!isPortalSuccess}>
      <div className="xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portalList.map((item: any) => (
          <a
            href={item.url}
            target="_blank"
            className="border rounded-xl p-8 flex gap-4 hover:bg-black hover:text-white cursor-pointer transition-all"
          >
            <Link2 />
            <p className="font-bold text-xl">{item.label}</p>
          </a>
        ))}
      </div>
    </BigTitleLayout>
  );
};

export default PortalPage;
