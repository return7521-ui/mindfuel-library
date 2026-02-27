// Part 4: Rendering engine, interactions, audio controls, and accessibility-aware behavior
import { sections } from "./content.js";

const app = document.querySelector("#app");
const motionBtn = document.querySelector("#motion-toggle");
const soundBtn = document.querySelector("#sound-toggle");
let soundEnabled = false;
let audioCtx;

const dynamicTitle = (text) =>
  `<span class="dynamic-title">${text
    .split("")
    .map((char) =>
      char === " "
        ? `<span style="width:0.35em"></span>`
        : `<span style="--jiggle:${Math.floor(Math.random() * 8) + 1}">${char}</span>`
    )
    .join("")}</span>`;

function renderSection(section) {
  if (section.items) {
    return `
      <section id="${section.id}" class="${section.className}">
        <h2>${dynamicTitle(section.title)}</h2>
        <p>${section.intro}</p>
        <div class="story-grid">
          ${section.items
            .map(
              (item) => `<article class="card"><h3>${item.heading}</h3><p>${item.text}</p></article>`
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (section.timeline) {
    return `
      <section id="${section.id}" class="${section.className}">
        <h2>${dynamicTitle(section.title)}</h2>
        <p>${section.intro}</p>
        <div class="timeline-track">
          ${section.timeline
            .map(
              ([phase, text]) =>
                `<article class="timeline-step"><div class="dot" aria-hidden="true"></div><div><h3>${phase}</h3><p>${text}</p></div></article>`
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (section.regions) {
    return `
      <section id="${section.id}" class="${section.className}">
        <h2>${dynamicTitle(section.title)}</h2>
        <p>${section.intro}</p>
        <div class="region-grid">
          ${section.regions.map(([name, info]) => `<article class="card"><h3>${name}</h3><p>${info}</p></article>`).join("")}
        </div>
      </section>
    `;
  }

  if (section.facts) {
    return `
      <section id="${section.id}" class="${section.className}">
        <h2>${dynamicTitle(section.title)}</h2>
        <p>${section.intro}</p>
        <div class="fact-grid">
          ${section.facts
            .map(
              (fact, i) =>
                `<button class="card fact-card" data-fact="${i}" aria-label="Reveal fact ${i + 1}"><h3>Color Capsule ${i + 1}</h3><p>${fact}</p></button>`
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (section.quotes) {
    return `
      <section id="${section.id}" class="${section.className}">
        <h2>${dynamicTitle(section.title)}</h2>
        <p>${section.intro}</p>
        <div class="quote-grid">
          ${section.quotes.map((quote) => `<blockquote class="card">“${quote}”</blockquote>`).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section id="${section.id}" class="${section.className}">
      <h2>${dynamicTitle(section.title)}</h2>
      <p>${section.intro}</p>
      <button id="surprise-trigger" class="pill-btn">${section.cta}</button>
      <div id="surprise-feed" class="surprise-note" aria-live="polite">Awaiting playful chaos...</div>
    </section>
  `;
}

app.innerHTML = sections.map(renderSection).join("");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

motionBtn?.addEventListener("click", () => {
  const reduced = document.body.classList.toggle("reduce-motion");
  motionBtn.setAttribute("aria-pressed", String(reduced));
});

function beep({ freq = 400, duration = 0.12, type = "sine" } = {}) {
  if (!soundEnabled) return;
  audioCtx = audioCtx || new AudioContext();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = 0.0001;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  const t = audioCtx.currentTime;
  gain.gain.exponentialRampToValueAtTime(0.1, t + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.start(t);
  osc.stop(t + duration);
}

soundBtn?.addEventListener("click", async () => {
  soundEnabled = !soundEnabled;
  soundBtn.setAttribute("aria-pressed", String(soundEnabled));
  soundBtn.textContent = soundEnabled ? "Sound On" : "Enable Sound";
  if (soundEnabled) beep({ freq: 610, type: "triangle" });
});

document.querySelectorAll(".fact-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = `rotate(${(Math.random() - 0.5) * 4}deg) scale(1.04)`;
    beep({ freq: 480 + Math.random() * 200, type: "square", duration: 0.09 });
  });
});

const surpriseLines = [
  "Friendly color reminder: Ask before applying color. Consent is festive.",
  "Hidden achievement unlocked: You found the joy button. +100 rang points.",
  "Holi 2026 mood update: laughter level = dangerously high.",
  "Blessing confetti delivered. May your year be stubbornly vibrant."
];

const surpriseTrigger = document.querySelector("#surprise-trigger");
const surpriseFeed = document.querySelector("#surprise-feed");

surpriseTrigger?.addEventListener("click", () => {
  const line = surpriseLines[Math.floor(Math.random() * surpriseLines.length)];
  surpriseFeed.textContent = line;
  window.dispatchEvent(new CustomEvent("powderBurst"));
  beep({ freq: 730, type: "sawtooth", duration: 0.14 });
});

// Part 5: Lightweight particle painter for cursor trails and burst moments
const canvas = document.querySelector("#powder-canvas");
const ctx = canvas.getContext("2d");
const particles = [];
const palette = ["#ff4d9d", "#8cf5ff", "#ffe66d", "#7b5cff", "#ff8c42"];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

function spawn(x, y, amount = 8) {
  for (let i = 0; i < amount; i += 1) {
    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.7) * 2,
      life: 80 + Math.random() * 60,
      color: palette[Math.floor(Math.random() * palette.length)],
      size: 2 + Math.random() * 7
    });
  }
}

addEventListener("pointermove", (e) => {
  if (document.body.classList.contains("reduce-motion")) return;
  spawn(e.clientX, e.clientY, 2);
});

addEventListener("powderBurst", () => spawn(innerWidth * (0.2 + Math.random() * 0.6), innerHeight * 0.4, 70));

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.life -= 1;
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.014;
    ctx.globalAlpha = Math.max(p.life / 140, 0);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  }
  requestAnimationFrame(loop);
}
loop();
