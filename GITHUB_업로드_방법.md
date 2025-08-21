# 🚀 https://github.com/ape-boy/replit에 코드 업로드하기

## ⚠️ Git 명령어 제한
Replit에서 Git 명령어가 제한되어 있어서 수동으로 업로드해야 합니다.

---

## 📥 방법 1: ZIP 다운로드 후 GitHub 업로드

### 1단계: Replit에서 파일 다운로드
1. **Replit 왼쪽 파일 탭에서 프로젝트 루트 우클릭**
2. **"Download as ZIP"** 선택
3. **압축파일 다운로드**

### 2단계: GitHub에 업로드  
1. **https://github.com/ape-boy/replit** 접속
2. **"Upload files"** 또는 **"Add file"** 클릭
3. **압축 해제 후 필요한 파일들 업로드:**

**배포용 파일들 (dist/public/):**
- `index.html`
- `assets/` 폴더 전체

**전체 소스코드:**
- 모든 파일 (client/, server/, shared/ 등)

---

## 📂 방법 2: 개별 파일 복사

### 중요 파일들을 GitHub에서 직접 생성:

1. **index.html** (dist/public/index.html 내용 복사)
2. **assets/index-*.css** (CSS 파일 내용 복사)  
3. **assets/index-*.js** (JavaScript 파일 내용 복사)
4. **assets/image_*.png** (팅커벨 이미지 업로드)

---

## 🎯 권장 업로드 구조

```
https://github.com/ape-boy/replit/
├── README.md (프로젝트 설명)
├── dist/
│   └── public/
│       ├── index.html
│       └── assets/
├── client/ (원본 소스)
├── server/ (원본 소스)  
├── package.json
└── ... (기타 파일들)
```

---

## 📋 업로드할 핵심 파일들

**배포용 (dist/public/):**
- ✅ `index.html` (2.2KB)
- ✅ `assets/index-*.css` (67KB) 
- ✅ `assets/index-*.js` (315KB)
- ✅ `assets/image_*.png` (306KB)

**소스코드:**
- ✅ `client/src/` 폴더 전체
- ✅ `server/` 폴더 전체
- ✅ `package.json`
- ✅ `README.md`

---

## 🔗 완료 후 접속 방법

업로드 완료 후:
1. **GitHub Pages 설정** (Settings → Pages)
2. **Source**: Deploy from branch (main)  
3. **Folder**: dist/public 또는 / (root)
4. **접속 URL**: `https://ape-boy.github.io/replit`

---

**지금 "Download as ZIP"으로 다운받아서 GitHub에 업로드하시면 됩니다!**