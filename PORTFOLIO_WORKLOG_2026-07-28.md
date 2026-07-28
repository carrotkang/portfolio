# 강경근 개발자 포트폴리오 작업 기록

> 작성 기준일: 2026-07-28  
> 배포 주소: https://portfolio-carrotkang.vercel.app/  
> GitHub 저장소: https://github.com/carrotkang/portfolio

## 1. 현재 상태

- React + Vite + JavaScript 기반 단일 페이지 포트폴리오
- Tailwind CSS를 사용한 반응형 UI
- Vercel Hobby 플랜으로 배포
- GitHub `main` 브랜치에 push하면 Vercel에서 자동 재배포
- Google Analytics 4 연동 완료
- PC와 모바일 환경 대응
- 주요 색상은 파란색, 보조 색상은 보라색
- 기본 글꼴은 Pretendard

포트폴리오 자체는 Vercel에 배포하고, 포트폴리오 안에서 소개하는 프로젝트들은 Docker Hub 또는 Hugging Face 배포 자료를 연결하는 구조다.

## 2. 포트폴리오 구성

### 첫 화면

- `끝까지 구현하는 개발자 강경근` 문구
- 프로젝트 영역 이동 버튼
- GitHub 링크
- `PORTFOLIO / 26` 카드
- 페이지 최초 로딩 애니메이션

### 소개

- 약 7년간의 F&B 매장 운영 경험
- 웹 개발 및 제조 공정 개선 경험
- 현장 경험을 기술과 연결하는 개발자 방향성

### 경력 및 교육

- 에스에스케이: 후공정 자재 및 공정 개선
- 와이즈다임: Java 웹 개발
- 커피스미스, ZOO Coffee, 개인 로스터리 카페, 토프레소: 약 7년간 F&B 매장 운영 및 고객 경험
- 한국방송통신대학교: 컴퓨터과학과, 경영학 복수전공
- MBC 아카데미: 기업맞춤형 AI + X 융복합
- 코리아IT아카데미: Java 풀스택 개발

정확한 근무 기간이 기억나지 않는 카페 경력은 업체별 기간을 임의로 작성하지 않고, 전체 경력 약 7년으로 묶어 표현했다.

### 기술

- Backend & Web: Python, Flask, Java, Spring, REST API, SQL
- Frontend: React, JavaScript, HTML, CSS, Tailwind CSS
- AI & Data: Streamlit, scikit-learn, Whisper, OpenAI API, LLM
- Workflow: Git, GitHub, Docker, Figma

숙련도를 임의의 퍼센트 막대로 표현하지 않고, 기술을 어떤 상황에서 사용했는지 설명하는 방식으로 구성했다.

## 3. 팀 프로젝트

프로젝트는 최신순으로 표시한다.

| 순서 | 프로젝트 | 기간 | 핵심 내용 | 비고 |
|---|---|---|---|---|
| 1 | SportsMate | 2026.06.22 ~ 2026.07 | AI 챗봇 기반 스포츠 모임 탐색 및 일정 관리 | 팀장, AI 활용 |
| 2 | 3minute | 2026.05.21 ~ 2026.06.18 | AI 기반 환자 위험도 예측 및 이송 병원 추천 | AI 활용 |
| 3 | NETFLEX | 2026.04.06 ~ 2026.04.29 | 콘텐츠 탐색, 결제, 관리자 기능을 구현한 OTT 서비스 | 팀장 |

### SportsMate

- React, Flask, Supabase, OpenAI API, Docker
- 사용자의 관심 종목, 활동 지역, 일정을 이해하는 AI 챗봇
- 모임 검색, 날씨 안내, 실시간 채팅, 일정, 출석, 공지, 투표 기능
- 팀장으로서 역할 분담, 일정 조율, API 기준 정리, 진행 상황 관리 경험 강조
- GitHub: https://github.com/sagwajusu/sportsmate
- Figma: https://www.figma.com/board/HtaQCEbJj15lC0XwdSzFo1/sportsmate-%EC%82%AC%EA%B3%BC%EC%A3%BC%EC%8A%A4-
- 발표 자료: https://github.com/sagwajusu/sportsmate/blob/main/docs/sportsmate-presentation.pdf
- Docker Hub: https://hub.docker.com/r/carrotkang/sportsmate-frontend

