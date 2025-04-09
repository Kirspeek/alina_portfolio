import React, { useState } from "react";
import "../styles/components/Book.css";

interface BookProps {
  images: string[];
}

const Book: React.FC<BookProps> = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickX = e.nativeEvent.offsetX;
    const elementWidth = (e.target as HTMLDivElement).offsetWidth;
    const isLeftSide = clickX < elementWidth / 2;

    if (isLeftSide && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (!isLeftSide && currentPage < images.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="book-container">
      <div className="book-page-container">
        {images.map((image, index) => (
          <div
            key={image}
            className={`book-page ${index <= currentPage - 1 ? "flipped" : ""}`}
            style={{
              zIndex: images.length - index,
            }}
            onClick={index === currentPage ? handlePageClick : undefined}
          >
            <img src={image} alt={`Book page ${index + 1}`} draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
