import { useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel data: Add your images here
  const images = [
    { src: 'https://via.placeholder.com/600x400', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/600x400', alt: 'Slide 3' }
  ];

  const updateCarousel = (index: number) => {
    if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else if (index >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-[400px]">
      {/* Carousel container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, idx) => (
          <div key={idx} className="min-w-full flex-shrink-0">
            <Image
              src='/AU21.svg'
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Previous/Next buttons */}
      <button
        onClick={() => updateCarousel(currentIndex - 1)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={() => updateCarousel(currentIndex + 1)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
