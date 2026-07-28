export const projects = [
  {
    title: 'NETFLEX',
    summary: '콘텐츠 탐색부터 결제·관리까지 연결한 OTT 웹 서비스',
    description:
      '실제 OTT 서비스 구조를 바탕으로 콘텐츠 검색과 감상, 리뷰, 찜, 이어보기, 구독권 결제와 관리자 운영 기능을 구현한 Flask 기반 웹 애플리케이션입니다.',
    period: '2026.04.06 — 2026.04.29',
    team: '4인 팀 프로젝트',
    role: '팀장',
    type: 'OTT Web Service',
    tech: ['Python', 'Flask', 'JavaScript', 'SQLite', 'Bootstrap'],
    color: 'bg-[#2563eb]',
    challenge:
      '소셜 로그인 계정 통합부터 시청·리뷰·찜 상태, 결제 내역과 관리자 기능까지 서로 연결되는 데이터를 일관된 구조로 관리해야 했습니다.',
    contribution:
      '팀장으로서 요구사항을 기능 단위로 정리하고 역할 분담과 일정·진척 상황을 관리했으며, 팀원 간 의견 조율과 최종 기능 통합을 이끌었습니다. 직접 데이터베이스 설계와 이용약관, 콘텐츠 서브 페이지, 마이페이지, 고객센터 페이지를 담당했습니다.',
    features: [
      '카카오·네이버 소셜 로그인과 계정 통합',
      '추천 콘텐츠, 에피소드, 리뷰·별점·찜·이어보기',
      '구독권 결제와 시청·구매·문의 내역 관리',
      '회원·콘텐츠·문의·공지사항 관리자 기능',
    ],
    outcome:
      '사용자 활동이 여러 화면에서 끊김 없이 이어지도록 데이터 구조와 조회 흐름을 설계하며, 복합 서비스에서 DB 설계가 사용자 경험의 기반이 된다는 점을 배웠습니다.',
    links: [
      {
        label: 'GitHub',
        type: 'github',
        url: 'https://github.com/4flex-ott/teamproject_ott',
      },
      {
        label: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/board/EoXeIHtbOKuQUpiLbApMeH/OTT?node-id=0-1&t=Lx00cT5FTRdjd0P0-1',
      },
      {
        label: '발표자료',
        type: 'presentation',
        url: 'https://github.com/4flex-ott/teamproject_ott/blob/develop/4flex.pdf',
      },
      {
        label: 'Docker Hub',
        type: 'docker',
        url: 'https://hub.docker.com/r/carrotkang/flask-4flex',
      },
    ],
  },
  {
    title: '3minute',
    highlight: 'AI POWERED',
    summary: 'AI가 환자 위험도를 예측하고 이송 병원을 추천하는 시스템',
    description:
      '머신러닝과 생성형 AI를 활용해 환자 정보·활력징후·음성 데이터를 분석하고 pre-KTAS를 예측한 뒤, 실시간 병상·장비·거리·ETA를 비교해 이송 후보 병원을 추천하는 응급의료 관제 시스템입니다.',
    period: '2026.05.21 — 2026.06.18',
    team: '3인 팀 프로젝트',
    type: 'AI · Emergency Medical',
    tech: ['Python', 'Streamlit', 'scikit-learn', 'Whisper', 'OpenAI API'],
    color: 'bg-[#7c3aed]',
    challenge:
      'Whisper·GPT·예측 모델과 의료·지도 API가 함께 동작하는 환경에서, 외부 서비스 장애나 API Key 부재가 발생해도 AI 분석과 전체 시연 흐름이 중단되지 않아야 했습니다.',
    contribution:
      'pre-KTAS 앱 구조 정리, 음성 혈압 파싱 보완, 모니터링 UI 개선, Hugging Face Docker 배포와 발표 자료 정리를 담당했습니다.',
    features: [
      '환자 정보와 활력징후 기반 pre-KTAS 예측',
      'Whisper 전사와 GPT 기반 환자 정보 구조화',
      '공공데이터 기반 실시간 병원 자원 조회',
      '거리·ETA·장비 적합도를 반영한 병원 추천',
    ],
    outcome:
      '실제 입력 시점의 데이터만 사용한 배포용 모델에서 Accuracy 79.63%, Macro F1 79.03%를 확인했고, API 실패 시 mock·규칙 기반 fallback으로 시연 안정성을 확보했습니다.',
    links: [
      {
        label: 'GitHub',
        type: 'github',
        url: 'https://github.com/3minute-team/3minute-emergency',
      },
      {
        label: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/design/Szki3Fravfdu0Db5D6FKlh/3minute?node-id=0-1&t=8mkMAovIKjr7Hib8-1',
      },
      {
        label: '발표자료',
        type: 'presentation',
        url: 'https://github.com/3minute-team/3minute-emergency/blob/main/3minute-emergency.pdf',
      },
      {
        label: 'Hugging Face',
        type: 'demo',
        url: 'https://huggingface.co/spaces/carrotkang/3minute',
      },
    ],
  },
  {
    title: 'SportsMate',
    highlight: 'AI POWERED',
    summary: 'AI 챗봇이 모임 탐색과 일정을 돕는 스포츠 커뮤니티',
    description:
      '사용자의 관심 종목·활동 지역·참여 일정을 이해하는 AI 챗봇이 맞춤 모임 검색과 날씨 정보를 안내하고, 실시간 채팅부터 일정·출석·공지·투표까지 지원하는 반응형 스포츠 커뮤니티입니다.',
    period: '2026.06.22 — 2026.07',
    team: '4인 팀 프로젝트',
    role: '팀장',
    type: 'AI · Full-stack Community',
    tech: ['React', 'Flask', 'Supabase', 'OpenAI API', 'Docker'],
    color: 'bg-[#0891b2]',
    challenge:
      'AI 챗봇이 사용자의 선호와 현재 참여 일정을 이해하면서도, OpenAI 응답 실패 시 핵심 검색·일정 안내가 멈추지 않도록 안정적인 대체 흐름이 필요했습니다.',
    contribution:
      '팀장으로서 서비스 범위와 우선순위를 정리하고 팀원별 역할 분담, 일정·이슈 조율, 기능 통합과 배포 점검을 이끌었습니다. 직접 모임 생성·탐색과 위치 기능, 채팅·투표, AI 비서, 날씨·출석 기능, PC·모바일 화면 연동과 Docker 배포 구성을 폭넓게 구현했습니다.',
    features: [
      'OpenAI 기반 개인화 모임 추천·일정·날씨 AI 챗봇',
      '위치·종목 기반 모임 검색과 참여 승인',
      'Supabase Realtime 기반 모임·1:1 채팅',
      '정기 일정, 공지·투표와 QR 출석 관리',
    ],
    outcome:
      'AI 응답 실패 시 규칙 기반 응답으로 전환되는 챗봇을 구현하고, React·Flask·실시간 데이터·외부 API·반응형 UI와 배포를 연결하며 AI 기능을 실제 서비스 흐름에 녹이는 경험을 쌓았습니다.',
    links: [
      {
        label: 'GitHub',
        type: 'github',
        url: 'https://github.com/sagwajusu/sportsmate',
      },
      {
        label: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/board/HtaQCEbJj15lC0XwdSzFo1/sportsmate-%EC%82%AC%EA%B3%BC%EC%A3%BC%EC%8A%A4-?node-id=0-1&t=ASTzkx7kBMQPCHkC-1',
      },
      {
        label: '발표자료',
        type: 'presentation',
        url: 'https://github.com/sagwajusu/sportsmate/blob/main/docs/sportsmate-presentation.pdf',
      },
      {
        label: 'Docker Hub',
        type: 'docker',
        url: 'https://hub.docker.com/r/carrotkang/sportsmate-frontend',
      },
    ],
  },
]
