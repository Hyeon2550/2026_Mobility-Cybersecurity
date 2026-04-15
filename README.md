# 2026 Mobility Cybersecurity

현대자동차 브랜드 톤에서 영감을 받아 제작한 모빌리티 사이버보안 교육용 React 웹 데모입니다.  
실제 공격 기능은 포함하지 않고, 차량 내부 네트워크, OTA 업데이트, Connected Car 보안, 대응 절차를 시각적으로 보여주는 발표형 대시보드로 구성했습니다.

## Overview

- React + Vite 기반 단일 페이지 웹 프로젝트
- 현대차 톤을 반영한 브랜드형 UI와 보안 관제 대시보드 구성
- 방어 중심 시뮬레이션, 실시간 지표, 차량 보안 다이어그램 포함
- 포트폴리오, 발표, 교육용 데모를 목적으로 제작

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

개발 서버 기본 주소:

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
