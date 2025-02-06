import React from "react";
import "./InfinityFilm.css";

interface InfinityFilmProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const InfinityFilm = ({ images, onImageClick }: InfinityFilmProps) => {
  return (
    <div className="view">
      <ul className="slide">
        {images.concat(images).map((image, index) => (
          <li key={index} onClick={() => onImageClick(index)}>
            <div className="image-container">
              <img src={image} alt={`slide-${index}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfinityFilm;
