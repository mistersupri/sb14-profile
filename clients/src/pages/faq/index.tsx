import { BigTitleLayout } from "@/layouts";
import { Collapse } from "antd";
import { ChevronRight } from "lucide-react";

const FAQPage = () => {
  const faqList = [
    {
      key: "1",
      label: "This is default size panel header",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis ullamcorper, vulputate massa eu, porttitor metus. Vestibulum sagittis egestas vulputate. Mauris id nibh sit amet justo vulputate dictum. Phasellus eleifend enim sollicitudin odio pulvinar ullamcorper. Sed tempus vitae erat eget mollis. Suspendisse imperdiet suscipit dolor, at cursus elit imperdiet at. Etiam imperdiet turpis sed velit ornare sollicitudin. Curabitur eu lacinia orci, non auctor sem.",
    },
    {
      key: "2",
      label: "This is default size panel header",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis ullamcorper, vulputate massa eu, porttitor metus. Vestibulum sagittis egestas vulputate. Mauris id nibh sit amet justo vulputate dictum. Phasellus eleifend enim sollicitudin odio pulvinar ullamcorper. Sed tempus vitae erat eget mollis. Suspendisse imperdiet suscipit dolor, at cursus elit imperdiet at. Etiam imperdiet turpis sed velit ornare sollicitudin. Curabitur eu lacinia orci, non auctor sem.",
    },
    {
      key: "3",
      label: "This is default size panel header",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis ullamcorper, vulputate massa eu, porttitor metus. Vestibulum sagittis egestas vulputate. Mauris id nibh sit amet justo vulputate dictum. Phasellus eleifend enim sollicitudin odio pulvinar ullamcorper. Sed tempus vitae erat eget mollis. Suspendisse imperdiet suscipit dolor, at cursus elit imperdiet at. Etiam imperdiet turpis sed velit ornare sollicitudin. Curabitur eu lacinia orci, non auctor sem.",
    },
    {
      key: "4",
      label: "This is default size panel header",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis ullamcorper, vulputate massa eu, porttitor metus. Vestibulum sagittis egestas vulputate. Mauris id nibh sit amet justo vulputate dictum. Phasellus eleifend enim sollicitudin odio pulvinar ullamcorper. Sed tempus vitae erat eget mollis. Suspendisse imperdiet suscipit dolor, at cursus elit imperdiet at. Etiam imperdiet turpis sed velit ornare sollicitudin. Curabitur eu lacinia orci, non auctor sem.",
    },
  ];

  return (
    <BigTitleLayout title="FAQ">
      <div className="xl:max-w-380 m-auto pb-32 px-4 md:px-8 lg:px-32 flex flex-col gap-4">
        {faqList.map((item) => (
          <div className="[&_.ant-collapse]:rounded-2xl! [&_.ant-collapse]:bg-transparent! [&_.ant-collapse-content]:bg-transparent! [&_.ant-collapse-header]:font-bold [&_.ant-collapse-content]:rounded-b-2xl!">
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
