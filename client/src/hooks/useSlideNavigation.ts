import { useState, useCallback } from "react";

export function useSlideNavigation() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 17;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  }, [totalSlides]);

  const progress = (currentSlide / totalSlides) * 100;

  return {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide,
    progress
  };
}
