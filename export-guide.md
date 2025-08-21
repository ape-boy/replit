# 내부망 환경에서 프레젠테이션 사용 가이드

## 방법 1: 정적 빌드 파일 다운로드 (권장)

### 1. 프로젝트 빌드
현재 Replit에서 다음 명령어 실행:
```bash
npm run build
```

### 2. 빌드 파일 다운로드
- `dist/` 폴더 전체를 압축해서 다운로드
- 또는 Replit에서 프로젝트 전체를 ZIP으로 다운로드

### 3. 내부망 환경에서 실행
```bash
# 1. 압축 해제 후
cd your-project-folder

# 2. 간단한 HTTP 서버 실행 (여러 옵션 중 선택)
# Python 3
python -m http.server 8080 -d dist

# Node.js (serve 패키지)
npx serve dist

# 또는 Apache/Nginx 등에 dist 폴더 배포
```

## 방법 2: 전체 프로젝트 다운로드

### 1. 프로젝트 다운로드
- Replit에서 "Download as ZIP" 사용
- 또는 Git clone (가능한 경우)

### 2. 의존성 설치 및 실행
```bash
npm install
npm run dev
```

## 방법 3: PDF/PPTX 내보내기

### PDF로 내보내기
1. 프레젠테이션 우하단의 "PDF 내보내기" 버튼 클릭
2. 생성된 PDF 파일 다운로드
3. 내부망에서 PDF 뷰어로 발표

### PPTX로 내보내기
1. 프레젠테이션 우하단의 "PPTX 내보내기" 버튼 클릭
2. 생성된 PPTX 파일 다운로드
3. PowerPoint에서 발표

## 권장사항
- **PDF 내보내기**가 가장 간단하고 안정적
- 애니메이션이 필요하면 **정적 빌드** 방식 사용
- 내용 수정이 필요하면 **PPTX 내보내기** 후 PowerPoint에서 편집

## 내보내기 오류 해결
현재 내보내기 기능에서 빈 페이지가 나온다면:
1. 브라우저 개발자 도구(F12) > Console 탭에서 에러 확인
2. 팝업 차단 해제
3. 한 번에 많은 슬라이드 처리 시 브라우저가 느려질 수 있음