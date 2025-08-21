# 🔧 GitHub Pages 404 오류 해결방법

## ❌ 현재 문제
```
index-J1Ni7PPd.css:1  Failed to load resource: 404
index-DyzwMZOq.js:1   Failed to load resource: 404
```

## 🎯 원인
HTML에서 절대 경로(`/assets/`)를 사용해서 GitHub Pages가 파일을 찾지 못함

## ✅ 해결방법

### 수정된 index.html 파일:
```html
<script type="module" crossorigin src="./assets/index-DyzwMZOq.js"></script>
<link rel="stylesheet" crossorigin href="./assets/index-J1Ni7PPd.css">
```

**변경점**: `/assets/` → `./assets/`

---

## 📋 GitHub 업데이트 방법

### 방법 1: 파일 직접 수정
1. **GitHub 레포지토리**에서 `index.html` 파일 열기
2. **편집(연필) 아이콘** 클릭
3. **9-10번째 줄 수정:**
   - `/assets/index-DyzwMZOq.js` → `./assets/index-DyzwMZOq.js`
   - `/assets/index-J1Ni7PPd.css` → `./assets/index-J1Ni7PPd.css`
4. **"Commit changes"** 클릭

### 방법 2: 수정된 파일 재업로드
1. **수정된 `index.html` 다운로드** (아래 내용 복사)
2. GitHub에서 **기존 파일 삭제**
3. **새 파일 업로드**

---

## 📄 수정된 index.html (전체)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Code:wght@300..700&family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Oxanium:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <script type="module" crossorigin src="./assets/index-DyzwMZOq.js"></script>
    <link rel="stylesheet" crossorigin href="./assets/index-J1Ni7PPd.css">
  </head>
  <body>
    <div id="root"></div>
    <!-- This is a replit script which adds a banner on the top of the page when opened in development mode outside the replit environment -->
    <script type="text/javascript" src="https://replit.com/public/js/replit-dev-banner.js"></script>
  </body>
</html>
```

---

## ⏱ 적용 시간
수정 후 **1-3분**이면 GitHub Pages에 반영됩니다.

## 🎉 완료 확인
수정 후 페이지를 새로고침하면 프레젠테이션이 정상 작동합니다!