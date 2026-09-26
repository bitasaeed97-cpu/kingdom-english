let canvas, ctx, particles = [];
let running = false;

const COLORS = ["#ff8fd6", "#b47cff", "#ffc857", "#7fe0c4", "#8fd3ff"];

function ensureCanvas() {
  if (canvas) return;
  canvas = document.getElementById("fx-canvas");
  ctx = canvas.getContext("2d");
  resize();
  window.addEventListener("resize", resize);
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function spawn(x, y, count, opts = {}) {
  ensureCanvas();
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * (opts.burst ? 7 : 3);
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (opts.burst ? 3 : 0),
      size: 4 + Math.random() * 6,
      color: COLORS[(Math.random() * COLORS.length) | 0],
      life: 0,
      maxLife: 50 + Math.random() * 40,
      spin: Math.random() * Math.PI,
      spinSpeed: (Math.random() - 0.5) * 0.3,
      shape: Math.random() < 0.5 ? "circle" : "square",
    });
  }
  if (!running) tick();
}

function tick() {
  running = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter((p) => p.life < p.maxLife);
  for (const p of particles) {
    p.life++;
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.12;
    p.spin += p.spinSpeed;
    const alpha = 1 - p.life / p.maxLife;
    ctx.save();
    ctx.globalAlpha = Math.max(alpha, 0);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.spin);
    ctx.fillStyle = p.color;
    if (p.shape === "circle") {
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    }
    ctx.restore();
  }
  if (particles.length > 0) {
    requestAnimationFrame(tick);
  } else {
    running = false;
  }
}

export const Fx = {
  sparkleAt(x, y) {
    spawn(x, y, 14);
  },
  confettiBurst() {
    ensureCanvas();
    const cx = window.innerWidth / 2;
    spawn(cx * 0.3, window.innerHeight * 0.3, 40, { burst: true });
    spawn(cx * 1.7, window.innerHeight * 0.3, 40, { burst: true });
  },
};
