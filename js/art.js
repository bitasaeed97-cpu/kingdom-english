// Original SVG art library — every visual in the app is generated from here.
// No external image files, no copyrighted characters. Rounded, pastel, big-eyed style.

const girlHead = (mood = "happy") => `
  <ellipse cx="100" cy="92" rx="46" ry="44" fill="#ffe3cc"/>
  <path d="M56 84 Q52 40 100 38 Q148 40 144 84 Q150 60 138 46 Q128 30 100 30 Q72 30 62 46 Q50 60 56 84Z" fill="#7a4a2d"/>
  <circle cx="46" cy="70" r="16" fill="#7a4a2d"/>
  <circle cx="154" cy="70" r="16" fill="#7a4a2d"/>
  <circle cx="46" cy="70" r="7" fill="#ffb6d9"/>
  <circle cx="154" cy="70" r="7" fill="#ffb6d9"/>
  <circle cx="82" cy="94" r="9" fill="#5a3b78"/>
  <circle cx="118" cy="94" r="9" fill="#5a3b78"/>
  <circle cx="79" cy="90" r="3" fill="#fff"/>
  <circle cx="115" cy="90" r="3" fill="#fff"/>
  <circle cx="70" cy="106" r="7" fill="#ffb6d9" opacity=".7"/>
  <circle cx="130" cy="106" r="7" fill="#ffb6d9" opacity=".7"/>
  ${mood === "sleepy"
    ? `<path d="M74 94 q8 6 16 0" stroke="#5a3b78" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M110 94 q8 6 16 0" stroke="#5a3b78" stroke-width="3" fill="none" stroke-linecap="round"/>`
    : ``}
  <path d="M88 112 Q100 122 112 112" stroke="#c76b8f" stroke-width="4" fill="none" stroke-linecap="round"/>
`;

const card = (bg, inner, vb = "0 0 200 200") => `
<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" rx="28" fill="${bg}"/>
  ${inner}
</svg>`;

const ART = {
  // ---- mascot ----
  mascotFairy: () => `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="150" rx="46" ry="14" fill="#000" opacity=".06"/>
  <path d="M60 120 Q20 110 28 70 Q54 78 66 110Z" fill="#ffd6f5"/>
  <path d="M140 120 Q180 110 172 70 Q146 78 134 110Z" fill="#ffd6f5"/>
  <ellipse cx="100" cy="128" rx="34" ry="40" fill="#fff8ff"/>
  <polygon points="100,40 112,82 88,82" fill="#ffc857" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="100" cy="60" r="6" fill="#fff6c2"/>
  <ellipse cx="100" cy="118" rx="30" ry="28" fill="#ffffff"/>
  <circle cx="86" cy="114" r="7" fill="#5a3b78"/>
  <circle cx="114" cy="114" r="7" fill="#5a3b78"/>
  <circle cx="83" cy="111" r="2.4" fill="#fff"/>
  <circle cx="111" cy="111" r="2.4" fill="#fff"/>
  <circle cx="76" cy="126" r="6" fill="#ffb6d9" opacity=".8"/>
  <circle cx="124" cy="126" r="6" fill="#ffb6d9" opacity=".8"/>
  <path d="M90 132 Q100 140 110 132" stroke="#e07ab0" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M70 150 Q100 168 130 150 Q124 176 100 178 Q76 176 70 150Z" fill="#b47cff"/>
  <circle cx="60" cy="90" r="4" fill="#fff" opacity=".9"/>
  <circle cx="145" cy="100" r="3" fill="#fff" opacity=".9"/>
