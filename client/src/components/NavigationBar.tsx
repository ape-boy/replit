import { Download, Expand, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationBarProps {
  currentSlide: number;
  totalSlides: number;
  progress: number;
  onFullscreen: () => void;
  onExport: () => void;
  isFullscreen: boolean;
}

export default function NavigationBar({
  currentSlide,
  totalSlides,
  progress,
  onFullscreen,
  onExport,
  isFullscreen
}: NavigationBarProps) {
  if (isFullscreen) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold text-primary">SWDP AI Framework</div>
          <div className="text-sm text-gray-600">
            슬라이드 {currentSlide} / {totalSlides}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onFullscreen}
            className="p-2 text-gray-600 hover:text-primary"
          >
            <Expand className="h-4 w-4" />
          </Button>
          <Button
            onClick={onExport}
            className="px-4 py-2 bg-primary text-white hover:bg-blue-600"
          >
            <Download className="h-4 w-4 mr-2" />
            내보내기
          </Button>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 h-1">
        <div 
          className="h-1 bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
}
