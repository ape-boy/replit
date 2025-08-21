import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToSlide: (slide: number) => void;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoToSlide
}: SlideNavigationProps) {
  const keySlides = [1, 2, 3, totalSlides];
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrev}
          disabled={currentSlide === 1}
          className="p-2 text-gray-600 hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex space-x-2">
          {keySlides.map((slide, index) => (
            <div key={slide} className="flex items-center">
              <button
                onClick={() => onGoToSlide(slide)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === slide
                    ? "bg-primary"
                    : "bg-gray-300 hover:bg-primary"
                }`}
              />
              {index < keySlides.length - 1 && index === 2 && (
                <span className="text-gray-400 text-sm mx-2">...</span>
              )}
            </div>
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="p-2 text-gray-600 hover:text-primary transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
