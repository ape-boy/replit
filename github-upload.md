# 🚨 GitHub 업로드 해결 방법

## 문제: Replit Git 연동 오류
`Error (UNKNOWN) adding origin` 오류 발생

## ✅ 해결 방법: GitHub 웹에서 직접 업로드

### 1. GitHub 레포지토리 준비
- 이미 생성됨: `https://github.com/ringo-hik/SWDP-AI-Framework`
- 현재 비어있는 상태

### 2. 수동 업로드 단계별 가이드

#### A. 메인 파일들 업로드:
1. GitHub 레포지토리 접속
2. "uploading an existing file" 클릭
3. 다음 파일들 드래그 업로드:
   - `package.json`
   - `package-lock.json` 
   - `README.md`
   - `tsconfig.json`
   - `vite.config.ts`
   - `tailwind.config.ts`

#### B. 폴더별 업로드:
1. **dist/public/** 폴더 (배포 파일들)
2. **client/src/** 폴더 (소스코드)
3. **server/** 폴더 (백엔드)
4. **.github/workflows/** 폴더 (GitHub Actions)

### 3. GitHub Pages 설정
- Settings → Pages
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

## 🎯 최종 결과
- 코드: https://github.com/ringo-hik/SWDP-AI-Framework
- 프레젠테이션: https://ringo-hik.github.io/SWDP-AI-Framework

## 📦 업로드할 주요 파일 목록:
- `dist/public/index.html`
- `dist/public/assets/index-BGArBM_9.js`
- `dist/public/assets/index-BwREM4h4.css`
- `dist/public/assets/image_1755794482192-ZNKlFqMG.png`
- 모든 client/src/ 파일들
- 모든 server/ 파일들