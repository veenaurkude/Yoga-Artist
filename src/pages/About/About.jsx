import React, { useEffect } from "react";
import styles from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import artistImg from "../../assets/images/artist.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
      easing: "ease-in-out",
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <section className={styles.aboutContainer}>
          <div
            className={styles.headerSection}
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h1>About Me</h1>
            <p>“Where creativity meets consciousness.”</p>
          </div>

          <div className={styles.aboutContent}>
            <div
              className={styles.textBlock}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2>Hi, I'm Vijayan Raman</h2>
              <p>
                I am an Artist, Yogacharya, Yogaratna, Motivational Guru, Face
                Reader, and recipient of the prestigious{" "}
                <strong>Lokmat Professional Icons Award</strong>. My journey is
                a fusion of vibrant creativity and ancient yogic wisdom — a
                celebration of expression, healing, and inner transformation.
              </p>

              <p>
                Through the years, I’ve had the honor to inspire thousands
                through my art and teachings. Whether it’s on canvas or in a
                meditative space, my goal is to create moments that spark
                awareness, beauty, and peace.
              </p>

              <p>
                Each artwork I create is not just a visual — it’s a vibration. I
                blend color, form, and energy to reflect the silent stories of
                the soul. My art is deeply rooted in the philosophy of yoga —
                balance, breath, and being.
              </p>

              <p>
                Thank you for visiting this space. May it awaken something
                beautiful in you.
              </p>
            </div>

            <div
              className={styles.imageBlock}
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Tilt>
                <img
                  src={artistImg}
                  alt="Artist Vijayan Raman"
                  loading="lazy"
                />
              </Tilt>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default React.memo(About);
