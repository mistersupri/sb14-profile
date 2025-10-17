import { Footer, Loader, Navbar } from "@/components";
import type React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router";

const MainLayout: React.FC<
  React.PropsWithChildren<{ isLoading?: boolean }>
> = ({ children, isLoading }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
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
