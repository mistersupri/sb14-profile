import { Footer, Loader, Navbar } from "@/components";
import type React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet-async";
import { getEnv } from "@/config/env.config";
import { toTitleCase } from "@/utils";

const meta = {
  title: "SDN Sumur Batu 14",
  description:
    "SDN Sumur Batu 14 Jakarta Pusat adalah sekolah dasar negeri yang berkomitmen membentuk generasi cerdas, berkarakter, dan berprestasi. Temukan informasi terbaru tentang kegiatan belajar, pendaftaran siswa baru, dan berita sekolah di website resmi kami.",
  image: "/logo.png",
  url: getEnv().BASE_URL,
};

const MainLayout: React.FC<
  React.PropsWithChildren<{ isLoading?: boolean; title?: string }>
> = ({ children, title, isLoading }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>
          {title ? `${toTitleCase(title)} | ${meta.title}` : meta.title}
        </title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />

        {/* Open Graph for Facebook, LinkedIn */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter Card */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Helmet>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed left-0 top-0 w-full z-100"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
