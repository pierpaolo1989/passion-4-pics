import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "assets/images/dsc-0475-2-1108x739.jpg", author: "@user1" },
  { src: "assets/images/whatsapp-image-2021-03-18-at-15.23.47-1080x720.jpg", author: "@user2" },
  { src: "assets/images/dsc-303-2048x1366.jpg", author: "@user3" },
  { src: "assets/images/dsc-232-2048x1366.jpg", author: "@user4" },
  { src: "assets/images/DSCF9365.jpg", author: "@user5" },
  { src: "assets/images/DSCF9279.jpg", author: "@user8" },
  { src: "assets/images/DSCF8873.jpg", author: "@user7" },
  { src: "assets/images/DSCF9021.jpg", author: "@user6" },
];

function GalleryCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleImages = images.slice(startIndex, startIndex + 4);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? images.length - 4 : prev - 4));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 4 >= images.length ? 0 : prev + 4));
  };

  const handleImageLoad = () => {
  };

  return (
    <>
      <div className="align-center mb-0">
        <button className="absolute left-4 text-4xl btn-primary" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="absolute left-4 text-4xl btn-primary m-2" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="row mt-4">

        {visibleImages.map((image, index) => (
            <motion.div
              key={index}
              className="item features-image col-12 col-md-6 col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="item-wrapper">
                <div className="item-img">
                  <img src={image.src} alt={image.author} onLoad={handleImageLoad} />
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </>
  );
}

export default GalleryCarousel;
