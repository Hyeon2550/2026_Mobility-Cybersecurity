import { useEffect, useEffectEvent, useState } from "react";

const zoneCards = [
  {
    index: "01",
    title: "차량 내부 네트워크",
    description:
      "CAN, Automotive Ethernet, 도메인 게이트웨이를 계층적으로 표현해 차량 내 통신 경계를 명확히 보여줍니다.",
  },
  {
    index: "02",
    title: "OTA 업데이트 보안",
    description:
      "패키지 서명, 무결성 검증, 롤백 정책, 배포 승인 과정을 현대차 디지털 서비스 흐름처럼 정리했습니다.",
  },
  {
    index: "03",
    title: "Connected Car 링크",
    description:
      "Telematics, V2X, 모바일 앱 연동 구간을 방어 관점에서 시각화해 외부 접점 리스크를 읽기 쉽게 구성합니다.",
  },
  {
    index: "04",
    title: "공급망 신뢰 검증",
    description:
      "서드파티 모듈과 펌웨어 공급 체인을 신뢰도 배지와 검증 단계로 나눠 발표용 스토리텔링에 맞췄습니다.",
  },
];

const scenarios = [
  {
    title: "OTA 서명 불일치 감지",
    description: "배포 전 검증 단계에서 이상 징후를 탐지하고 승인 라인을 즉시 보류하는 방어형 시나리오",
  },
  {
    title: "Telematics 이상 세션 분류",
    description: "비정상 세션 패턴을 탐지한 뒤 인증 레벨을 재평가하고 연결 세그먼트를 분리하는 흐름",
  },
  {
    title: "Gateway 정책 위반 격리",
    description: "차량 내부 네트워크 사이 정책 위반 이벤트를 시각화하고 격리 및 복구 절차를 단계별로 노출",
  },
];

const timeline = [
  ["T+00", "이상 신호 감지 및 이벤트 스코어링"],
  ["T+03", "정책 기반 분류와 영향 범위 매핑"],
  ["T+07", "연결 채널 또는 ECU 세그먼트 격리"],
  ["T+11", "무결성 재검증 및 서명 체인 확인"],
  ["T+15", "관제 로그 기록과 복구 보고 완료"],
];

