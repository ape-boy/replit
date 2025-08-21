export default function Slide11TinkerBell() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="slide-content max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8">AI는 마법이 아니라 개발 도구</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Git, IDE, Compiler처럼 → AI는 기본 도구가 될 것</p>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">개발자 툴박스</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <i className="fab fa-git-alt text-4xl text-orange-600 mb-3"></i>
              <p className="font-semibold text-sm">Git</p>
              <p className="text-xs text-gray-600">버전 관리</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <i className="fas fa-code text-4xl text-blue-600 mb-3"></i>
              <p className="font-semibold text-sm">IDE</p>
              <p className="text-xs text-gray-600">코드 편집</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <i className="fas fa-cogs text-4xl text-green-600 mb-3"></i>
              <p className="font-semibold text-sm">Compiler</p>
              <p className="text-xs text-gray-600">코드 변환</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300">
              <i className="fas fa-brain text-4xl text-purple-600 mb-3"></i>
              <p className="font-semibold text-sm text-purple-700">AI</p>
              <p className="text-xs text-purple-600">지능형 도우미</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">이미 AI 없는 워크플로우는 생각할 수 없다</p>
            <p className="text-md text-gray-500 mt-2">결국 누가누가 잘 쓰나 싸움인 것</p>
            <p className="text-xl font-semibold text-purple-700 mt-6">팅커벨은 부활해야 한다</p>
          </div>
        </div>
      </div>
    </section>
  );
}