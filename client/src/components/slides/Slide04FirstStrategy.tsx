export default function Slide04FirstStrategy() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="slide-content max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8">첫 번째 시도: 별도 AI 서비스</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">SWDP와 독립된 AI 플랫폼을 만들어보자</p>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-center mb-6">계획했던 아키텍처</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <i className="fas fa-desktop text-3xl text-blue-600 mb-3"></i>
              <h4 className="font-semibold">웹 인터페이스</h4>
              <p className="text-sm text-gray-600">사용자 친화적 UI</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <i className="fas fa-brain text-3xl text-green-600 mb-3"></i>
              <h4 className="font-semibold">AI 엔진</h4>
              <p className="text-sm text-gray-600">LLM 통합</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <i className="fas fa-database text-3xl text-purple-600 mb-3"></i>
              <h4 className="font-semibold">데이터베이스</h4>
              <p className="text-sm text-gray-600">독립 저장소</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg inline-block">
            <i className="fas fa-exclamation-triangle text-yellow-600 mr-2"></i>
            <span className="text-yellow-800 font-semibold">결과: 실패</span>
          </div>
        </div>
      </div>
    </section>
  );
}