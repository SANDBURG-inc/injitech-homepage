# 인지테크 홈페이지 인수인계 문서

본 문서는 인지테크(Injitech) 공식 홈페이지의 유지보수 및 배포를 담당하게 될 인수인계자를 위한 안내서입니다.

---

## 1. 프로젝트 개요

- **프로젝트명**: injitech-hompage
- **프레임워크**: Next.js 16 (App Router) + React 19 + TypeScript
- **스타일링**: Tailwind CSS v4
- **빌드 결과물**: 정적 사이트(Static Export) → `dist/` 디렉터리에 HTML/CSS/JS 산출
- **호스팅**: 카페24(Cafe24) 웹 호스팅
- **언어 지원**: 한국어(ko) / 영어(en) — 좌상단 언어 토글 버튼

---

## 2. 사전 준비 (개발 환경 세팅)

### 2-1. 필수 설치 프로그램
- **Node.js** 18.18 이상 (권장: 20.x LTS)
- **Git**

### 2-2. 프로젝트 받아오기 및 의존성 설치
```bash
git clone <레포지토리 주소>
cd injitech-hompage
npm install
```

### 2-3. 환경 변수 (`.env.local`)
프로젝트 루트에 `.env.local` 파일이 필요합니다. 문의하기 메일 발송에 사용되는 EmailJS 키가 들어 있습니다.

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```
> EmailJS 계정 정보 및 템플릿 안내는 `emailjs-template-guide.md` 파일 참고.

### 2-4. 로컬 개발 서버 실행
```bash
npm run dev
```
- 브라우저에서 `http://localhost:3000` 접속
- 코드 수정 시 자동 새로고침(Hot Reload)

---

## 3. 폴더 구조 설명

```
injitech-hompage/
├── public/                       # 정적 파일 (이미지, 동영상, PDF 등)
│   ├── assets/                   # 페이지에 사용되는 이미지/아이콘
│   │   ├── Header/               # 헤더용 아이콘 (메뉴, 언어)
│   │   ├── awards/               # 회사 인증/수상 이미지
│   │   ├── business-area/        # 메인 사업영역 이미지
│   │   ├── company/              # 회사소개 페이지 이미지(조직도, 아이콘 등)
│   │   ├── infra/                # 인프라 페이지 (Dell, HPE, VMware, Cohesity)
│   │   │   ├── dell/
│   │   │   ├── hpe/
│   │   │   ├── vmware/
│   │   │   └── cohesity/
│   │   ├── solution/             # 솔루션 페이지 (SAS, Medallia, SCAILIUM)
│   │   │   ├── SAS/
│   │   │   ├── Medallia/
│   │   │   └── SCAILIUM/
│   │   ├── partners/             # 파트너 로고
│   │   ├── result/               # 도입 성과(Results) 이미지
│   │   ├── use-cases/            # 산업별 사례 이미지
│   │   ├── location/             # 회사 위치(지도) 이미지
│   │   ├── Logo.svg / Logo_color.png
│   │   ├── download.svg / download-icon.png
│   │   └── move-right.svg
│   ├── videos/                   # 메인 Hero 배경 동영상
│   ├── injitech_brochure.pdf     # 회사소개서 PDF (다운로드 버튼 연결)
│   └── favicon16.svg             # 브라우저 탭 아이콘
│
├── src/
│   ├── app/                      # 페이지 라우팅 (Next.js App Router)
│   │   ├── layout.tsx            # 전체 공통 레이아웃 (HTML/Body, 채널톡, 브로슈어 버튼)
│   │   ├── page.tsx              # 메인(홈) 페이지 — '/'
│   │   ├── globals.css           # 전역 CSS
│   │   ├── company/              # 회사소개 페이지 — '/company'
│   │   │   └── page.tsx
│   │   ├── infra/                # 인프라 페이지 — '/infra', '/infra/dell' 등
│   │   │   └── [[...slug]]/      # 동적 라우팅 (탭 슬러그)
│   │   │       ├── page.tsx
│   │   │       └── InfraPageClient.tsx
│   │   └── solution/             # 솔루션 페이지 — '/solution', '/solution/sas' 등
│   │       └── [[...slug]]/
│   │           ├── page.tsx
│   │           └── SolutionPageClient.tsx
│   │
│   ├── components/               # React 컴포넌트
│   │   ├── Header.tsx            # 상단 GNB (메뉴, 로고, 언어 전환)
│   │   ├── Hero.tsx              # 메인 상단 배너(동영상 배경)
│   │   ├── CompanyIntro.tsx      # 메인 - 회사소개 섹션
│   │   ├── MainBusiness.tsx      # 메인 - 주요 사업 섹션
│   │   ├── OurClients.tsx        # 메인 - 고객사 로고
│   │   ├── UseCases.tsx          # 메인 - 산업별 사례
│   │   ├── Results.tsx           # 메인 - 도입 성과(숫자) 섹션
│   │   ├── Inquiry.tsx           # 메인 - 도입문의 CTA
│   │   ├── Footer.tsx            # 하단 푸터(회사정보, 연락처)
│   │   │
│   │   ├── company/              # 회사소개 페이지 구성 요소
│   │   │   ├── CompanyHero.tsx
│   │   │   ├── CompanyTabs.tsx       # 회사소개 내부 탭
│   │   │   ├── CompanyOverview.tsx   # 회사 개요/조직도
│   │   │   ├── CompanyBusiness.tsx   # 사업영역
│   │   │   ├── CompanyHistory.tsx    # 연혁
│   │   │   ├── CompanyAwards.tsx     # 인증/수상
│   │   │   └── CompanyLocation.tsx   # 오시는 길
│   │   │
│   │   ├── infra/                # 인프라 페이지 구성 요소
│   │   │   ├── InfraHero.tsx
│   │   │   ├── InfraTabs.tsx
│   │   │   ├── InfraBrandContent.tsx # 브랜드 공통 컨텐츠 래퍼
│   │   │   ├── InfraDell.tsx
│   │   │   ├── InfraHPE.tsx
│   │   │   ├── InfraVMware.tsx
│   │   │   └── InfraCohesity.tsx
│   │   │
│   │   ├── solution/             # 솔루션 페이지 구성 요소
│   │   │   ├── SolutionHero.tsx
│   │   │   ├── SolutionTabs.tsx
│   │   │   ├── SolutionSAS.tsx
│   │   │   ├── SolutionMedallia.tsx
│   │   │   └── SolutionSCAILIUM.tsx
│   │   │
│   │   └── common/               # 공통 컴포넌트
│   │       ├── ScrollReveal.tsx          # 스크롤 시 페이드인 애니메이션
│   │       ├── InquiryModal.tsx          # 도입문의 모달 (EmailJS 발송)
│   │       ├── PrivacyModal.tsx          # 개인정보 처리방침 모달
│   │       ├── FloatingBrochureButton.tsx# 우하단 브로슈어 다운로드 버튼
│   │       ├── ChannelTalk.tsx           # 채널톡 챗 위젯
│   │       └── MobileTabDropdown.tsx     # 모바일용 탭 드롭다운
│   │
│   ├── context/
│   │   └── LanguageContext.tsx   # 한/영 언어 전환 컨텍스트
│   │
│   └── translations/
│       └── translations.ts       # ★★★ 모든 텍스트(한/영) 한 파일에서 관리
│
├── package.json                  # 의존성 / 스크립트 정의
├── next.config.ts                # Next.js 설정 (output: 'export', distDir: 'dist')
├── tsconfig.json                 # TypeScript 설정
├── postcss.config.mjs            # Tailwind CSS 설정
├── eslint.config.mjs             # ESLint 설정
├── .env.local                    # 환경 변수 (Git 미포함)
├── emailjs-template-guide.md     # EmailJS 템플릿 가이드
└── HANDOVER.md                   # (현재 문서)
```