</svg>`,

  // ---- generic ui icons ----
  lock: () => `<svg viewBox="0 0 40 40"><rect x="10" y="18" width="20" height="16" rx="5" fill="#b083d9"/><path d="M14 18v-4a6 6 0 0112 0v4" stroke="#b083d9" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="20" cy="26" r="3" fill="#fff"/></svg>`,
  star: (filled = true) => `<svg viewBox="0 0 40 40"><polygon points="20,4 25,15 37,16 28,24 31,36 20,29 9,36 12,24 3,16 15,15" fill="${filled ? "#ffc857" : "#e8e0f5"}"/></svg>`,
  check: () => `<svg viewBox="0 0 40 40"><path d="M9 21 L17 29 L31 12" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  back: () => `<svg viewBox="0 0 40 40"><path d="M25 10 L14 20 L25 30" stroke="#b47cff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  home: () => `<svg viewBox="0 0 40 40"><path d="M7 20 L20 9 L33 20" stroke="#b47cff" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 18 V31 H29 V18" stroke="#b47cff" stroke-width="4.5" fill="none" stroke-linejoin="round"/></svg>`,
  speaker: () => `<svg viewBox="0 0 40 40"><path d="M8 16 H14 L22 9 V31 L14 24 H8 Z" fill="#b47cff"/><path d="M27 14 Q33 20 27 26" stroke="#b47cff" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M31 9 Q40 20 31 31" stroke="#b47cff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".6"/></svg>`,
  gem: (c1 = "#ff8fd6", c2 = "#b47cff") => `<svg viewBox="0 0 200 200"><polygon points="100,20 170,70 140,180 60,180 30,70" fill="url(#g)"/><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><polygon points="100,20 170,70 100,95 30,70" fill="#fff" opacity=".35"/><polygon points="100,95 170,70 140,180 100,150" fill="#000" opacity=".08"/></svg>`,
  crown: () => `<svg viewBox="0 0 200 200"><polygon points="30,150 20,80 62,110 100,55 138,110 180,80 170,150" fill="#ffc857" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><circle cx="100" cy="55" r="10" fill="#ff8fd6"/><circle cx="62" cy="110" r="7" fill="#ff8fd6"/><circle cx="138" cy="110" r="7" fill="#ff8fd6"/><rect x="28" y="150" width="144" height="18" rx="6" fill="#ffb84d"/></svg>`,
  sparkleStar: () => `<svg viewBox="0 0 200 200"><path d="M100 20 L112 88 L180 100 L112 112 L100 180 L88 112 L20 100 L88 88 Z" fill="#fff6c2"/></svg>`,

  // ---- castle icons (map) ----
  castleRoutine: () => `<svg viewBox="0 0 200 200"><rect x="40" y="90" width="120" height="80" rx="10" fill="#ffb6d9"/><polygon points="30,90 60,50 90,90" fill="#ff8fd6"/><polygon points="110,90 140,50 170,90" fill="#ff8fd6"/><rect x="85" y="120" width="30" height="50" rx="6" fill="#fff8ff"/><circle cx="100" cy="60" r="16" fill="#ffe08a"/><circle cx="65" cy="130" r="10" fill="#fff8ff"/><circle cx="135" cy="130" r="10" fill="#fff8ff"/></svg>`,
  castleFamily: () => `<svg viewBox="0 0 200 200"><rect x="40" y="90" width="120" height="80" rx="10" fill="#8fd3ff"/><polygon points="30,90 60,50 90,90" fill="#6fc0f2"/><polygon points="110,90 140,50 170,90" fill="#6fc0f2"/><rect x="85" y="120" width="30" height="50" rx="6" fill="#fff"/><path d="M100 75 C92 65 74 70 76 84 C77 94 100 108 100 108 C100 108 123 94 124 84 C126 70 108 65 100 75Z" fill="#ff8fd6"/></svg>`,
  castleColors: () => `<svg viewBox="0 0 200 200"><rect x="40" y="90" width="120" height="80" rx="10" fill="#c9a8ff"/><polygon points="30,90 60,50 90,90" fill="#b083e0"/><polygon points="110,90 140,50 170,90" fill="#b083e0"/><rect x="85" y="120" width="30" height="50" rx="6" fill="#fff"/><path d="M55 95 A45 45 0 0 1 145 95" stroke="#ff8fd6" stroke-width="8" fill="none"/><path d="M63 95 A37 37 0 0 1 137 95" stroke="#ffc857" stroke-width="8" fill="none"/><path d="M71 95 A29 29 0 0 1 129 95" stroke="#7fe0c4" stroke-width="8" fill="none"/></svg>`,
  castleAnimals: () => `<svg viewBox="0 0 200 200"><rect x="40" y="90" width="120" height="80" rx="10" fill="#ffd08a"/><polygon points="30,90 60,50 90,90" fill="#f0b95c"/><polygon points="110,90 140,50 170,90" fill="#f0b95c"/><rect x="85" y="120" width="30" height="50" rx="6" fill="#fff"/><circle cx="100" cy="75" r="20" fill="#c98a52"/><circle cx="84" cy="60" r="9" fill="#c98a52"/><circle cx="116" cy="60" r="9" fill="#c98a52"/><circle cx="93" cy="74" r="3" fill="#4a2f1c"/><circle cx="107" cy="74" r="3" fill="#4a2f1c"/><ellipse cx="100" cy="82" rx="5" ry="3" fill="#4a2f1c"/></svg>`,
  castleStory: () => `<svg viewBox="0 0 200 200"><rect x="40" y="90" width="120" height="80" rx="10" fill="#b3a8ff"/><polygon points="30,90 60,50 90,90" fill="#9382e6"/><polygon points="110,90 140,50 170,90" fill="#9382e6"/><rect x="85" y="120" width="30" height="50" rx="6" fill="#fff"/><path d="M100 55 A20 20 0 1 0 100 95 A15 15 0 1 1 100 55Z" fill="#fff6c2"/></svg>`,

  // ---- daily routine scene icons (girl doing an action) ----
  sceneWakeUp: () => card("#fff1c2", `
    <circle cx="150" cy="45" r="26" fill="#ffdb70"/>
    <rect x="40" y="120" width="120" height="40" rx="10" fill="#ff8fd6"/>
    <rect x="40" y="105" width="40" height="24" rx="8" fill="#fff"/>
    <g transform="translate(58 60) scale(0.6)">${girlHead("happy")}</g>
    <path d="M120 100 L132 88 M126 100 L140 92 M132 106 L146 100" stroke="#ffb84d" stroke-width="4" stroke-linecap="round"/>
  `),
  sceneBreakfast: () => card("#ffe3cc", `
    <g transform="translate(20 30) scale(0.8)">${girlHead("happy")}</g>
    <ellipse cx="100" cy="168" rx="52" ry="14" fill="#fff"/>
    <circle cx="100" cy="160" r="26" fill="#fff8ea"/>
    <circle cx="100" cy="160" r="16" fill="#ffd27a"/>
    <rect x="140" y="150" width="8" height="24" rx="4" fill="#b47cff"/>
  `),
  sceneToothbrush: () => card("#cdeeff", `
    <g transform="translate(20 20) scale(0.8)">${girlHead("happy")}</g>
    <rect x="118" y="128" width="60" height="12" rx="6" fill="#7fe0c4" transform="rotate(-20 118 128)"/>
    <rect x="150" y="108" width="18" height="20" rx="4" fill="#fff" transform="rotate(-20 150 108)"/>
  `),
  sceneDressed: () => card("#ffd6f5", `
    <g transform="translate(20 10) scale(0.8)">${girlHead("happy")}</g>
    <path d="M60 150 Q100 130 140 150 L150 190 L50 190Z" fill="#ff8fd6"/>
    <circle cx="100" cy="165" r="6" fill="#fff"/>
  `),
  sceneSchool: () => card("#d6f5e0", `
    <g transform="translate(20 15) scale(0.75)">${girlHead("happy")}</g>
    <rect x="118" y="110" width="46" height="56" rx="10" fill="#ff8fd6"/>
    <rect x="130" y="120" width="22" height="14" rx="4" fill="#fff8ff"/>
    <rect x="126" y="140" width="30" height="8" rx="4" fill="#e0579f"/>
  `),
  sceneBath: () => card("#cdeeff", `
    <path d="M40 150 Q100 175 160 150 L155 165 Q100 188 45 165Z" fill="#8fd3ff"/>
    <g transform="translate(30 60) scale(0.7)">${girlHead("happy")}</g>
    <circle cx="150" cy="80" r="8" fill="#fff" opacity=".8"/>
    <circle cx="165" cy="100" r="5" fill="#fff" opacity=".8"/>
    <circle cx="145" cy="110" r="6" fill="#fff" opacity=".8"/>
  `),
  sceneSleep: () => card("#d8cfff", `
    <circle cx="150" cy="45" r="20" fill="#fff6c2"/>
    <circle cx="140" cy="38" r="20" fill="#d8cfff"/>
    <rect x="40" y="130" width="120" height="34" rx="10" fill="#b47cff"/>
    <rect x="40" y="110" width="120" height="26" rx="10" fill="#fff"/>
    <g transform="translate(48 78) scale(0.55)">${girlHead("sleepy")}</g>
    <path d="M120 60 h14 M128 68 h10" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
  `),

  // ---- family portraits ----
  sceneMom: () => card("#ffd6f5", `
    <path d="M46 108 Q40 40 100 36 Q160 40 154 108 Q158 150 150 176 L50 176 Q42 150 46 108Z" fill="#8a4b2d"/>
    <ellipse cx="100" cy="104" rx="47" ry="45" fill="#ffe3cc"/>
    <circle cx="78" cy="106" r="9" fill="#5a3b78"/>
    <circle cx="122" cy="106" r="9" fill="#5a3b78"/>
    <circle cx="75" cy="102" r="3" fill="#fff"/>
    <circle cx="119" cy="102" r="3" fill="#fff"/>
    <circle cx="66" cy="118" r="7" fill="#ffb6d9" opacity=".8"/>
    <circle cx="134" cy="118" r="7" fill="#ffb6d9" opacity=".8"/>
    <path d="M84 130 Q100 140 116 130" stroke="#c76b8f" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M54 96 Q46 60 60 48 Q56 66 66 82Z" fill="#8a4b2d"/>
    <path d="M146 96 Q154 60 140 48 Q144 66 134 82Z" fill="#8a4b2d"/>
    <circle cx="62" cy="130" r="4" fill="#ffc857"/>
    <circle cx="138" cy="130" r="4" fill="#ffc857"/>
  `),
  sceneDad: () => card("#cdeeff", `
    <path d="M52 100 Q50 48 100 46 Q150 48 148 100 L150 176 L50 176Z" fill="#8fd3ff"/>
    <ellipse cx="100" cy="104" rx="46" ry="44" fill="#ffe3cc"/>
    <path d="M56 90 Q54 44 100 42 Q146 44 144 90 Q146 68 100 62 Q54 68 56 90Z" fill="#4a3324"/>
    <circle cx="79" cy="106" r="8" fill="#5a3b78"/>
    <circle cx="121" cy="106" r="8" fill="#5a3b78"/>
    <circle cx="76" cy="102" r="2.6" fill="#fff"/>
    <circle cx="118" cy="102" r="2.6" fill="#fff"/>
    <path d="M82 122 Q100 118 118 122" stroke="#4a3324" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M84 132 Q100 140 116 132" stroke="#c76b8f" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M70 170 L100 150 L130 170 L130 180 L70 180Z" fill="#5a5a7a"/>
    <polygon points="100,150 94,168 106,168" fill="#ff8fd6"/>
  `),
  sceneSister: () => card("#ffe3f2", `
    <ellipse cx="100" cy="106" rx="44" ry="42" fill="#ffe3cc"/>
    <path d="M58 98 Q54 54 100 52 Q146 54 142 98 Q150 76 138 60 Q128 46 100 46 Q72 46 62 60 Q50 76 58 98Z" fill="#a0632f"/>
    <circle cx="50" cy="82" r="14" fill="#a0632f"/>
    <circle cx="150" cy="82" r="14" fill="#a0632f"/>
    <path d="M42 74 Q50 66 60 72" stroke="#ff8fd6" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M158 74 Q150 66 140 72" stroke="#ff8fd6" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="108" r="8" fill="#5a3b78"/>
    <circle cx="120" cy="108" r="8" fill="#5a3b78"/>
    <circle cx="77" cy="104" r="2.6" fill="#fff"/>
    <circle cx="117" cy="104" r="2.6" fill="#fff"/>
    <circle cx="70" cy="120" r="6" fill="#ffb6d9" opacity=".8"/>
    <circle cx="130" cy="120" r="6" fill="#ffb6d9" opacity=".8"/>
    <path d="M86 132 Q100 140 114 132" stroke="#c76b8f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  `),
  sceneBrother: () => card("#d6f5e0", `
    <ellipse cx="100" cy="108" rx="44" ry="42" fill="#ffe3cc"/>
    <path d="M58 96 Q50 50 100 48 Q150 50 142 96 Q148 70 130 58 Q140 50 122 48 Q108 40 92 48 Q76 46 82 56 Q62 56 70 76 Q56 80 58 96Z" fill="#3c2a1e"/>
    <circle cx="80" cy="110" r="8" fill="#5a3b78"/>
    <circle cx="120" cy="110" r="8" fill="#5a3b78"/>
    <circle cx="77" cy="106" r="2.6" fill="#fff"/>
    <circle cx="117" cy="106" r="2.6" fill="#fff"/>
    <circle cx="70" cy="122" r="6" fill="#a8d8ff" opacity=".8"/>
    <circle cx="130" cy="122" r="6" fill="#a8d8ff" opacity=".8"/>
    <path d="M84 134 Q100 142 116 134" stroke="#c76b8f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  `),
  sceneGrandma: () => card("#e8d9ff", `
    <path d="M50 130 Q46 60 100 58 Q154 60 150 130 L152 178 L48 178Z" fill="#b083e0"/>
    <ellipse cx="100" cy="108" rx="44" ry="42" fill="#ffe3cc"/>
    <path d="M58 96 Q52 50 100 48 Q148 50 142 96 Q146 74 100 70 Q54 74 58 96Z" fill="#e6e6ea"/>
    <circle cx="100" cy="56" r="14" fill="#e6e6ea"/>
    <circle cx="80" cy="112" r="14" fill="none" stroke="#7a5a3a" stroke-width="3.5"/>
    <circle cx="120" cy="112" r="14" fill="none" stroke="#7a5a3a" stroke-width="3.5"/>
    <line x1="94" y1="112" x2="106" y2="112" stroke="#7a5a3a" stroke-width="3"/>
    <circle cx="80" cy="112" r="6" fill="#5a3b78"/>
    <circle cx="120" cy="112" r="6" fill="#5a3b78"/>
    <path d="M70 96 q10 -8 20 0" stroke="#a08060" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M110 96 q10 -8 20 0" stroke="#a08060" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M86 134 Q100 142 114 134" stroke="#c76b8f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  `),
  sceneGrandpa: () => card("#fff1c2", `
    <path d="M54 128 Q50 62 100 60 Q150 62 146 128 L148 178 L52 178Z" fill="#5a5a7a"/>
    <ellipse cx="100" cy="108" rx="44" ry="42" fill="#ffe3cc"/>
    <path d="M60 92 Q56 66 100 66 Q144 66 140 92" fill="#e6e6ea"/>
    <circle cx="80" cy="112" r="14" fill="none" stroke="#7a5a3a" stroke-width="3.5"/>
    <circle cx="120" cy="112" r="14" fill="none" stroke="#7a5a3a" stroke-width="3.5"/>
    <line x1="94" y1="112" x2="106" y2="112" stroke="#7a5a3a" stroke-width="3"/>
    <circle cx="80" cy="112" r="6" fill="#5a3b78"/>
    <circle cx="120" cy="112" r="6" fill="#5a3b78"/>
    <path d="M78 130 Q100 126 122 130" stroke="#e6e6ea" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M88 138 Q100 144 112 138" stroke="#c76b8f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <circle cx="100" cy="168" r="6" fill="#ff8fd6"/>
  `),

  // ---- big reward illustration used by the jigsaw puzzle ----
  prizeUnicorn: () => `
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#cdeeff"/>
      <stop offset="1" stop-color="#ffe3f7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#skyG)"/>
  <circle cx="330" cy="60" r="34" fill="#fff6c2"/>
  <path d="M0 340 Q100 300 200 335 T400 330 V400 H0Z" fill="#e0c8ff"/>
  <path d="M70 90 Q60 40 110 34 Q100 55 112 74Z" fill="#fff"/>
  <path d="M150 70 Q140 20 190 16 Q178 40 192 58Z" fill="#fff"/>
  <g transform="translate(90 190)">
    <ellipse cx="120" cy="230" rx="110" ry="18" fill="#b47cff" opacity=".18"/>
    <path d="M20 150 Q0 90 60 70 Q55 40 90 30 Q100 10 130 20 Q150 5 165 25 Q190 20 195 50 Q225 55 220 95 Q245 110 225 145 L210 220 L40 220Z" fill="#ffffff"/>
    <polygon points="115,10 128,55 102,55" fill="#ffc857" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
    <path d="M60 70 Q30 40 10 55 Q30 75 55 90Z" fill="#ff8fd6"/>
    <path d="M60 70 Q20 65 5 90 Q35 90 58 96Z" fill="#b47cff"/>
    <path d="M60 70 Q25 90 20 115 Q48 100 62 100Z" fill="#7fe0c4"/>
    <circle cx="90" cy="100" r="9" fill="#5a3b78"/>
    <circle cx="87" cy="96" r="3" fill="#fff"/>
    <circle cx="60" cy="112" r="7" fill="#ffb6d9" opacity=".8"/>
    <path d="M78 118 Q90 126 100 116" stroke="#c76b8f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="170" cy="150" rx="55" ry="60" fill="#fff"/>
    <path d="M215 145 Q245 130 240 100 Q220 105 208 130Z" fill="#ffb6d9"/>
  </g>
  <circle cx="60" cy="130" r="5" fill="#fff" opacity=".9"/>
  <circle cx="330" cy="180" r="4" fill="#fff" opacity=".9"/>
  <circle cx="350" cy="120" r="3" fill="#fff" opacity=".9"/>
</svg>`,

  // ---- second big reward illustration (princess) for variety across castles ----
  prizePrincess: () => `
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyG2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe3f7"/>
      <stop offset="1" stop-color="#e0d0ff"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#skyG2)"/>
  <circle cx="70" cy="70" r="30" fill="#fff6c2"/>
  <path d="M0 330 Q100 290 200 325 T400 320 V400 H0Z" fill="#c9a8ff"/>
  <polygon points="150,60 158,80 178,80 162,92 168,112 150,100 132,112 138,92 122,80 142,80" fill="#ffc857"/>
  <g transform="translate(100 150)">
    <ellipse cx="100" cy="240" rx="100" ry="16" fill="#8a4fe0" opacity=".18"/>
    <path d="M40 230 Q20 140 100 130 Q180 140 160 230Z" fill="#ff8fd6"/>
    <path d="M60 190 Q100 175 140 190 L150 230 L50 230Z" fill="#fff"/>
    <ellipse cx="100" cy="95" rx="48" ry="46" fill="#ffe3cc"/>
    <path d="M52 90 Q46 30 100 26 Q154 30 148 90 Q158 60 140 40 Q128 20 100 20 Q72 20 60 40 Q42 60 52 90Z" fill="#5a3520"/>
    <path d="M50 80 Q30 90 34 120 Q50 108 56 88Z" fill="#5a3520"/>
    <path d="M150 80 Q170 90 166 120 Q150 108 144 88Z" fill="#5a3520"/>
    <polygon points="70,20 100,-14 130,20 118,8 100,18 82,8" fill="#ffc857" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="94" cy="0" r="5" fill="#ff8fd6"/>
    <circle cx="106" cy="0" r="5" fill="#7fe0c4"/>
    <circle cx="82" cy="98" r="9" fill="#5a3b78"/>
    <circle cx="118" cy="98" r="9" fill="#5a3b78"/>
    <circle cx="79" cy="94" r="3" fill="#fff"/>
    <circle cx="115" cy="94" r="3" fill="#fff"/>
    <circle cx="70" cy="112" r="7" fill="#ffb6d9" opacity=".8"/>
    <circle cx="130" cy="112" r="7" fill="#ffb6d9" opacity=".8"/>
    <path d="M86 124 Q100 132 114 124" stroke="#c76b8f" stroke-width="4" fill="none" stroke-linecap="round"/>
  </g>
  <circle cx="330" cy="140" r="4" fill="#fff" opacity=".9"/>
  <circle cx="60" cy="220" r="3" fill="#fff" opacity=".9"/>
  <circle cx="350" cy="250" r="5" fill="#fff" opacity=".9"/>
</svg>`,

  // ---- animal faces ----
  sceneDog: () => card("#ffe3cc", `
    <ellipse cx="55" cy="80" rx="26" ry="34" fill="#c78b4e" transform="rotate(-18 55 80)"/>
    <ellipse cx="145" cy="80" rx="26" ry="34" fill="#c78b4e" transform="rotate(18 145 80)"/>
    <ellipse cx="100" cy="110" rx="50" ry="46" fill="#f0c98a"/>
    <ellipse cx="100" cy="128" rx="26" ry="20" fill="#fff8ea"/>
    <circle cx="80" cy="104" r="8" fill="#5a3b78"/>
    <circle cx="120" cy="104" r="8" fill="#5a3b78"/>
    <circle cx="77" cy="100" r="2.6" fill="#fff"/>
    <circle cx="117" cy="100" r="2.6" fill="#fff"/>
    <ellipse cx="100" cy="120" rx="10" ry="7" fill="#5a3b78"/>
    <path d="M100 127 L100 134" stroke="#5a3b78" stroke-width="3"/>
    <path d="M84 138 Q100 148 116 138" stroke="#5a3b78" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="68" cy="122" r="6" fill="#ffb6a0" opacity=".7"/>
    <circle cx="132" cy="122" r="6" fill="#ffb6a0" opacity=".7"/>
  `),
  sceneCat: () => card("#ffe8f5", `
    <polygon points="58,60 78,96 42,96" fill="#f5a35c"/>
    <polygon points="142,60 122,96 158,96" fill="#f5a35c"/>
    <polygon points="60,72 74,92 50,92" fill="#ffd9b0"/>
    <polygon points="140,72 126,92 150,92" fill="#ffd9b0"/>
    <ellipse cx="100" cy="112" rx="48" ry="44" fill="#f5a35c"/>
    <circle cx="80" cy="108" r="9" fill="#5a3b78"/>
    <circle cx="120" cy="108" r="9" fill="#5a3b78"/>
    <circle cx="77" cy="104" r="3" fill="#fff"/>
    <circle cx="117" cy="104" r="3" fill="#fff"/>
    <polygon points="100,120 94,128 106,128" fill="#ff8fb0"/>
    <path d="M100 128 Q100 134 92 136 M100 128 Q100 134 108 136" stroke="#5a3b78" stroke-width="2.5" fill="none"/>
    <g stroke="#8a5a30" stroke-width="2.5" stroke-linecap="round">
      <line x1="30" y1="112" x2="62" y2="116"/>
      <line x1="30" y1="124" x2="62" y2="124"/>
      <line x1="170" y1="112" x2="138" y2="116"/>
      <line x1="170" y1="124" x2="138" y2="124"/>
    </g>
  `),
  sceneCow: () => card("#f5f5ff", `
    <ellipse cx="100" cy="112" rx="50" ry="46" fill="#fffaf5"/>
    <ellipse cx="66" cy="92" rx="16" ry="20" fill="#3c2a2a"/>
    <ellipse cx="146" cy="100" rx="14" ry="18" fill="#3c2a2a" opacity=".85"/>
    <circle cx="50" cy="62" r="9" fill="#3c2a2a"/>
    <circle cx="150" cy="62" r="9" fill="#3c2a2a"/>
    <path d="M46 70 Q50 56 60 58" stroke="#e6d8c8" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M154 70 Q150 56 140 58" stroke="#e6d8c8" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="100" cy="132" rx="28" ry="20" fill="#ffb6c8"/>
    <circle cx="90" cy="132" r="3.5" fill="#c76b8f"/>
    <circle cx="110" cy="132" r="3.5" fill="#c76b8f"/>
    <circle cx="80" cy="106" r="8" fill="#5a3b78"/>
    <circle cx="120" cy="106" r="8" fill="#5a3b78"/>
    <circle cx="77" cy="102" r="2.6" fill="#fff"/>
    <circle cx="117" cy="102" r="2.6" fill="#fff"/>
  `),
  sceneDuck: () => card("#fff8d9", `
    <ellipse cx="100" cy="110" rx="48" ry="44" fill="#ffd94d"/>
    <circle cx="78" cy="102" r="8" fill="#5a3b78"/>
    <circle cx="118" cy="102" r="8" fill="#5a3b78"/>
    <circle cx="75" cy="98" r="2.6" fill="#fff"/>
    <circle cx="115" cy="98" r="2.6" fill="#fff"/>
    <ellipse cx="98" cy="126" rx="30" ry="16" fill="#ff9d3d"/>
    <path d="M68 126 Q98 138 128 126" stroke="#e8801f" stroke-width="2.5" fill="none"/>
    <ellipse cx="60" cy="80" rx="10" ry="14" fill="#ffd94d" transform="rotate(-20 60 80)"/>
    <ellipse cx="140" cy="80" rx="10" ry="14" fill="#ffd94d" transform="rotate(20 140 80)"/>
  `),
  sceneSheep: () => card("#eef2ff", `
    <g fill="#fff">
      <circle cx="56" cy="70" r="18"/><circle cx="80" cy="56" r="20"/><circle cx="110" cy="50" r="21"/>
      <circle cx="140" cy="56" r="20"/><circle cx="160" cy="74" r="18"/>
      <circle cx="50" cy="100" r="18"/><circle cx="166" cy="102" r="18"/>
      <circle cx="60" cy="128" r="18"/><circle cx="150" cy="130" r="18"/>
    </g>
    <ellipse cx="105" cy="112" rx="42" ry="40" fill="#5a4a42"/>
    <ellipse cx="105" cy="118" rx="34" ry="30" fill="#f0e4da"/>
    <circle cx="88" cy="112" r="7" fill="#3a2a24"/>
    <circle cx="122" cy="112" r="7" fill="#3a2a24"/>
    <circle cx="85" cy="108" r="2.4" fill="#fff"/>
    <circle cx="119" cy="108" r="2.4" fill="#fff"/>
    <ellipse cx="105" cy="130" rx="9" ry="6" fill="#3a2a24"/>
  `),
  sceneBunny: () => card("#ffeef7", `
    <ellipse cx="72" cy="56" rx="16" ry="42" fill="#fff" stroke="#f2c9dc" stroke-width="3" transform="rotate(-8 72 56)"/>
    <ellipse cx="72" cy="60" rx="8" ry="30" fill="#ffb6d9" transform="rotate(-8 72 60)"/>
    <ellipse cx="128" cy="56" rx="16" ry="42" fill="#fff" stroke="#f2c9dc" stroke-width="3" transform="rotate(8 128 56)"/>
    <ellipse cx="128" cy="60" rx="8" ry="30" fill="#ffb6d9" transform="rotate(8 128 60)"/>
    <ellipse cx="100" cy="118" rx="46" ry="42" fill="#fff" stroke="#f2c9dc" stroke-width="3"/>
    <circle cx="82" cy="114" r="8" fill="#5a3b78"/>
    <circle cx="118" cy="114" r="8" fill="#5a3b78"/>
    <circle cx="79" cy="110" r="2.6" fill="#fff"/>
    <circle cx="115" cy="110" r="2.6" fill="#fff"/>
    <polygon points="100,124 94,132 106,132" fill="#ff8fb0"/>
    <path d="M100 132 Q100 138 92 140 M100 132 Q100 138 108 140" stroke="#5a3b78" stroke-width="2.5" fill="none"/>
    <circle cx="68" cy="128" r="6" fill="#ffb6d9" opacity=".8"/>
    <circle cx="132" cy="128" r="6" fill="#ffb6d9" opacity=".8"/>
  `),

  // ---- color blobs (colors & numbers castle) ----
  colorBlob: (hex) => card("#fffaf5", `
    <g fill="${hex}">
      <circle cx="100" cy="100" r="30"/>
      <circle cx="100" cy="56" r="22"/>
      <circle cx="100" cy="144" r="22"/>
      <circle cx="56" cy="100" r="22"/>
      <circle cx="144" cy="100" r="22"/>
    </g>
    <circle cx="100" cy="100" r="16" fill="#fff" opacity=".55"/>
  `),
  colorRed: function () { return this.colorBlob("#ff6b6b"); },
  colorBlue: function () { return this.colorBlob("#5b9bff"); },
  colorYellow: function () { return this.colorBlob("#ffd93d"); },
  colorGreen: function () { return this.colorBlob("#6bd98a"); },
  colorPurple: function () { return this.colorBlob("#b47cff"); },
  colorPink: function () { return this.colorBlob("#ff8fd6"); },

  // ---- number cards (colors & numbers castle) ----
  numberCard: (n) => {
    const positions = [
      [[100, 100]],
      [[75, 80], [125, 120]],
      [[100, 65], [65, 125], [135, 125]],
      [[70, 70], [130, 70], [70, 130], [130, 130]],
      [[100, 55], [60, 90], [140, 90], [75, 140], [125, 140]],
    ][n - 1];
    const stars = positions
      .map(([x, y]) => `<g transform="translate(${x} ${y})">${ART.star(true).replace(/<svg[^>]*viewBox="0 0 40 40"[^>]*>|<\/svg>/g, "").replace(/<polygon/, '<polygon transform="translate(-20 -20) scale(1.1)"')}</g>`)
      .join("");
    return card("#fff8ea", `${stars}<text x="24" y="42" font-family="Baloo 2, sans-serif" font-size="34" font-weight="800" fill="#b47cff">${n}</text>`);
  },
  numberOne: function () { return this.numberCard(1); },
  numberTwo: function () { return this.numberCard(2); },
  numberThree: function () { return this.numberCard(3); },
  numberFour: function () { return this.numberCard(4); },
  numberFive: function () { return this.numberCard(5); },

  // ---- more big reward illustrations (variety across castles) ----
  prizeRainbow: () => `
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#cdeeff"/>
  <path d="M40 320 Q40 180 200 180 Q360 180 360 320" fill="none" stroke="#ff6b6b" stroke-width="18"/>
  <path d="M62 320 Q62 200 200 200 Q338 200 338 320" fill="none" stroke="#ffd93d" stroke-width="18"/>
  <path d="M84 320 Q84 220 200 220 Q316 220 316 320" fill="none" stroke="#6bd98a" stroke-width="18"/>
  <path d="M106 320 Q106 240 200 240 Q294 240 294 320" fill="none" stroke="#5b9bff" stroke-width="18"/>
  <path d="M128 320 Q128 260 200 260 Q272 260 272 320" fill="none" stroke="#b47cff" stroke-width="18"/>
  <ellipse cx="60" cy="330" rx="46" ry="30" fill="#fff"/>
  <ellipse cx="340" cy="330" rx="46" ry="30" fill="#fff"/>
  <circle cx="200" cy="110" r="26" fill="#fff6c2"/>
  <polygon points="200,60 210,95 245,95 217,115 227,150 200,130 173,150 183,115 155,95 190,95" fill="#ffc857"/>
  <circle cx="90" cy="150" r="5" fill="#fff" opacity=".9"/>
  <circle cx="320" cy="170" r="4" fill="#fff" opacity=".9"/>
</svg>`,
  prizeAnimalFriends: () => card("#e0f5ea", `
    <ellipse cx="100" cy="180" rx="90" ry="16" fill="#6bd98a" opacity=".25"/>
    <ellipse cx="70" cy="130" rx="44" ry="42" fill="#ffe3cc"/>
    <path d="M30 118 Q22 60 100 58 Q60 90 66 130Z" fill="#7a4a2d"/>
    <circle cx="55" cy="126" r="7" fill="#5a3b78"/>
    <circle cx="85" cy="126" r="7" fill="#5a3b78"/>
    <path d="M62 144 Q70 150 78 144" stroke="#c76b8f" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="150" cy="145" rx="16" ry="22" fill="#fff" stroke="#f2c9dc" stroke-width="3" transform="rotate(-10 150 145)"/>
    <ellipse cx="182" cy="145" rx="16" ry="22" fill="#fff" stroke="#f2c9dc" stroke-width="3" transform="rotate(10 182 145)"/>
    <ellipse cx="165" cy="180" rx="42" ry="38" fill="#fff" stroke="#f2c9dc" stroke-width="3"/>
    <circle cx="152" cy="176" r="6" fill="#5a3b78"/>
    <circle cx="178" cy="176" r="6" fill="#5a3b78"/>
    <polygon points="165,184 160,190 170,190" fill="#ff8fb0"/>
  `, "0 0 200 200"),
  prizeStarryNight: () => `
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="nightG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2c1a4d"/>
      <stop offset="1" stop-color="#6a4fc9"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#nightG)"/>
  <circle cx="300" cy="80" r="36" fill="#fff6c2"/>
  <circle cx="286" cy="70" r="30" fill="#2c1a4d" opacity=".5"/>
  <g fill="#fff">
    <circle cx="60" cy="60" r="3"/><circle cx="120" cy="40" r="2.5"/><circle cx="200" cy="70" r="3"/>
    <circle cx="50" cy="140" r="2.5"/><circle cx="340" cy="180" r="3"/><circle cx="90" cy="200" r="2"/>
    <circle cx="250" cy="130" r="2.5"/><circle cx="370" cy="90" r="2.5"/>
  </g>
  <path d="M0 330 Q100 300 200 328 T400 320 V400 H0Z" fill="#1e1240"/>
  <g transform="translate(120 220)">
    <ellipse cx="80" cy="150" rx="70" ry="14" fill="#000" opacity=".2"/>
    <rect x="30" y="90" width="100" height="60" rx="16" fill="#b47cff"/>
    <rect x="30" y="80" width="100" height="24" rx="10" fill="#fff"/>
    <ellipse cx="70" cy="62" rx="34" ry="32" fill="#ffe3cc"/>
    <path d="M40 60 Q36 30 70 28 Q104 30 100 60 Q106 44 96 34 Q88 22 70 22 Q52 22 44 34 Q34 44 40 60Z" fill="#7a4a2d"/>
    <path d="M52 66 q6 5 12 0" stroke="#5a3b78" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M76 66 q6 5 12 0" stroke="#5a3b78" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M58 78 Q70 84 82 78" stroke="#c76b8f" stroke-width="3" fill="none" stroke-linecap="round"/>
    <polygon points="180,40 188,58 208,60 192,72 197,92 180,80 163,92 168,72 152,60 172,58" fill="#ffc857"/>
  </g>
</svg>`,

  // ---- small prop icons (used as order-tray thumbnails, reuse scenes at smaller size) ----
  iconSun: () => `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="#ffc857"/><g stroke="#ffc857" stroke-width="3" stroke-linecap="round"><line x1="20" y1="2" x2="20" y2="7"/><line x1="20" y1="33" x2="20" y2="38"/><line x1="2" y1="20" x2="7" y2="20"/><line x1="33" y1="20" x2="38" y2="20"/></g></svg>`,
  iconMoon: () => `<svg viewBox="0 0 40 40"><path d="M25 6 A16 16 0 1 0 25 34 A13 13 0 0 1 25 6Z" fill="#b47cff"/></svg>`,
  iconHeart: () => `<svg viewBox="0 0 40 40"><path d="M20 34 C4 24 4 10 14 8 C18 7 20 11 20 14 C20 11 22 7 26 8 C36 10 36 24 20 34Z" fill="#ff8fd6"/></svg>`,
  iconPaw: () => `<svg viewBox="0 0 40 40"><circle cx="20" cy="26" r="9" fill="#c78b4e"/><circle cx="8" cy="14" r="5" fill="#c78b4e"/><circle cx="20" cy="8" r="5" fill="#c78b4e"/><circle cx="32" cy="14" r="5" fill="#c78b4e"/></svg>`,
  iconRainbow: () => `<svg viewBox="0 0 40 40"><path d="M4 32 Q4 12 20 12 Q36 12 36 32" fill="none" stroke="#ff6b6b" stroke-width="3"/><path d="M9 32 Q9 17 20 17 Q31 17 31 32" fill="none" stroke="#ffd93d" stroke-width="3"/><path d="M14 32 Q14 22 20 22 Q26 22 26 32" fill="none" stroke="#5b9bff" stroke-width="3"/></svg>`,
  iconBook: () => `<svg viewBox="0 0 40 40"><path d="M6 8 Q14 4 20 8 V32 Q14 28 6 32Z" fill="#b47cff"/><path d="M34 8 Q26 4 20 8 V32 Q26 28 34 32Z" fill="#ff8fd6"/></svg>`,

  girlHead,
  card,
};

export default ART;
