import { useEffect } from "react";

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  onFullscreen: () => void;
  onHelp: () => void;
}

export function useKeyboardNavigation({
  onNext,
  onPrev,
  onFullscreen,
  onHelp
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          onFullscreen();
          break;
        case '?':
          e.preventDefault();
          onHelp();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onFullscreen, onHelp]);
}