---

## 4. 자주 수정하는 항목별 위치 안내

| 수정하고 싶은 것 | 파일 위치 |
|---|---|
| 화면에 보이는 모든 한글/영문 텍스트 | `src/translations/translations.ts` |
| 메인 페이지 섹션 추가/제거/순서 | `src/app/page.tsx` |
| 헤더 메뉴, 로고 | `src/components/Header.tsx` |
| 푸터 회사정보/연락처 | `src/components/Footer.tsx` |
| 메인 Hero 동영상 교체 | `public/videos/` 영상 교체 후 `src/components/Hero.tsx`에서 파일명 변경 |
| 회사소개서(PDF) 교체 | `public/injitech_brochure.pdf` 파일을 동일한 이름으로 덮어쓰기 |
| 회사 연혁 | `src/translations/translations.ts` 안의 `companyHistory` 키 |
| 고객사/파트너 로고 추가 | `public/assets/partners/` 또는 `public/assets/company/`에 이미지 업로드 후 해당 컴포넌트에서 import |
| 도입문의 메일 수신처 | EmailJS 대시보드에서 변경 (`emailjs-template-guide.md` 참고) |
| 페이지 메타 정보(title, description) | `src/app/layout.tsx` |
| 파비콘 | `public/favicon16.svg` |

> **TIP**: 텍스트만 바꾸는 작업이라면 거의 전부 `src/translations/translations.ts` 한 파일에서 처리됩니다. `ko`(한국어)와 `en`(영어) 두 객체에 같은 구조로 적어주세요.

---

## 5. 빌드 및 배포 방식

### 5-1. 배포 흐름 한눈에 보기
```
[로컬 PC]                                  [카페24 서버]
   │                                            │
   │  npm run build                             │
   │     │                                      │
   │     ▼                                      │
   │  dist/ 폴더 생성  ───── FTP 업로드 ─────▶  dist/ 폴더
   │                                            │   │
   │                                            │   ▼ 폴더명 변경
   │                                            │  www/  (실제 서비스 폴더)
```

### 5-2. 단계별 절차

