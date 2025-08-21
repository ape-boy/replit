import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>키보드 단축키</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>다음 슬라이드</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">→</kbd>
          </div>
          <div className="flex justify-between">
            <span>이전 슬라이드</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←</kbd>
          </div>
          <div className="flex justify-between">
            <span>전체화면</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">F</kbd>
          </div>
          <div className="flex justify-between">
            <span>도움말</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">?</kbd>
          </div>
        </div>
        
        <Button onClick={onClose} className="w-full mt-6">
          닫기
        </Button>
      </DialogContent>
    </Dialog>
  );
}
