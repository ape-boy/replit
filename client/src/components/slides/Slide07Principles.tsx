export default function Slide07Principles() {
  const problems = [
    { title: "요구사항이 구체적으로 없음", description: "서비스를 만드는게 쉽지 않음", icon: "fas fa-question" },
    { title: "외부 요인 리소스 문제", description: "LLM 호출 제한, Wiki 권한 등", icon: "fas fa-ban" },
    { title: "보수적인 사내 서비스 반응", description: "한번 써보고 마음에 안들면 다시 찾지 않음", icon: "fas fa-users" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="slide-content max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8">만들면서 맞닥뜨린 문제들</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">기술적 제약은 크지 않았으나...</p>
        
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 rounded-full p-3 mr-4">
                  <i className={`${problem.icon} text-yellow-600 text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">문제 {index + 1}: {problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-100 rounded-xl p-8">
            <i className="fas fa-hands-helping text-gray-500 text-4xl mb-4"></i>
            <p className="text-lg text-gray-600">결국 반쪽짜리 서비스밖에 되지 못하는 현실</p>
            <p className="text-sm text-gray-500 mt-2">이걸 어디 한탄할 수도 없고...</p>
          </div>
        </div>
      </div>
    </section>
  );
}