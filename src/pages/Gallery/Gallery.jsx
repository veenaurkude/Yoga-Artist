import React, { useEffect } from "react";
import styles from "./Gallery.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

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
      duration: 1200, // Slower zoom-in
      offset: 100,
      easing: "ease-out", // Smooth, natural easing
      delay: 0,
      once: true,
    });
  }, []);

  return (
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
            
            <div
            className={styles.imageWrapper}
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 200}
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="top-center"
          >
            
            <img
              src={src}
              alt={`Artwork ${idx + 1}`}
              className={styles.image}
            />
            
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
