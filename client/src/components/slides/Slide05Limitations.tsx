export default function Slide05Limitations() {
  const limitations = [
    {
      title: "사용자 경험 문제",
      description: "또 다른 시스템을 학습해야 하는 부담",
      icon: "fas fa-user-times",
      color: "red"
    },
    {
      title: "데이터 단절",
      description: "SWDP 데이터와 분리되어 컨텍스트 부족",
      icon: "fas fa-unlink",
      color: "orange"
    },
    {
      title: "유지보수 비용",
      description: "별도 시스템의 운영 및 관리 오버헤드",
      icon: "fas fa-money-bill-wave",
      color: "yellow"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="slide-content max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-8">왜 실패했을까?</h2>
        
        <div className="space-y-8 mb-12">
          {limitations.map((limitation, index) => (
            <div key={index} className={`bg-${limitation.color}-50 border-l-4 border-${limitation.color}-500 p-6 rounded-lg`}>
              <div className="flex items-center mb-3">
                <i className={`${limitation.icon} text-${limitation.color}-600 text-2xl mr-4`}></i>
                <h3 className={`text-xl font-semibold text-${limitation.color}-800`}>{limitation.title}</h3>
              </div>
              <p className={`text-${limitation.color}-700 ml-10`}>{limitation.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gray-100 rounded-xl p-6">
            <i className="fas fa-lightbulb text-gray-500 text-4xl mb-4"></i>
            <p className="text-lg text-gray-600">기존 시스템과 통합되지 않은 AI는 의미가 없다</p>
          </div>
        </div>
      </div>
    </section>
  );
}