import React, { useEffect } from "react";
import styles from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import img15 from "../../assets/images/img15.jpg";
import img16 from "../../assets/images/img16.jpg";
import img17 from "../../assets/images/img17.jpg";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      delay: 0,
      once: true,
    });
  }, []);

  // Artwork data
  const artworks = [
    {
      src: img15,
      alt: "Painting 1",
    },
    {
      src: img16,
      alt: "Painting 2",
    },
    {
      src: img17,
      alt: "Painting 3",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <section className={styles.homeContainer}>
          <div className={styles.overlay}></div>
          <div className={styles.heroContent}>
            <h1
              className={styles.heading}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The Art of <br />
              <span className={styles.nameAccent}>Vijayan Raman</span>
            </h1>
            <p
              className={styles.subheading}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Awaken your inner spirit through brush, breath, and color.
            </p>
            <div className={styles.ctaContainer}>
              <Link
                to="/gallery"
                className={styles.ctaBtn}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Explore Gallery
              </Link>
              <Link
                to="/contact"
                className={styles.secondaryBtn}
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Contact Artist
              </Link>
            </div>

            <div
              className={styles.scrollHint}
              data-aos="bounce"
              data-aos-delay="1100"
            >
              <span>Scroll to Discover</span>
              <div className={styles.arrow}></div>
            </div>
          </div>
        </section>

        <section className={styles.artworkSection}>
          <h2
            className={styles.artworkHeading}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Featured Artworks
          </h2>
          <div
            className={styles.artworkGrid}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {artworks.map((artwork, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.4}
                className={styles.artworkCard}
                data-aos="zoom-out"
                data-aos-delay={500 + index * 100}
              >
                <div className={styles.artworkFrame}>
                  <img
                    src={artwork.src}
                    alt={artwork.alt}
                    className={styles.artworkImage}
                    loading="lazy"
                  />
                </div>
              </Tilt>
            ))}
          </div>
          <div
            className={styles.viewMoreContainer}
            style={{ position: "relative", zIndex: 2 }}
          >
            <Link
              to="/gallery"
              className={styles.viewMoreBtn}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              View More
            </Link>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
