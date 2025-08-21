# 🔄 Replit에서 GitHub에 코드 올리기

## 🚀 방법 1: Replit Git 기능 사용 (가장 쉬움)

### 1단계: Replit에서 Git 연결
1. **Replit 왼쪽 사이드바**에서 **Version Control (Git 아이콘)** 클릭
2. **"Create a Git Repo"** 버튼 클릭
3. **"Connect to GitHub"** 선택
4. GitHub 계정으로 로그인
5. **레포지토리 이름**: `swdp-ai-presentation` 
6. **Public/Private** 선택
7. **"Create"** 클릭

### 2단계: 자동 업로드
- Replit이 자동으로 모든 파일을 GitHub에 업로드합니다
- **링크가 생성됩니다**: `https://github.com/당신의아이디/swdp-ai-presentation`

---

## 💻 방법 2: 수동 Git 명령어

### Shell에서 Git 초기화 및 업로드:
```bash
# Git 초기화 (처음 한 번만)
git init
git add .
git commit -m "SWDP AI Framework Presentation"

# GitHub 레포지토리 생성 후 (웹에서)
git remote add origin https://github.com/당신의깃헙아이디/swdp-ai-presentation.git
git branch -M main
git push -u origin main
```

---

## 🌐 GitHub에서 직접 업로드 (수동)

### 1단계: GitHub 레포지토리 생성
1. **GitHub.com** 접속
2. **"New repository"** 클릭
3. **Repository name**: `swdp-ai-presentation`
4. **Public** 선택
5. **"Create repository"** 클릭

### 2단계: 파일 업로드
1. **"uploading an existing file"** 클릭
2. **Replit에서 "Download as ZIP"**으로 프로젝트 다운로드
3. **압축 해제 후 `dist/public/` 폴더 내용만 업로드**

---

## 📍 최종 결과

업로드 완료 후 받게 될 링크들:
- **GitHub 레포지토리**: `https://github.com/당신의아이디/swdp-ai-presentation`
- **GitHub Pages 배포**: `https://당신의아이디.github.io/swdp-ai-presentation`

---

## ❗ 현재 상태

아직 Git이 설정되지 않은 상태입니다. 위 방법 중 하나를 선택하여 진행하시면 됩니다.

**추천**: Replit의 Git 기능을 사용하는 것이 가장 쉽습니다.