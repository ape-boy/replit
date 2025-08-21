export default function Slide12Perspective() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="slide-content max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8">SWDP AI ChatOps v1.0</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">지금까지의 시도와 결과물이 집약된 첫 버전</p>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="bg-gray-100 rounded-xl p-12 text-center">
            <i className="fas fa-desktop text-6xl text-gray-400 mb-4"></i>
            <p className="text-gray-500 text-lg">서비스 스크린샷 영역</p>
            <p className="text-gray-400 text-sm mt-2">실제 ChatOps 인터페이스 이미지</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <i className="fas fa-robot text-3xl text-blue-600 mb-3"></i>
            <h3 className="font-semibold mb-2">7개 AI 어시스턴트</h3>
            <p className="text-sm text-gray-600">전문화된 업무 지원</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <i className="fas fa-comments text-3xl text-green-600 mb-3"></i>
            <h3 className="font-semibold mb-2">자연어 인터페이스</h3>
            <p className="text-sm text-gray-600">직관적인 대화형 UI</p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <i className="fas fa-plug text-3xl text-purple-600 mb-3"></i>
            <h3 className="font-semibold mb-2">기존 시스템 통합</h3>
            <p className="text-sm text-gray-600">SWDP 완벽 연동</p>
          </div>
        </div>
      </div>
    </section>
  );
}