#### 1) 프로덕션 빌드
프로젝트 루트에서 아래 명령 실행:
```bash
npm run build
```
- 빌드 성공 시 프로젝트 루트에 `dist/` 폴더가 생성됩니다.
- `next.config.ts`에 `output: "export"`, `distDir: "dist"`로 설정되어 있어 **정적 HTML 파일**로 출력됩니다 (서버 사이드 렌더링 X).
- 빌드 산출물 = `dist/` 폴더 통째로.

#### 2) 카페24 서버 접속 (FTP)
- **FTP 클라이언트**: FileZilla, Cyberduck 등
- **접속 정보**: 카페24 호스팅 관리 페이지 → 나의 서비스 관리 → FTP 정보에서 확인
  - 호스트명, 아이디, 비밀번호, 포트(보통 21 또는 22)

#### 3) 기존 `www` 폴더 백업 (롤백 대비, 권장)
서버 접속 후 기존에 운영 중인 `www` 폴더를 그대로 두지 말고 백업해 둡니다.
- 예: `www` → `www_backup_YYYYMMDD` 로 이름 변경
- 문제가 생기면 다시 `www`로 되돌리면 즉시 롤백됩니다.

#### 4) `dist` 폴더 업로드
- 로컬의 `dist/` 폴더를 카페24 서버 **최상위 경로**에 업로드합니다.
- 업로드 도중 끊기면 일부 파일이 누락될 수 있으니, 업로드 완료 후 파일 개수를 비교해 확인하세요.

#### 5) 폴더명 변경: `dist` → `www`
- 카페24는 **`www` 폴더가 실제 서비스되는 루트**입니다.
- 업로드된 `dist` 폴더의 이름을 `www`로 변경합니다.
- (기존 `www`를 백업해 두지 않았다면 먼저 다른 이름으로 옮긴 뒤 `dist`를 `www`로 변경)

#### 6) 배포 확인
- 브라우저에서 도메인 접속 (예: `https://injitech.co.kr`)
- 브라우저 캐시로 이전 화면이 보일 수 있으니 **강력 새로고침**(Windows: `Ctrl + Shift + R`, Mac: `Cmd + Shift + R`).
- 메인/회사소개/인프라/솔루션 4개 페이지, 그리고 도입문의 폼 발송까지 한 번 점검.

### 5-3. 배포 시 자주 묻는 질문

- **Q. `npm run build` 했더니 에러가 나요.**
  - 대개 TypeScript 타입 오류 또는 ESLint 에러입니다. 빨간색 메시지의 파일/줄번호를 확인 후 수정하세요.
  - `node_modules`를 지우고 `npm install`부터 다시 시도해도 좋습니다.

- **Q. 배포 후 이미지가 안 보여요.**
  - `public/` 안의 파일은 빌드 시 `dist/` 루트로 복사됩니다. 코드에서 `/assets/xxx.png` 경로로 사용하고 있는지 확인.
  - 새 이미지를 추가했는데 누락됐다면 빌드를 다시 한 뒤 재업로드 하세요.

- **Q. 도입문의 메일이 안 와요.**
  - `.env.local`의 EmailJS 키 3개가 모두 정확한지 확인.
  - **환경 변수는 빌드 시점에 결과물에 박힙니다.** `.env.local`을 수정했으면 반드시 다시 `npm run build` 해야 적용됩니다.
  - EmailJS 대시보드에서 월 무료 발송량(보통 200건) 초과 여부 확인.

- **Q. 한 페이지만 빠르게 수정하고 싶어요.**
  - 그래도 전체 빌드 후 `dist`를 통째로 덮어쓰는 것을 권장합니다. 부분 업로드는 누락 위험이 큽니다.

---

## 6. 도메인 / DNS / SSL
- 도메인 관리, DNS 설정, SSL(HTTPS) 인증서 발급/갱신은 모두 **카페24 호스팅 관리 페이지**에서 처리합니다.
- 코드 변경 없이 카페24 관리자 화면에서 설정 가능합니다.

---

## 7. 외부 서비스 연동 정보

| 서비스 | 용도 | 관리 위치 |
|---|---|---|
| EmailJS | 도입문의 폼 메일 발송 | `https://dashboard.emailjs.com` / `.env.local` |
| 채널톡(ChannelTalk) | 우측 하단 챗봇 위젯 | `src/components/common/ChannelTalk.tsx` 내 plugin key |
| 카페24 | 호스팅 / 도메인 / SSL | 카페24 관리자 페이지 |

---

## 8. 체크리스트 (배포 전 마지막 점검)
- [ ] `npm run dev`로 로컬에서 모든 페이지를 한 번씩 클릭하며 확인했다
- [ ] 한국어 / 영어 모두 깨지는 글자 없이 표시된다
- [ ] PC / 모바일(개발자도구 반응형) 모두 레이아웃이 정상이다
- [ ] 도입문의 폼을 실제로 한 번 보내보고 메일을 받아봤다
- [ ] `npm run build` 가 에러 없이 완료된다
- [ ] FTP 업로드 전 기존 `www` 폴더를 백업했다
- [ ] 업로드 후 도메인 접속해 강력 새로고침으로 반영을 확인했다

---

작성일: 2026-04-27
