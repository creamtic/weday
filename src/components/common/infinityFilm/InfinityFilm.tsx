import React from "react";
import { styled } from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  overflow: hidden;
`;

const Slide = styled.ul`
  display: flex;
  position: relative;
  left: -100px;
  width: calc(10rem * 14);
  animation: autoPlay 25s linear infinite;

  @keyframes autoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-10rem * 7));
    }
  }

  & > li {
    width: 10rem;
    list-style: none;
    margin: 0 0.5rem 0 0.5rem;
  }

  /* 스타일 추가: 각 이미지를 둥근 필름 형태로 만들기 */
  & .image-container {
    width: 100%;
    height: 100%;
    aspect-ratio: 1; /* 가로세로 비율을 정사각형으로 설정 */
    overflow: hidden; /* 이미지가 넘칠 경우 잘라내기 */
    border-radius: 1rem; /* 둥근 모서리 */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* 그림자 */
    position: relative;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    scale: 1.5;
  }
`;

interface InfinityFilmProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const InfinityFilm: React.FC<InfinityFilmProps> = ({ images, onImageClick }) => {
  return (
    <View>
      <Slide>
        {images.concat(images).map((image, index) => (
          <li key={index} onClick={() => onImageClick(index)}>
            <div className="image-container">
              {/* 필름 형태의 이미지 컨테이너 추가 */}
              <img src={image} alt={`slide-${index}`} />
            </div>
          </li>
        ))}
      </Slide>
    </View>
  );
};

export default InfinityFilm;
