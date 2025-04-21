import React, { useEffect } from "react";
import styles from "./Gallery.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Import your artworks
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";
import img10 from "../../assets/images/img10.jpg";
import img11 from "../../assets/images/img11.jpg";
import img12 from "../../assets/images/img12.jpg";
import img13 from "../../assets/images/img13.jpg";
import img14 from "../../assets/images/img14.jpg";
import img15 from "../../assets/images/img15.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 150,
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
        <section className={styles.galleryContainer}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h2 className={styles.heading} data-aos="fade-down">
              Gallery
            </h2>
            <p className={styles.intro} data-aos="fade-up">
              A canvas of inner peace, passion, and vibrant expression.
            </p>

            <div className={styles.grid}>
              {images.map((src, idx) => (
                <motion.div
                className={styles.imageWrapper}
                key={idx}
                data-aos="flip-up"
                data-aos-delay={idx * 150}
                data-aos-duration="800"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={src}
                  alt={`Artwork ${idx + 1}`}
                  loading="lazy"
                  className={styles.image}
                />
              </motion.div>
              
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Gallery;
