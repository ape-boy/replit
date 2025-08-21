# GitHub Pages 배포 가이드

## 📁 배포할 파일들
현재 `dist/public/` 폴더에 있는 모든 파일들이 배포 대상입니다:
- `index.html` - 메인 HTML 파일
- `assets/` - CSS, JS 번들 파일들
- `attached_assets/` - 팅커벨 이미지 등 리소스

## 🚀 GitHub Pages 배포 방법

### 방법 1: 직접 업로드 (추천)

1. **새 레포지토리 생성**
   ```
   레포지토리명: swdp-ai-presentation (또는 원하는 이름)
   Public/Private: 회사 정책에 따라
   ```

2. **dist/public 폴더 내용만 업로드**
   - `dist/public/` 안의 모든 파일을 레포지토리 root에 업로드
   - **중요**: `public` 폴더 자체가 아니라 그 안의 내용만!

3. **GitHub Pages 설정**
   ```
   Settings → Pages → Source: Deploy from a branch
   Branch: main (또는 master)
   Folder: / (root)
   ```

### 방법 2: GitHub Actions 자동화

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/deploy-pages@v3
        with:
          folder: dist/public
```

## 📂 파일 구조 예시
```
your-repo/
├── index.html                    # dist/public/index.html
├── assets/
│   ├── index-CM_b8jfN.css       # 스타일
│   ├── index-C-uLg6LR.js        # 메인 번들
│   └── ...
└── attached_assets/
    └── image_1755794482192.png   # 팅커벨 이미지
```

## 🔗 접속 URL
배포 후 접속 주소:
```
https://your-username.github.io/swdp-ai-presentation
```

## ✅ 배포 확인 사항
- [ ] 모든 슬라이드가 정상 표시
- [ ] 팅커벨 이미지 로딩 확인
- [ ] 키보드 네비게이션 작동 (←→ 키)
- [ ] 전체화면 모드 작동 (F11)
- [ ] PPTX/PDF 내보내기 버튼 작동

## 🎯 내부망에서 발표하기
1. GitHub Pages로 배포
2. 내부망에서 해당 URL에 접속
3. 프레젠테이션 모드로 발표
4. 또는 PDF 내보내기해서 오프라인 사용

이 방법이 가장 깔끔하고 안정적입니다!