SportsMate 발표 PDF는 GitHub 미리보기 제한을 고려해 25MB 이하로 압축한 파일을 사용한다.

### 3minute

- Python, Streamlit, scikit-learn, Whisper, OpenAI API
- 환자 정보, 활력징후, 음성 데이터를 분석해 pre-KTAS 예측
- 병상, 장비, 거리, ETA를 비교해 이송 후보 병원 추천
- GitHub: https://github.com/3minute-team/3minute-emergency
- Figma: https://www.figma.com/design/Szki3Fravfdu0Db5D6FKlh/3minute
- 발표 자료: https://github.com/3minute-team/3minute-emergency/blob/main/3minute-emergency.pdf
- Hugging Face: https://huggingface.co/spaces/carrotkang/3minute

### NETFLEX

- Python, Flask, JavaScript, SQLite, Bootstrap
- 콘텐츠 검색, 감상, 리뷰, 찜, 이어보기, 구독권 결제 및 관리자 기능
- 팀장으로서 업무 분배, 일정 관리, 팀원 간 의견 조율 및 개발 기준 정리 경험 강조
- 프로젝트 이름은 `NEXFLEX`가 아니라 `NETFLEX`
- GitHub: https://github.com/4flex-ott/teamproject_ott
- Figma: https://www.figma.com/board/EoXeIHtbOKuQUpiLbApMeH/OTT
- 발표 자료: https://github.com/4flex-ott/teamproject_ott/blob/develop/4flex.pdf
- Docker Hub: https://hub.docker.com/r/carrotkang/flask-4flex

## 4. 다음 프로젝트: BookPick AI

기존의 일반적인 작업 중 카드 대신, 실제로 기획한 다음 프로젝트를 표시한다.

- 프로젝트명: BookPick AI
- 주제: AI 기반 개인화 도서 추천 서비스
- 현재 상태: 요구사항 및 아키텍처 설계 완료
- 명세서 버전: v0.2
- 명세서 공개 주소: https://portfolio-carrotkang.vercel.app/docs/bookpick-ai-project-spec.pdf

### 강조할 기술 방향

BookPick AI는 기존 Python 중심 프로젝트와 달리 Java와 Python을 함께 사용하는 프로젝트다.

- Java 21 + Spring Boot
  - 서비스 핵심 백엔드
  - 인증, 도메인 로직, 공개 API
- Python 3.12 + FastAPI
  - AI 추천 및 분석 서버
  - 추천 모델, 리뷰 감성 분석
- React + TypeScript
- PostgreSQL + pgvector
- Docker

카드에는 `JAVA + PYTHON · AI FULL STACK`과 `DUAL-LANGUAGE ARCHITECTURE`를 표시해 두 언어를 역할에 맞게 활용한다는 점을 강조했다.

예정된 주요 기능:

- 도서 리뷰 감성 분석
- 검색, 조회, 관심 행동 기반 개인화 추천
- 트렌드 추천
- Spring AI Tool Calling 기반 자연어 도서 검색 및 챗봇

개발 단계는 실제 상태를 과장하지 않도록 다음과 같이 표시한다.

1. 요구사항·아키텍처: READY
2. 데이터·AI 검증: NEXT
3. MVP 구현·배포: PLANNED

## 5. 디자인 및 반응형 작업

- 초록색 중심이던 방향을 파란색 중심으로 변경
- 궁서체처럼 보이던 글꼴을 Pretendard로 변경
- 카드와 섹션에 파란색 및 보라색 계열 사용
- 화면을 내리면 요소가 좌우 또는 아래에서 나타나는 애니메이션 적용
- 다시 위로 올리면 나타난 방향의 반대로 사라지도록 처리
- 첫 화면에도 별도의 진입 애니메이션 적용
- `prefers-reduced-motion` 환경에서는 애니메이션 최소화

### 모바일 줄바꿈

한국어가 `이/유`, `돕/는`, `이/송`, `연결/한`처럼 글자 중간에서 어색하게 나뉘던 문제를 수정했다.

- 한국어는 띄어쓰기 단위로 줄바꿈
- 긴 영문은 필요한 경우 안전하게 줄바꿈
- 모바일에서 제목 크기와 카드 여백을 유동적으로 조정
- 320px, 360px, 399px, 430px 화면 폭에서 확인
- 첫 화면의 큰 제목이 좁은 화면을 밀어내던 문제 수정
- 320px 화면에서 상단 이메일과 전화번호 크기 및 간격 조정

