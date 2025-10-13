import { BigTitleLayout } from "@/layouts";
import { Collapse } from "antd";
import { ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Services } from "@/services";
import { useMemo } from "react";

const FAQPage = () => {
  const { data: faqData } = useQuery({
    queryKey: ["FAQ_LIST"],
    queryFn: () => Services.getFaqList(),
  });

  const faqList = useMemo(
    () =>
      faqData?.data?.map((item: Record<string, any>) => ({
        key: item.id,
        label: item.question,
        children: item.answer || "-",
      })) || [],
    [faqData]
  );

  if (!faqData || !faqList.length) return;

  return (
    <BigTitleLayout title="FAQ">
      <div className="xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 flex flex-col gap-4">
        {faqList.map((item: any) => (
          <div
            key={item.key}
            className="[&_.ant-collapse]:rounded-2xl! [&_.ant-collapse]:bg-transparent! [&_.ant-collapse-content]:bg-transparent! [&_.ant-collapse-header]:font-bold [&_.ant-collapse-content]:rounded-b-2xl!"
          >
            <Collapse
              expandIcon={({ isActive }) => (
                <ChevronRight style={{ rotate: isActive ? "90deg" : "0deg" }} />
              )}
              expandIconPosition="end"
              items={[item]}
            />
          </div>
        ))}
      </div>
    </BigTitleLayout>
  );
};

export default FAQPage;
