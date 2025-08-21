export default function Slide09Constraints() {
  const coreAgents = [
    { icon: "fas fa-file-alt", title: "주간보고 봇", description: "Jira 이슈 → 자동 주간보고" },
    { icon: "fas fa-comments", title: "VOC Agent", description: "반복 VOC 자동 처리" },
    { icon: "fas fa-tags", title: "릴리즈 노트 생성기", description: "Commit & 이슈 → 릴리즈 노트" },
    { icon: "fas fa-code", title: "API 가이드봇", description: "Swagger → 대화형 가이드" },
    { icon: "fas fa-receipt", title: "경비처리 도우미", description: "영수증 이미지 → JSON 변환" },
    { icon: "fas fa-sitemap", title: "Menu 가이드 & 공지 봇", description: "개인화된 네비게이션" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="slide-content max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">SWDP AI Framework 론칭</h2>
        <p className="text-center text-gray-600 mb-12">어쨌든 SWDP에 AI Framework를 붙였고 기획한 서비스를 론칭했다</p>
        
        <h3 className="text-2xl font-semibold text-center mb-8">7개 핵심 에이전트 소개</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreAgents.map((agent, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <i className={`${agent.icon} text-blue-500 text-2xl mr-3`}></i>
                <h4 className="text-lg font-semibold">{agent.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{agent.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg inline-block">
            <div className="flex items-center">
              <i className="fas fa-code text-yellow-600 mr-3"></i>
              <span className="font-semibold text-yellow-800">📍 기술 세미나 삽입 포인트</span>
            </div>
            <p className="text-sm text-yellow-700 mt-2">여기서 아키텍처 및 기술 상세 설명, 데모</p>
          </div>
        </div>
      </div>
    </section>
  );
}