## 6. 연락처

- 이메일: carrotkang@gmail.com
- 전화번호 표시: 010-9206-9174
- 전화 링크: `tel:01092069174`
- GitHub: https://github.com/carrotkang

전화 링크는 국제 형식 `+821092069174` 대신 국내 형식을 사용한다. 모바일에서 전화 버튼을 눌렀을 때 `010`으로 시작하는 번호가 표시되도록 상단과 하단 링크를 모두 수정했다.

## 7. Google Analytics 4

환경 변수 이름:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

실제 측정 ID는 Vercel 프로젝트의 Environment Variables에 등록되어 있다. 환경 변수 변경 후에는 반드시 Redeploy가 필요하다.

현재 추적 항목:

- 기본 페이지 조회
- 프로젝트 상세 열기: `view_project`
- GitHub, Figma, 발표 자료, Docker 또는 배포 링크 클릭: `project_link_click`
- 이메일, 전화번호, GitHub 연락처 클릭: `contact_click`

포트폴리오 화면에는 방문자 수를 직접 공개하지 않고, GA4 데이터를 포트폴리오 개선에 활용한다는 문구만 표시한다.

## 8. 로컬 실행 방법

```bash
npm install
npm run dev
```

개발 서버가 출력하는 Local 주소로 접속한다. 일반적으로 `http://localhost:5173`을 사용하며, 해당 포트가 사용 중이면 다른 포트가 자동 선택될 수 있다.

검사 명령:

```bash
npm run lint
npm run build
```

Docker는 포트폴리오 웹사이트 자체를 실행하기 위해 사용하지 않는다.

## 9. 배포 방법

1. 변경 사항을 확인한다.
2. `npm run lint`와 `npm run build`를 실행한다.
3. 변경 파일을 commit한다.
4. GitHub의 `main` 브랜치에 push한다.
5. Vercel 자동 배포가 완료되면 운영 주소에서 확인한다.

운영 주소:

```text
https://portfolio-carrotkang.vercel.app/
```

## 10. 주요 파일

```text
src/
├─ components/
│  ├─ Header.jsx
│  ├─ ProjectCard.jsx
│  ├─ ProjectModal.jsx
│  ├─ ScrollReveal.jsx
│  ├─ SectionTitle.jsx
│  └─ WorkInProgress.jsx
├─ data/
│  └─ projects.js
├─ lib/
│  └─ analytics.js
├─ sections/
│  ├─ About.jsx
│  ├─ Contact.jsx
│  ├─ Experience.jsx
│  ├─ Hero.jsx
│  ├─ Leadership.jsx
│  ├─ Projects.jsx
│  └─ Skills.jsx
├─ App.jsx
├─ index.css
└─ main.jsx

public/
└─ docs/
   └─ bookpick-ai-project-spec.pdf
```

## 11. 이후 작업 후보

- BookPick AI GitHub 저장소 생성 후 카드에 저장소 링크 추가
- BookPick AI 개발이 시작되면 `READY`, `NEXT`, `PLANNED` 상태 갱신
- 프로젝트별 실제 서비스 URL이 준비되면 상세 모달에 연결
- 프로젝트 화면 캡처 또는 시연 영상 추가 검토
- GA4 데이터가 쌓인 뒤 많이 조회되는 프로젝트와 버튼 클릭 흐름 분석
- 이력서 PDF 다운로드 기능 추가 검토

## 12. 작업 시 주의사항

- 프로젝트 순서는 최신순을 유지한다.
- NETFLEX 철자를 변경하지 않는다.
- SportsMate와 NETFLEX에서 팀장 경험을 유지한다.
- SportsMate와 3minute의 AI 활용 내용을 명확하게 보여준다.
- BookPick AI는 Java와 Python의 역할 분담을 강조한다.
- 완료되지 않은 기능을 완료된 것처럼 표현하지 않는다.
- 포트폴리오 웹사이트는 Vercel, 개별 프로젝트 배포 자료는 Docker Hub 또는 Hugging Face로 구분한다.
- 연락처 전화 링크는 국내 번호 형식을 유지한다.
