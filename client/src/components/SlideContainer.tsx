import Slide01Opening from "./slides/Slide01Opening";
import Slide02Problems from "./slides/Slide02Problems";
import Slide03Essence from "./slides/Slide03Essence";
import ChapterTransition from "./ChapterTransition";
import Slide04FirstStrategy from "./slides/Slide04FirstStrategy";
import Slide05Limitations from "./slides/Slide05Limitations";
import Slide06NewStrategy from "./slides/Slide06NewStrategy";
import Slide07Principles from "./slides/Slide07Principles";
import Slide08Assistants from "./slides/Slide08Assistants";
import Slide09Constraints from "./slides/Slide09Constraints";
import Slide10FrameworkGap from "./slides/Slide10FrameworkGap";
import Slide11TinkerBell from "./slides/Slide11TinkerBell";
import Slide12Perspective from "./slides/Slide12Perspective";



interface SlideContainerProps {
  currentSlide: number;
}

export default function SlideContainer({ currentSlide }: SlideContainerProps) {
  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide01Opening />;
      case 2:
        return <Slide02Problems />;
      case 3:
        return <Slide03Essence />;
      case 4:
        return <ChapterTransition 
          title="첫 시도와 실패" 
          subtitle="별도 AI 서비스를 만들려 했던 이유와 그 한계"
          icon="fas fa-exclamation-triangle"
          bgColor="from-red-50 to-orange-50"
          iconColor="text-warning"
        />;
      case 5:
        return <Slide04FirstStrategy />;
      case 6:
        return <Slide05Limitations />;
      case 7:
        return <ChapterTransition 
          title="방향 전환" 
          subtitle="SWDP 위의 AI"
          icon="fas fa-lightbulb"
          bgColor="from-green-50 to-blue-50"
          iconColor="text-success"
        />;
      case 8:
        return <Slide06NewStrategy />;
      case 9:
        return <Slide07Principles />;
      case 10:
        return <ChapterTransition 
          title="PoC와 실제 적용 사례" 
          subtitle="7개 AI 어시스턴트의 탄생"
          icon="fas fa-rocket"
          bgColor="from-purple-50 to-pink-50"
          iconColor="text-purple-500"
        />;
      case 11:
        return <Slide08Assistants />;
      case 12:
        return <ChapterTransition 
          title="배운 점과 한계" 
          subtitle="현실적 제약과 해결 방법"
          icon="fas fa-chart-line"
          bgColor="from-yellow-50 to-orange-50"
          iconColor="text-secondary"
        />;
      case 13:
        return <Slide09Constraints />;
      case 14:
        return <Slide12Perspective />;
      case 15:
        return <Slide11TinkerBell />;
      case 16:
        return <ChapterTransition 
          title="팅커벨 이야기" 
          subtitle="박수가 있어야 살아나는 캐릭터"
          icon="fas fa-magic"
          bgColor="from-purple-100 via-pink-100 to-yellow-100"
          iconColor="text-pink-400"
          customContent={
            <div className="relative">
              <i className="fas fa-magic text-8xl text-pink-400 opacity-40 float-animation"></i>
              <div className="absolute -top-2 -right-2">
                <i className="fas fa-star text-2xl text-yellow-400 animate-pulse"></i>
              </div>
            </div>
          }
        />;
      case 17:
        return <Slide10FrameworkGap />;
      default:
        return <Slide01Opening />;
    }
  };

  return (
    <div className="slide min-h-screen">
      <div id={`slide-${currentSlide}`}>
        {renderSlide()}
      </div>
    </div>
  );
}
