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
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    background: "none",
    overflow: "visible",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // 어두운 색의 오버레이
    backdropFilter: "blur(5px)", // 배경 블러 처리
  },
};

type PhotoGalleryProps = {
  images: string[];
};

function PhotoGallery({ images = [] }: PhotoGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: selectedImageIndex! });
  const [selectedDot, setSelectedDot] = useState<number>(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedDot(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

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
        <div className="modal-container">
          <div ref={emblaRef}>
            <div className="carousel-container">
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
            style={{ fontFamily: `${CUTE_FONT}`, fontSize: "1.3rem" }}
          >
            닫기
          </button>
        </div>
      </Modal>
    </>
  );
}

export default PhotoGallery;
