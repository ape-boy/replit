# GitHub 업로드 가이드

## 🚀 https://github.com/ringo-hik/SWDP-AI-Framework 레포지토리에 업로드하기

### 방법 1: Replit Git 연동 (추천)
1. Replit 좌측 **Git 아이콘** 클릭
2. **"Connect to existing repository"** 선택
3. Repository URL 입력: `https://github.com/ringo-hik/SWDP-AI-Framework`
4. **"Connect"** 클릭
5. 자동으로 모든 파일이 push됩니다

### 방법 2: 수동 업로드
GitHub 웹에서 직접 업로드:

1. **https://github.com/ringo-hik/SWDP-AI-Framework** 접속
2. **"uploading an existing file"** 클릭
3. 다음 파일들을 드래그해서 업로드:

#### 📁 필수 파일 목록:
```
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── components.json
├── drizzle.config.ts
├── replit.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── client/
│   ├── index.html
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── index.css
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       └── lib/
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
└── dist/
    └── public/
        ├── index.html
        └── assets/
            ├── index-BGArBM_9.js
            ├── index-BwREM4h4.css
            └── image_1755794482192-ZNKlFqMG.png
```

### 🎯 배포 결과:
- **코드 보기**: https://github.com/ringo-hik/SWDP-AI-Framework
- **프레젠테이션**: https://ringo-hik.github.io/SWDP-AI-Framework

GitHub Actions가 자동으로 빌드하고 배포합니다!