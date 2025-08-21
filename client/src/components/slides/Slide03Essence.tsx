export default function Slide03Essence() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="slide-content max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">AI 학습 여정의 시작</h2>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="text-6xl mb-6">🤔</div>
          <h3 className="text-2xl font-semibold mb-4">처음엔 AI를 별개 분야로 생각했다</h3>
          <p className="text-lg text-gray-600">머신러닝, 딥러닝... 새로 배워야 할 것들이 너무 많아 보였음</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <i className="fas fa-times-circle text-red-500 text-3xl mb-3"></i>
            <h3 className="font-semibold mb-2 text-red-700">잘못된 접근</h3>
            <p className="text-sm text-red-600">AI = 전문 분야 = 따로 공부해야 함</p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <i className="fas fa-check-circle text-green-500 text-3xl mb-3"></i>
            <h3 className="font-semibold mb-2 text-green-700">깨달은 점</h3>
            <p className="text-sm text-green-600">AI = 도구 = 기존 지식에 추가</p>
          </div>
        </div>
      </div>
    </section>
  );
}