import { IMGLogo } from "@/assets";
import { Image } from "antd";

const Loader = () => {
  return (
    <div className="bg-white w-full h-screen flex items-center justify-center">
      <Image src={IMGLogo} width={128} height={128} className="animate-pulse" />
    </div>
  );
};

export default Loader;
