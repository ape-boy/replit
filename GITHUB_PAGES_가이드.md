# 🚀 GitHub Pages 배포 완벽 가이드

## 📁 현재 준비된 파일들 
`dist/public/` 폴더에 있는 최종 배포 파일들:
- ✅ `index.html` - 메인 HTML 파일
- ✅ `assets/index-*.css` - 스타일시트
- ✅ `assets/index-*.js` - JavaScript 번들  
- ✅ `assets/image_1755794482192-*.png` - 팅커벨 이미지 (305KB)

---

## 🔥 Step 1: GitHub 레포지토리 생성

**내부 GitHub Enterprise에서:**

1. **새 레포지토리 생성** 버튼 클릭
2. **레포지토리 이름**: `swdp-ai-presentation` 
3. **공개 설정**: Public (Pages 기능 사용 위해 필수)
4. **초기화**: README, .gitignore, license 체크 안함
5. **Create repository** 클릭

---

## 📂 Step 2: 파일 업로드 

### 방법 A: 웹 인터페이스 (추천 - 쉬움)

1. 생성된 레포지토리 페이지에서
2. **"uploading an existing file"** 클릭  
3. `dist/public/` 폴더를 열어서
4. **모든 파일을 선택**해서 드래그&드롭
   - `index.html`
   - `assets` 폴더 전체

5. **업로드 후 파일 구조 확인:**
   ```
   swdp-ai-presentation/
   ├── index.html          ← 레포지토리 루트에 있어야 함
   └── assets/
       ├── index-*.css
       ├── index-*.js  
       └── image_1755794482192-*.png
   ```

6. **Commit message**: "Add SWDP AI Framework presentation"
7. **Commit new files** 클릭

### 방법 B: Git 명령어 (고급 사용자용)

```bash
# 레포지토리 클론
git clone https://your-github-enterprise.com/username/swdp-ai-presentation.git
cd swdp-ai-presentation

# Replit에서 dist/public 내용을 여기에 복사
# (또는 ZIP 다운로드 후 압축 해제)

# Git에 추가
git add .
git commit -m "Add SWDP AI Framework presentation"
git push origin main
```

---

## ⚙️ Step 3: GitHub Pages 활성화

1. **레포지토리 Settings** 탭 이동
2. 왼쪽 사이드바에서 **"Pages"** 클릭
3. **Source 설정:**
   - Source: **"Deploy from a branch"**
   - Branch: **"main"** (또는 master)
   - Folder: **"/ (root)"**
4. **"Save"** 버튼 클릭

---

## 🌐 Step 4: 접속 확인

**배포 완료 후 (보통 1-3분):**

1. Pages 설정 페이지에서 
2. **"Your site is published at"** 메시지 확인
3. **접속 URL**: 
   ```
   https://your-username.github.io/swdp-ai-presentation
   ```

**첫 접속 시 확인사항:**
- ✅ 메인 페이지 로딩
- ✅ 화살표 키 네비게이션 작동
- ✅ 팅커벨 이미지 표시
- ✅ 모든 슬라이드 정상 작동

---

## 🛠 문제 해결

### 404 에러가 나는 경우:
1. 파일이 레포지토리 **루트**에 있는지 확인
2. `index.html`이 **대소문자 정확**한지 확인  
3. Pages 설정에서 **Branch가 main**인지 확인

### 이미지가 안 보이는 경우:
1. `assets` 폴더가 업로드되었는지 확인
2. 팅커벨 이미지 파일이 assets 안에 있는지 확인

### CSS/JS가 안 적용되는 경우:
1. `assets` 폴더 안의 모든 파일이 업로드되었는지 확인
2. 브라우저 캐시 삭제 후 새로고침

---

## ✅ 배포 완료 체크리스트

- [ ] GitHub 레포지토리 생성 완료
- [ ] `dist/public/` 모든 파일 업로드 완료
- [ ] 파일 구조 확인: `index.html`이 루트에 있음
- [ ] GitHub Pages 설정 완료
- [ ] 접속 URL에서 정상 작동 확인
- [ ] 내부망에서 접속 테스트 완료

---

**🎉 이제 내부망 어디서든 브라우저로 접속해서 발표할 수 있습니다!**