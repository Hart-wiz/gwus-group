import { useState, useEffect } from "react";

const ImageSlider = ({ images, article }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-full h-screen mx-auto overflow-hidden shadow-md">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-cover transition duration-500 ease-in-out"
      />

      {/* Article text overlay */}
      {article && (
        <div className="absolute bottom-16 left-1/4 max-md:left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-4 rounded-md max-w-xl  text-xl max-md:w-full">
          <h2 className="Font-extrabold ">Featuring cobol OIL & GAS</h2>
          <hr className="my-3 border-blue-400" />
          <p className="">{article[currentIndex]}</p>
        </div>
      )}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 text-5xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 text-5xl"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
