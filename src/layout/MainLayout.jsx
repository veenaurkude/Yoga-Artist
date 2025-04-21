import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 100,
      easing: "ease-in-out",
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <>
      <div className={styles.layoutContainer}>
        <Navbar />

        <main className={styles.mainContent}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Outlet />
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
