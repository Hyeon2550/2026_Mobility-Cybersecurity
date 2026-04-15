import { useEffect, useEffectEvent, useState } from "react";

const zoneCards = [
  {
    index: "01",
    title: "차량 내부 네트워크",
    description:
      "CAN, Automotive Ethernet, 게이트웨이 보호 계층을 분리해 차량 내부 경계와 핵심 제어 도메인을 한눈에 보여줍니다.",
  },
  {
    index: "02",
    title: "OTA 업데이트 보안",
    description:
      "서명 검증, 무결성 확인, 승인 단계, 롤백 정책을 묶어 소프트웨어 업데이트 신뢰 체계를 시각화합니다.",
  },
  {
    index: "03",
    title: "Connected Car 링크",
    description:
      "Telematics, 모바일 앱, V2X 연결 접점을 방어 관점으로 재구성해 외부 노출 구간과 보호 상태를 명확히 정리합니다.",
  },
  {
    index: "04",
    title: "공급망 신뢰 검증",
    description:
      "서드파티 모듈, 펌웨어 공급 체인, 빌드 검증 절차를 카드형 흐름으로 풀어 발표에 적합한 메시지를 만듭니다.",
  },
];

const scenarios = [
  {
    title: "OTA 서명 불일치 감지",
    description: "배포 전 검증 단계에서 이상 징후를 탐지하고 업데이트 라인을 자동 보류하는 교육용 방어 시나리오",
  },
  {
    title: "Telematics 이상 세션 분류",
    description: "비정상 세션 패턴을 식별한 뒤 인증 레벨을 재평가하고 연결 세그먼트를 분리하는 방어 흐름",
  },
  {
    title: "Gateway 정책 위반 격리",
    description: "차량 내부 네트워크 간 정책 위반 이벤트를 시각화하고 격리 및 복구 절차를 단계별로 노출",
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
    title: "Executive Surface",
    description: "메탈릭 패널, 깊은 블루 그라데이션, 절제된 하이라이트로 발표용 대시보드 품질을 높였습니다.",
  },
  {
    title: "Readable Density",
    description: "정보는 많지만 복잡해 보이지 않도록 카드 밀도와 여백, 헤드라인 비율을 다시 정리했습니다.",
  },
  {
    title: "Safe Demonstration",
    description: "실제 공격 기능 없이 탐지, 해석, 대응 의사결정과 복구 흐름만 강조하는 안전한 데모 범위를 유지합니다.",
  },
];

const attackFlow = [
  {
    step: "01",
    phase: "Recon Signal",
    type: "Adversary View",
    title: "외부 노출면 탐색",
    description: "연결 구간을 겨냥한 위협 시도를 교육용으로 추상화해 표시하고, 실제 절차 대신 위험 신호만 설명합니다.",
  },
  {
    step: "02",
    phase: "Access Attempt",
    type: "Adversary View",
    title: "초기 접근 시도 감지",
    description: "인증 우회나 취약점 악용 대신 비정상 접근 이벤트로만 표현해 공격 의도를 시각적으로 전달합니다.",
  },
  {
    step: "03",
    phase: "Detection",
    type: "Defense View",
    title: "행동 분석과 이상 분류",
    description: "탐지 엔진이 빈도, 시그니처, 무결성 이상을 점수화하고 이벤트 우선순위를 자동 산정합니다.",
  },
  {
    step: "04",
    phase: "Isolation",
    type: "Defense View",
    title: "세그먼트 격리와 정책 차단",
    description: "영향 구간만 분리해 서비스 연속성을 유지하면서 위험 이벤트를 통제하는 방어 단계입니다.",
  },
  {
    step: "05",
    phase: "Recovery",
    type: "Defense View",
    title: "무결성 검증과 복구",
    description: "서명 체인을 다시 확인하고 복구 완료 시점까지 로그와 보고를 연동하는 교육용 종결 단계입니다.",
  },
];