const showcaseCards = [
  {
    title: "Hyundai Tone",
    description: "딥 네이비, 메탈릭 실버, 클린 블루 하이라이트 조합으로 현대차 발표 화면에 가까운 무드를 구성했습니다.",
  },
  {
    title: "Executive Dashboard",
    description: "관제 디테일과 프레젠테이션 임팩트를 동시에 살리기 위해 정보 밀도와 여백의 균형을 재정렬했습니다.",
  },
  {
    title: "Defensive Scope",
    description: "실제 침투 기법 없이 방어 절차, 탐지 흐름, 복구 프로세스에만 집중해 안전한 데모 범위를 유지합니다.",
  },
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function HyundaiLogo() {
  return (
    <div className="hmobility-logo" aria-label="H Mobility Class inspired wordmark" role="img">
      <span className="hmobility-badge">H</span>
      <span className="hmobility-wordmark">
        <span className="hmobility-main">MOBILITY</span>
        <span className="hmobility-sub">CYBER CLASS</span>
      </span>
    </div>
  );
}

function VehicleDiagram() {
  return (
    <div className="vehicle-diagram" aria-label="Vehicle security diagram">
      <svg
        className="vehicle-svg"
        viewBox="0 0 760 420"
        role="img"
        aria-label="Vehicle security zones"
      >
        <defs>
          <linearGradient id="carStroke" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#dfe8f0" />
            <stop offset="100%" stopColor="#7fc6ff" />
          </linearGradient>
          <linearGradient id="glassStroke" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(223,232,240,0.55)" />
            <stop offset="100%" stopColor="rgba(127,198,255,0.8)" />
          </linearGradient>
        </defs>

        <rect x="32" y="34" width="696" height="352" rx="28" className="diagram-frame" />

        <path
          d="M146 258 L186 180 C196 160 215 146 237 146 H405 C430 146 449 136 465 119 L503 80 H580 C609 80 631 96 640 122 L667 198 C676 222 680 248 680 274 V286 H146 Z"
          className="car-body"
        />
        <path
          d="M251 152 H398 C420 152 437 145 452 131 L485 100 H568 C590 100 607 112 615 133 L632 182 H208 L222 168 C230 158 240 152 251 152 Z"
          className="car-cabin"
        />
        <line x1="428" y1="148" x2="399" y2="182" className="car-detail" />
        <line x1="496" y1="101" x2="523" y2="182" className="car-detail" />
        <line x1="205" y1="222" x2="639" y2="222" className="car-detail soft" />
        <circle cx="256" cy="286" r="50" className="wheel-outer" />
        <circle cx="256" cy="286" r="24" className="wheel-inner" />
        <circle cx="575" cy="286" r="50" className="wheel-outer" />
        <circle cx="575" cy="286" r="24" className="wheel-inner" />

        <line x1="250" y1="126" x2="250" y2="214" className="anchor-line" />
        <line x1="352" y1="120" x2="352" y2="214" className="anchor-line" />
        <line x1="454" y1="76" x2="454" y2="186" className="anchor-line" />
        <line x1="555" y1="124" x2="555" y2="214" className="anchor-line" />
        <line x1="310" y1="308" x2="310" y2="238" className="anchor-line" />

        <g className="zone-badge">
          <rect x="184" y="84" width="132" height="36" rx="18" />
          <text x="250" y="107" textAnchor="middle">ADAS</text>
        </g>
        <g className="zone-badge">
          <rect x="286" y="80" width="132" height="36" rx="18" />
          <text x="352" y="103" textAnchor="middle">Gateway</text>
        </g>
        <g className="zone-badge">
          <rect x="388" y="36" width="132" height="36" rx="18" />
          <text x="454" y="59" textAnchor="middle">OTA</text>
        </g>
        <g className="zone-badge">
          <rect x="489" y="88" width="132" height="36" rx="18" />
          <text x="555" y="111" textAnchor="middle">Telematics</text>
        </g>
        <g className="zone-badge">
          <rect x="244" y="308" width="132" height="36" rx="18" />
          <text x="310" y="331" textAnchor="middle">BMS</text>
        </g>
      </svg>
    </div>
  );
}

function App() {
  const [metrics, setMetrics] = useState({
    threatCount: 142,
    isolationSpeed: 2.9,
    integrityRate: 99.97,
    chartValue: 78,
    bars: [56, 64, 60, 82, 74, 79, 71],
  });
  const [activeScenario, setActiveScenario] = useState(0);

  const updateMetrics = useEffectEvent(() => {
    setMetrics({
      threatCount: Math.round(randomBetween(118, 168)),
      isolationSpeed: randomBetween(2.4, 3.8),
      integrityRate: randomBetween(99.92, 99.99),
      chartValue: Math.round(randomBetween(68, 91)),
      bars: Array.from({ length: 7 }, () => Math.round(randomBetween(48, 88))),
    });
  });

  const rotateScenario = useEffectEvent(() => {
    setActiveScenario((current) => (current + 1) % scenarios.length);
  });

  useEffect(() => {
    const metricTimer = window.setInterval(updateMetrics, 2400);
    const scenarioTimer = window.setInterval(rotateScenario, 2800);

    return () => {
      window.clearInterval(metricTimer);
      window.clearInterval(scenarioTimer);
    };
  }, [rotateScenario, updateMetrics]);

  return (
    <div className="page-shell">
      <div className="noise" />

      <header className="topbar">
        <a className="brand" href="#overview">
          <HyundaiLogo />
          <div>
            <p className="brand-kicker">EDUCATIONAL DEFENSIVE EXPERIENCE</p>
            <strong className="brand-text">Mobility Cyber Defense Lab</strong>
          </div>
        </a>

        <nav className="topnav">
          <a href="#overview">Overview</a>
          <a href="#zones">Architecture</a>
          <a href="#simulation">Simulation</a>
          <a href="#response">Response</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="eyebrow">PROGRESS FOR HUMANITY / TRUSTED MOBILITY SECURITY</p>
            <h1>
              신뢰할 수 있는 모빌리티를 위한
              <br />
              사이버보안 시뮬레이션 대시보드
            </h1>
            <p className="hero-text">
              커넥티드카와 OTA, 차량 내부 네트워크, 디지털 서비스 보안을 하나의 관제 화면으로 정리했습니다.
              실제 공격 기능은 제외하고, 더 안전한 이동 경험을 위해 탐지, 검증, 격리, 복구가 어떻게
              이어지는지 설득력 있게 보여주는 발표형 React 데모입니다.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#simulation">
                시뮬레이션 보기
              </a>
              <a className="button secondary" href="#zones">
                보안 구조 확인
              </a>
            </div>

            <div className="hero-signature">
              <div>
                <span>Brand Direction</span>
                <strong>Clean surfaces, precise blue accents, calm confidence</strong>
              </div>
              <div>
                <span>Experience Type</span>
                <strong>Presentation-ready demo for portfolio, education, showcase</strong>
              </div>
            </div>
          </div>

          <div className="hero-stage">
            <article className="panel glass command-center">
              <div className="panel-header">
                <span>Mobility Security Command</span>
                <span className="status-pill live">BRAND SAFE</span>
              </div>

              <VehicleDiagram />

              <div className="command-metrics">
                <div className="metric-chip">
                  <span>Fleet Trust</span>
                  <strong>Verified</strong>
                </div>
                <div className="metric-chip">
                  <span>Update Path</span>
                  <strong>Signed</strong>
                </div>
                <div className="metric-chip">
                  <span>Vehicle Zone</span>
                  <strong>Segmented</strong>
                </div>
              </div>
            </article>

            <div className="stats-row">
              <article className="panel glass metric">
                <span className="metric-label">Threat Signals</span>
                <strong>{metrics.threatCount}</strong>
                <span className="metric-foot">교육용 샘플 데이터 기준 탐지 이벤트</span>
              </article>
              <article className="panel glass metric">
                <span className="metric-label">Isolation Speed</span>
                <strong>{metrics.isolationSpeed.toFixed(1)}s</strong>
                <span className="metric-foot">격리 정책 발동까지 평균 시간</span>
              </article>
              <article className="panel glass metric">
                <span className="metric-label">Integrity Rate</span>
                <strong>{metrics.integrityRate.toFixed(2)}%</strong>
                <span className="metric-foot">서명 검증 무결성 유지 비율</span>
              </article>
            </div>
          </div>
        </section>

        <section className="insight-strip">
          <div>
            <span className="strip-label">BRAND VISION</span>
            <strong>Progress shaped around safer mobility</strong>
          </div>
          <div>
            <span className="strip-label">EXPERIENCE TONE</span>
            <strong>Clear, confident and technology-led</strong>
          </div>
          <div>
            <span className="strip-label">DEMO SCOPE</span>
            <strong>Defensive visualization only</strong>
          </div>
        </section>

        <section className="section" id="zones">
          <div className="section-head">
            <p className="eyebrow">SECURITY ARCHITECTURE</p>
            <h2>연결된 이동 경험을 지키는 보안 구조를 명확한 언어로 정리</h2>
          </div>

          <div className="zone-grid">
            {zoneCards.map((zone) => (
              <article className="zone-card" key={zone.index}>
                <span className="zone-index">{zone.index}</span>
                <h3>{zone.title}</h3>
                <p>{zone.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section simulation" id="simulation">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">LIVE DEFENSE SIMULATION</p>
              <h2>진행 중인 위협 흐름을 차분하고 선명한 화면으로 시각화</h2>
            </div>
            <p className="section-note">
              신뢰를 잃지 않는 보안 경험을 위해 탐지와 대응의 연결성을 보여주는 교육용 시뮬레이션
            </p>
          </div>

          <div className="simulation-layout">
            <article className="panel glass radar-card">
              <div className="panel-header">
                <span>Threat Activity Radar</span>
                <span className="status-pill scan">SCAN</span>
              </div>

              <div className="radar">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
                <div className="sweep" />
                <span className="ping ping-1" />
                <span className="ping ping-2" />
                <span className="ping ping-3" />
              </div>

              <div className="radar-legend">
                <span><i /> OTA Integrity</span>
                <span><i /> Gateway Policy</span>
                <span><i /> Connected Link</span>
              </div>
            </article>

            <article className="panel glass scenario-card">
              <div className="panel-header">
                <span>Scenario Queue</span>
                <span className="status-pill live">SAFE LAB</span>
              </div>

              <div className="scenario-list">
                {scenarios.map((scenario, index) => (
                  <div
                    className={`scenario ${index === activeScenario ? "active" : ""}`}
                    key={scenario.title}
                  >
                    <h3>{scenario.title}</h3>
                    <p>{scenario.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="chart-row">
            <article className="panel glass chart-card">
              <div className="panel-header">
                <span>Defense Load</span>
                <span>{metrics.chartValue}%</span>
              </div>

              <div className="bar-chart">
                {metrics.bars.map((height, index) => (
                  <span key={`${index}-${height}`} style={{ height: `${height}%` }} />
                ))}
              </div>
            </article>

            <article className="panel glass timeline-card" id="response">
              <div className="panel-header">
                <span>Incident Response Timeline</span>
                <span className="status-pill live">AUTO</span>
              </div>

              <div className="timeline">
                {timeline.map(([time, description]) => (
                  <div className="timeline-item" key={time}>
                    <span className="time">{time}</span>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section showcase">
          <div className="section-head">
            <p className="eyebrow">PRESENTATION VALUE</p>
            <h2>브랜드 인상과 기술 메시지가 동시에 살아나는 발표형 화면 구성</h2>
          </div>

          <div className="showcase-grid">
            {showcaseCards.map((card) => (
              <article className="showcase-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Hyundai Cyber Defense Experience / React Defensive Demo / Presentation Safe Scope</p>
      </footer>
    </div>
  );
}

export default App;
