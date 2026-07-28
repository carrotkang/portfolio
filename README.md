# 강경근 | Developer Portfolio

React, Vite, JavaScript, Tailwind CSS로 구성한 반응형 개발자 포트폴리오입니다.

## 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

프로젝트 콘텐츠는 `src/data`의 JavaScript 파일에서 관리합니다. 현재 프로젝트와 연락처 일부는 실제 자료를 전달받기 전까지 교체용 초안으로 표시되어 있습니다.

## Google Analytics 4

`.env.example`을 복사해 `.env.local`을 만들고 Google Analytics 측정 ID를 입력합니다.

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

측정 ID가 설정된 환경에서만 Google Analytics 스크립트가 로드됩니다. 기본 페이지 조회와 프로젝트 상세 열기, 프로젝트 링크, 연락처 클릭 이벤트를 수집합니다.
