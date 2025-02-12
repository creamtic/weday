import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import InfinityFilm from "../../common/infinityFilm/InfinityFilm";
import useEmblaCarousel from "embla-carousel-react";
import { CUTE_FONT } from "@/constants/constant";
import "./PhotoGallery.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -60%)",
    padding: "0",
    border: "none",
    background: "none",
    overflow: "visible",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(5px)",
  },
};

type PhotoGalleryProps = {
  images: string[];
};

function PhotoGallery({ images = [] }: PhotoGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedDot, setSelectedDot] = useState<number>(0);
  const [modalAnimationClass, setModalAnimationClass] = useState<string>("");

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: selectedImageIndex || 0,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setSelectedDot(selectedIndex);
    };

    emblaApi.on("select", onSelect);

    return () => {
      void emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      setModalAnimationClass("modal-enter");
    }
  }, [selectedImageIndex]);

  const handleDotClick = (index: number) => {
    setSelectedDot(index % images.length);
    emblaApi?.scrollTo(index % images.length);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index % images.length);
    setSelectedDot(index % images.length);
    setTimeout(() => {
      emblaApi?.scrollTo(index % images.length);
    }, 1000);
  };

  return (
    <>
      <InfinityFilm images={images} onImageClick={handleImageClick} />

      <Modal isOpen={selectedImageIndex !== null} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
        <div className={`modal-container ${modalAnimationClass}`}>
          <div ref={emblaRef}>
            <div className="carousel-container items-center">
              {images.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image} alt={`carousel-image-${index}`} className="carousel-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute h-[100px] left-1/2 transform -translate-x-1/2">
          <div className="dot-nav">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${selectedDot === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <button
            className="close-button"
            onClick={closeModal}
            style={{ fontFamily: `${CUTE_FONT}`, fontSize: "1rem" }}
          >
            닫기
          </button>
        </div>
      </Modal>
    </>
  );
}

export default PhotoGallery;