const consoleLogs = [
  {
    time: "14:32:06",
    level: "HIGH",
    source: "OTA Verification Engine",
    message: "Unsigned artifact detected in staging lane. Release hold applied.",
  },
  {
    time: "14:32:18",
    level: "MED",
    source: "Telematics Session Monitor",
    message: "Abnormal handshake frequency observed. Re-authentication workflow started.",
  },
  {
    time: "14:32:31",
    level: "INFO",
    source: "Gateway Policy Orchestrator",
    message: "Northbound segment isolated under adaptive containment rule.",
  },
  {
    time: "14:32:42",
    level: "INFO",
    source: "Integrity Service",
    message: "Firmware hash chain validated after containment event.",
  },
];

const analystNotes = [
  "실제 공격 실행 없이 위험 신호와 대응 단계를 교육용으로만 시각화",
  "이상 세션과 무결성 오류를 별도 큐로 분리해 분석 우선순위 확보",
  "차량 서비스 연속성 유지를 위해 전체 중단 대신 세그먼트 격리 우선",
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function BrandMark() {
  return (
    <div className="hmobility-logo" aria-label="Mobility Cyber Class wordmark" role="img">
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
      <svg className="vehicle-svg" viewBox="0 0 760 420" role="img" aria-label="Vehicle security zones">
        <defs>
          <linearGradient id="carStroke" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#dfe8f0" />
            <stop offset="100%" stopColor="#7fc6ff" />
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
          <BrandMark />
          <div>
            <p className="brand-kicker">EDUCATIONAL DEFENSIVE EXPERIENCE</p>
            <strong className="brand-text">Mobility Cyber Defense Lab</strong>
          </div>
        </a>
        <nav className="topnav">
          <a href="#overview">Overview</a>
          <a href="#zones">Architecture</a>
          <a href="#flow">Flow</a>
          <a href="#console">SOC Console</a>
          <a href="#simulation">Simulation</a>
        </nav>
      </header>
      <main>
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="eyebrow">TRUSTED MOBILITY / DEFENSIVE VISUAL EXPERIENCE</p>
            <h1>
              신뢰할 수 있는 모빌리티를 위한
              <br />
              사이버보안 시뮬레이션 대시보드
            </h1>
            <p className="hero-text">
              커넥티드카, OTA, 차량 내부 네트워크, 디지털 서비스 보안을 하나의 고급 관제 화면으로 정리했습니다.
              실제 악용 기능은 제외하고 탐지, 분석, 격리, 복구 같은 방어 흐름을 더 설득력 있게 보여주는 발표형 React 데모입니다.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#simulation">시뮬레이션 보기</a>
              <a className="button secondary" href="#console">SOC 콘솔 확인</a>
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
            <article className="panel glass command-center premium-panel">
              <div className="panel-header">
                <span>Mobility Security Command</span>
                <span className="status-pill live">BRAND SAFE</span>
              </div>
              <VehicleDiagram />
              <div className="command-metrics">
                <div className="metric-chip"><span>Fleet Trust</span><strong>Verified</strong></div>
                <div className="metric-chip"><span>Update Path</span><strong>Signed</strong></div>
                <div className="metric-chip"><span>Vehicle Zone</span><strong>Segmented</strong></div>
              </div>
            </article>
            <div className="stats-row">
              <article className="panel glass metric premium-panel">
                <span className="metric-label">Threat Signals</span>
                <strong>{metrics.threatCount}</strong>
                <span className="metric-foot">교육용 샘플 데이터 기준 탐지 이벤트</span>
              </article>
              <article className="panel glass metric premium-panel">
                <span className="metric-label">Isolation Speed</span>
                <strong>{metrics.isolationSpeed.toFixed(1)}s</strong>
                <span className="metric-foot">격리 정책 발동까지 평균 시간</span>
              </article>
              <article className="panel glass metric premium-panel">
                <span className="metric-label">Integrity Rate</span>
                <strong>{metrics.integrityRate.toFixed(2)}%</strong>
                <span className="metric-foot">서명 검증 무결성 유지 비율</span>
              </article>
            </div>
          </div>
        </section>

        <section className="insight-strip">
          <div><span className="strip-label">BRAND VISION</span><strong>Progress shaped around safer mobility</strong></div>
          <div><span className="strip-label">EXPERIENCE TONE</span><strong>Clear, confident and technology-led</strong></div>
          <div><span className="strip-label">DEMO SCOPE</span><strong>Defensive visualization only</strong></div>
        </section>

        <section className="section" id="zones">
          <div className="section-head">
            <p className="eyebrow">SECURITY ARCHITECTURE</p>
            <h2>연결된 이동 경험을 지키는 보안 구조를 명확한 언어로 정리</h2>
          </div>
          <div className="zone-grid">
            {zoneCards.map((zone) => (
              <article className="zone-card premium-panel" key={zone.index}>
                <span className="zone-index">{zone.index}</span>
                <h3>{zone.title}</h3>
                <p>{zone.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="flow">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">ATTACK-DEFENSE FLOW</p>
              <h2>실제 기능 없이도 이해되는 공격 시도와 방어 대응의 교육용 흐름</h2>
            </div>
            <p className="section-note">공격 단계를 추상화해 설명하고, 뒤이어 어떤 방식으로 탐지와 격리가 이어지는지 방어 관점에서 보여줍니다.</p>
          </div>
          <div className="flow-grid">
            {attackFlow.map((item) => (
              <article className="flow-card premium-panel" key={item.step}>
                <div className="flow-top">
                  <span className="flow-step">{item.step}</span>
                  <span className={`flow-type ${item.type === "Defense View" ? "defense" : "adversary"}`}>{item.type}</span>
                </div>
                <p className="flow-phase">{item.phase}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="console">
          <div className="section-head">
            <p className="eyebrow">SOC CONSOLE</p>
            <h2>실제처럼 보이지만 무해한 보안 관제 콘솔</h2>
          </div>
          <div className="console-layout">
            <article className="panel glass console-card premium-panel">
              <div className="panel-header">
                <span>Live Analyst Feed</span>
                <span className="status-pill scan">MONITOR</span>
              </div>
              <div className="console-window">
                {consoleLogs.map((log) => (
                  <div className="console-line" key={`${log.time}-${log.source}`}>
                    <span className="console-time">{log.time}</span>
                    <span className={`console-level ${log.level.toLowerCase()}`}>{log.level}</span>
                    <div className="console-content">
                      <strong>{log.source}</strong>
                      <p>{log.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel glass notes-card premium-panel">
              <div className="panel-header">
                <span>Analyst Notes</span>
                <span className="status-pill live">SAFE MODE</span>
              </div>
              <div className="notes-stack">
                {analystNotes.map((note) => (
                  <div className="note-row" key={note}>
                    <span className="note-dot" />
                    <p>{note}</p>
                  </div>
                ))}
              </div>
              <div className="mini-scoreboard">
                <div><span>Containment Policy</span><strong>Adaptive</strong></div>
                <div><span>Review Queue</span><strong>03 Items</strong></div>
                <div><span>Recovery State</span><strong>Stable</strong></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section simulation" id="simulation">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">LIVE DEFENSE SIMULATION</p>
              <h2>움직이는 레이더와 지표로 방어형 시나리오를 시각화</h2>
            </div>
            <p className="section-note">실제 침투 행위 대신 탐지, 분석, 차단, 복구에 집중한 교육용 안전 시뮬레이션</p>
          </div>
          <div className="simulation-layout">
            <article className="panel glass radar-card premium-panel">
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
            <article className="panel glass scenario-card premium-panel">
              <div className="panel-header">
                <span>Scenario Queue</span>
                <span className="status-pill live">SAFE LAB</span>
              </div>
              <div className="scenario-list">
                {scenarios.map((scenario, index) => (
                  <div className={`scenario ${index === activeScenario ? "active" : ""}`} key={scenario.title}>
                    <h3>{scenario.title}</h3>
                    <p>{scenario.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <div className="chart-row">
            <article className="panel glass chart-card premium-panel">
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
            <article className="panel glass timeline-card premium-panel" id="response">
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
              <article className="showcase-card premium-panel" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Mobility Cyber Defense Lab / React Defensive Demo / Presentation Safe Scope</p>
      </footer>
    </div>
  );
}

export default App;
