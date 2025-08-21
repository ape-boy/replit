export default function Slide02Problems() {
  const problems = [
    {
      icon: "fas fa-clock",
      title: "반복 업무",
      description: "주간보고, VOC 처리, 릴리즈 노트 작성",
      color: "text-red-500"
    },
    {
      icon: "fas fa-search",
      title: "정보 찾기",
      description: "API 문서, 메뉴 구조, 시스템 가이드",
      color: "text-orange-500"
    },
    {
      icon: "fas fa-code",
      title: "개발 생산성",
      description: "코드 리뷰, 테스트 케이스, 문서화",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="slide-content max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8">개발팀이 직면한 문제들</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">AI로 해결할 수 있을 것 같은 것들</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
              <i className={`${problem.icon} ${problem.color} text-4xl mb-4`}></i>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-blue-50 rounded-xl p-6 inline-block">
            <i className="fas fa-lightbulb text-blue-500 text-3xl mb-3"></i>
            <p className="text-blue-700 font-semibold">AI가 이런 문제들을 해결해줄 수 있지 않을까?</p>
          </div>
        </div>
      </div>
    </section>
  );
}