export default function Slide01Opening() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="slide-content text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <i className="fas fa-question-circle text-8xl text-primary opacity-20 float-animation"></i>
        </div>
        <h1 className="text-6xl font-bold gradient-text mb-6">
          왜 지금, SWDP에 AI인가?
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          AI 도입은 유행이 아니라,<br />우리가 겪고 있는 문제에서 출발합니다.
        </p>
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="text-4xl font-bold text-primary">SWDP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
