export default function Slide06NewStrategy() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="slide-content max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8">해결책: SWDP 도메인 지식 + Langchain-like Framework</h2>
        <p className="text-xl text-center text-gray-600 mb-12">그동안의 노하우를 바탕으로 SWDP 위에 AI 레이어 구축</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <i className="fas fa-brain text-blue-500 text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold">도메인 지식 활용</h3>
              </div>
              <p className="text-gray-600">SWDP에 대한 깊은 이해를 AI 프레임워크에 녹여냄</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <i className="fas fa-code text-green-500 text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold">Vue + AI Framework</h3>
              </div>
              <p className="text-gray-600">바이브코딩과 최신 코딩툴로 프론트엔드, 백엔드는 직접 구현</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <i className="fas fa-plug text-purple-500 text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold">기존 시스템 통합</h3>
              </div>
              <p className="text-gray-600">SWDP와 완벽하게 연동되는 AI 서비스</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <i className="fas fa-lightbulb text-yellow-500 text-6xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">핵심 아이디어</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-sm">기존 UX 유지</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-sm">학습 곡선 최소화</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span className="text-sm">점진적 확장</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}