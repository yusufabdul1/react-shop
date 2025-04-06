
import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

const CustomCarousel: React.FC<CarouselProps> = ({ 
  children, 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const intervalId = setInterval(goToNext, interval);
    return () => clearInterval(intervalId);
  }, [currentIndex, isAutoPlaying, interval]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 text-volt-black rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 text-volt-black rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-volt-blue' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
