// PhotoGallery.tsx
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import InfinityFilm from "../../common/infinityFilm/InfinityFilm";
import { styled } from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import { CUTE_FONT } from "@/constants/constant";

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
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // 어두운 색의 오버레이
    backdropFilter: "blur(5px)", // 배경 블러 처리
  },
};

const DotNav = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? "white" : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 35px;
  background-color: rgb(145 130 130 / 70%);
  border-radius: 9999px;
  font-size: 13px;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: black;
  }
`;

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

      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false} // 모달에서 app의 숨김 처리 방지
      >
        <div className="relative w-[80vw] h-[90vh] overflow-hidden">
          {/* Embla Carousel - 이미지 리스트를 캐러셀로 표시 */}
          <div ref={emblaRef} className="w-full h-[80vh]">
            <div className="flex w-full h-full">
              {images.map((image, index) => (
                <div key={index} className="flex-none w-full h-full">
                  <img
                    src={image}
                    alt={`carousel-image-${index}`}
                    className="w-full h-full object-contain" // 이미지를 비율에 맞게 조정
                  />
                </div>
              ))}
            </div>
          </div>

          <DotNav>
            {images.map((_, index) => (
              <Dot key={index} $active={selectedDot === index} onClick={() => handleDotClick(index)} />
            ))}
          </DotNav>

          <CloseButton onClick={closeModal} style={{ fontFamily: `${CUTE_FONT}`, fontSize: "1rem" }}>
            닫기
          </CloseButton>
        </div>
      </Modal>
    </>
  );
}

export default PhotoGallery;
