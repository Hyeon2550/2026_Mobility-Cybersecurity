# 2026 Mobility Cybersecurity

현대자동차 브랜드 톤에서 영감을 받아 제작한 모빌리티 사이버보안 교육용 React 웹 데모입니다.

이 프로젝트는 실제 공격 기능이나 악성 동작을 포함하지 않고, 차량 내부 네트워크, OTA 업데이트, Connected Car 보안, 공격-방어 흐름, 보안 관제 콘솔을 시각적으로 보여주는 발표형 대시보드로 구성되어 있습니다.

## Overview

- React + Vite 기반 단일 페이지 웹 프로젝트
- 모빌리티 보안 아키텍처 시각화
- 교육용 공격-방어 흐름 다이어그램
- 무해한 보안 관제 콘솔 UI
- 실시간 지표형 시뮬레이션과 차량 보안 다이어그램 포함
- 포트폴리오, 발표, 교육용 데모 목적

## Main Features

- Hero dashboard
  - 차량 보안 상태, 지표 카드, 브랜드형 랜딩 화면 제공
- Security architecture
  - 차량 내부 네트워크, OTA, Connected Car, 공급망 보안 구조 설명
- Attack-defense flow
  - 실제 공격 기능 없이 위협 시도와 방어 대응 단계를 교육용으로 시각화
- SOC console
  - 실제처럼 보이지만 무해한 분석 로그, 이벤트 큐, 대응 메모 UI 제공
- Live simulation
  - 레이더, 시나리오 카드, 대응 타임라인, 로드 차트 포함

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Project Structure

```text
hyundai-cyber-lab/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ package.json
├─ package-lock.json
└─ vite.config.js
```

## Run Locally

```bash
npm install
npm run dev
```

기본 개발 서버 주소:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## Notes

- 이 프로젝트는 교육용/시연용 방어 시뮬레이션입니다.
- 실제 침투 기법, 악성 코드, 공격 자동화 기능은 포함하지 않습니다.
- 외부 공유가 필요할 경우 `ngrok` 같은 터널링 도구로 로컬 개발 서버를 공개할 수 있습니다.

## Repository

GitHub:

```text
https://github.com/Hyeon2550/2026_Mobility-Cybersecurity
```
