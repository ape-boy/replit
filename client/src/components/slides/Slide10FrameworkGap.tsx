import tinkerbell from '@assets/image_1755794482192.png';

export default function Slide10FrameworkGap() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="slide-content max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">팅커벨은 부활해야 한다</h2>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="mb-6">
            <img 
              src={tinkerbell} 
              alt="Tinker Bell" 
              className="w-80 h-80 mx-auto rounded-lg shadow-md object-contain"
              onError={(e) => {
                console.log('팅커벨 이미지 로드 실패');
              }}
            />
            <div className="flex justify-center space-x-2 mt-4">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
            </div>
          </div>
          <p className="text-lg text-gray-600 italic mb-6">
            "믿지 않고 박수치지 않으면 연극은 끝나지 않는다"
          </p>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
            <p className="text-purple-700 font-semibold">
              AI 시대가 온다고 믿고 박수 쳐야 연극은 진행된다
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-3">
              <i className="fas fa-code text-gray-400 text-2xl mr-4"></i>
              <span className="text-lg font-semibold text-gray-600">피드백 없는 AI</span>
            </div>
            <p className="text-gray-600 text-sm">그냥 코드 덩어리</p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-3">
              <i className="fas fa-heart text-pink-500 text-2xl mr-4"></i>
              <span className="text-lg font-semibold text-pink-700">피드백 받는 AI</span>
            </div>
            <p className="text-pink-700 text-sm font-semibold">진짜 도구가 됨</p>
          </div>
        </div>
      </div>
    </section>
  );
}