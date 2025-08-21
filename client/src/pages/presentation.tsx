import { useState, useEffect } from "react";
import SlideContainer from "@/components/SlideContainer";
import NavigationBar from "@/components/NavigationBar";
import SlideNavigation from "@/components/SlideNavigation";
import HelpModal from "@/components/HelpModal";

import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

export default function Presentation() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  const {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide,
    progress
  } = useSlideNavigation();

  useKeyboardNavigation({
    onNext: nextSlide,
    onPrev: prevSlide,
    onFullscreen: () => toggleFullscreen(),
    onHelp: () => setShowHelp(!showHelp)
  });

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleExport = () => {
    // TODO: Implement export functionality
    alert('내보내기 기능은 구현 예정입니다.');
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="min-h-screen bg-bg-light">
      <NavigationBar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        progress={progress}
        onFullscreen={toggleFullscreen}
        onExport={handleExport}
        isFullscreen={isFullscreen}
      />
      
      <main className={isFullscreen ? "pt-0" : "pt-20"}>
        <SlideContainer currentSlide={currentSlide} />
      </main>

      {!isFullscreen && (
        <>
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onNext={nextSlide}
            onPrev={prevSlide}
            onGoToSlide={goToSlide}
          />
          
          <div className="fixed bottom-8 right-8 z-50">
            <div className="bg-white rounded-full shadow-lg p-3">
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="p-2 text-gray-600 hover:text-primary transition-colors"
              >
                <i className="fas fa-keyboard text-xl"></i>
              </button>
            </div>
          </div>
        </>
      )}

      <HelpModal
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />
    </div>
  );
}
