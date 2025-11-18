// ===========================
// PERSONALIZATION VARIABLES
// ===========================
let PERSON_NAME = "Sujata";
let PERSONAL_QUOTE = `“You are my moonlight, ${PERSON_NAME}... and my forever.”`;
let PHOTO_URL = "./assets/image1.jpg";
const QUOTES = [
  `"From the moment I met you, ${PERSON_NAME}, I knew my heart would never belong to anyone else."`,
  `"I don’t need the stars, ${PERSON_NAME}. You’re all the light I could ever need."`,
  `"I want to grow old with you, laugh with you, and live with you—because you are my forever."`,
  `"Every heartbeat reminds me of how lucky I am to have you, ${PERSON_NAME}. You are my reason."`,
  `"No distance is too far when you’re the one I’m longing for, ${PERSON_NAME}."`,
  `"You make ordinary moments extraordinary, just by being with me, ${PERSON_NAME}."`,
  `"Every time I hold you, I feel like I’m exactly where I’m meant to be."`,
  `"I’ve never believed in fate until I met you, ${PERSON_NAME}. Now, I see it in every moment we share."`,
  `"My love for you is a quiet whisper in the night, constant and unwavering, ${PERSON_NAME}."`,
  `"In the chaos of life, you are my peace, ${PERSON_NAME}. My home."`,
  `"If love were a place, it would be the space where you and I exist together, ${PERSON_NAME}."`,
  `"The way you make me feel is beyond words, beyond anything I could have imagined. You are my dream come true."`,
  `"When I look at you, I don’t just see your beauty, ${PERSON_NAME}, I see everything I’ve ever wanted in this life."`,
  `"With you, I learned that love doesn’t need grand gestures—it’s in the little moments we share."`,
  `"I don’t need a reason to love you, ${PERSON_NAME}. My heart has always known it’s meant for you."`,
  `"The best part of every day is knowing that I get to be with you, ${PERSON_NAME}."`,
  `"Every time you touch my hand, it feels like my soul is meeting its perfect match."`,
  `"If I had a lifetime to spend with you, I would find a thousand new ways to say how much I love you."`,
  `"Being with you feels like a dream I never want to wake from, ${PERSON_NAME}. You’re my fairy tale come true."`,
  `"You’re not just my love, you’re my home, my sanctuary, my reason for breathing."`,
  `"I didn’t just fall in love with you, ${PERSON_NAME}. I’ve grown in love with you in every way possible."`,
  `"Even when we’re apart, your love wraps around my heart, making everything better."`,
  `"You are my every thought, my every dream, my every heartbeat."`,
  `"No matter where life takes us, I know I’ll always find my way back to you, ${PERSON_NAME}."`,
  `"You are the smile I can’t forget, the laughter I can’t stop hearing, and the love I can never lose."`,
  `"The best part of me is you, ${PERSON_NAME}, and the best part of life is the love we share."`,
  `"In your arms, I feel safe, I feel loved, and I feel like I belong."`,
  `"You’re not just the love of my life, ${PERSON_NAME}, you’re the light of my soul."`,
  `"I never knew how beautiful life could be until you became a part of mine."`,
  `"Every love story is unique, but ours is the one that makes me believe in magic."`,
  `"You’re my favorite thought when I wake up, my sweetest dream before I sleep."`,
  `"With you, every day feels like a celebration of love, a journey I never want to end."`,
  `"You are the best part of me, ${PERSON_NAME}, the piece I didn’t know was missing."`,
  `"I don’t just love you, ${PERSON_NAME}. I am in awe of you, of the way you make my heart feel alive."`,
  `"There are infinite ways to say 'I love you', but nothing compares to the way you make me feel, ${PERSON_NAME}."`,
  `"No matter how many days I spend with you, it will never be enough because I want a lifetime."`,
  `"Your love is the reason I wake up every morning with a smile, ${PERSON_NAME}."`,
  `"You’re the missing puzzle piece to my heart, the one I’ve been searching for all my life."`,
  `"In a world full of moments, you are my forever, ${PERSON_NAME}."`,
  `"Every second spent with you is a second I never want to lose, ${PERSON_NAME}."`,
  `"My heart doesn’t beat without you, ${PERSON_NAME}. It beats for you."`,
  `"Your love is the fire that keeps me warm, the light that guides me home."`,
  `"If I could, I would wrap my love for you in every sunrise and every sunset, just to show you how much you mean to me."`,
  `"No matter where we are in the world, you will always be my home, ${PERSON_NAME}."`,
  `"In your arms, I’ve found my peace, my joy, and my forever."`,
  `"The more I love you, the more I realize how incredible life is with you by my side."`,
  `"Being in love with you feels like the most beautiful kind of magic, ${PERSON_NAME}."`,
  `"I’ll love you with every part of me, in every way I can, for all the days of my life."`,
  `"Love is not about the moments we count, ${PERSON_NAME}, but the moments we make together."`,
  `"In your eyes, ${PERSON_NAME}, I see all the dreams I've ever wanted to live."`,
  `"Every time I hear your voice, it feels like the world stands still, just for us."`,
  `"If I could hold your hand in every lifetime, I would never let go, ${PERSON_NAME}."`,
  `"You're not just my today, you're my forever. I love you more than words can hold."`,
  `"When I think of love, I think of you, ${PERSON_NAME}, because you are my definition of perfect."`,
  `"With you, every second is a lifetime of happiness, ${PERSON_NAME}. Forever doesn't seem long enough."`,
  `"Your love is the melody that my heart dances to, and with you, I'm finally home."`,
  `"Every moment without you feels incomplete, but with you, everything is whole, ${PERSON_NAME}."`,
  `"You’re not my first love, but you’ll be my last, and the only one that truly matters."`,
];

document.getElementById(
  "photoFrame"
).style.backgroundImage = `url('${PHOTO_URL}')`;
document.getElementById(
  "openingMessage"
).innerHTML = `This monument is for you, <b>${PERSON_NAME}</b><br> built from love, light, and my heart.`;

// ===========================
// SCENE SETUP
// ===========================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 4, 7);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights
const ambient = new THREE.AmbientLight(0x7aa4ff, 0.5);
scene.add(ambient);

const moonLight = new THREE.PointLight(0xaac0ff, 1.6, 40);
moonLight.position.set(0, 5, 5);
scene.add(moonLight);

// ===========================
// MATERIALS
// ===========================
const silverNeon = new THREE.MeshStandardMaterial({
  color: 0xdfe9ff,
  metalness: 0.8,
  roughness: 0.2,
  emissive: 0x4f6aff,
  emissiveIntensity: 0.25,
});

// heart glow
const heartGlow = new THREE.MeshStandardMaterial({
  color: 0x7aa4ff,
  emissive: 0x7aa4ff,
  emissiveIntensity: 1,
  transparent: true,
  metalness: 0.5,
  opacity: 0.8,
});

// ===========================
// MONUMENT
// ===========================
const monument = new THREE.Group();

// base
const base = new THREE.Mesh(
  new THREE.CylinderGeometry(3, 3, 0.6, 64),
  silverNeon
);
monument.add(base);

// dome
const dome = new THREE.Mesh(new THREE.SphereGeometry(1.7, 32, 32), silverNeon);
dome.position.y = 1.7;
monument.add(dome);

// pillars
[
  [2.1, 1, 2.1],
  [-2.1, 1, 2.1],
  [2.1, 1, -2.1],
  [-2.1, 1, -2.1],
].forEach((p) => {
  let pillar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 3, 32),
    silverNeon
  );
  pillar.position.set(p[0], p[1], p[2]);
  monument.add(pillar);
});

// 3D name behind monument
const loader = new THREE.FontLoader();
loader.load(
  "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
  (font) => {
    const textGeo = new THREE.TextGeometry(PERSON_NAME, {
      font: font,
      size: 0.8,
      height: 0.15,
    });

    // Center the text
    textGeo.computeBoundingBox();
    const centerOffset =
      -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);
    textGeo.translate(centerOffset, 0, 0); // shift X so it's centered

    const textMat = new THREE.MeshStandardMaterial({
      color: 0x9dbaff,
      emissive: 0x5a78ff,
      emissiveIntensity: 0.6,
    });

    const textMesh = new THREE.Mesh(textGeo, textMat);

    textMesh.position.set(0, 0.5, -3); // tweak Y/Z as needed
    textMesh.rotation.y = Math.PI; // face camera
    scene.add(textMesh);
  }
);

// heart core
const heart = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.45, 0.15, 100, 16),
  heartGlow
);
heart.position.y = 3.2;
heart.rotation.x = Math.PI / 2;
monument.add(heart);

scene.add(monument);

// ===========================
// Floating stars / particles
// ===========================
const particles = new THREE.BufferGeometry();
const particleCount = 200;
const positions = [];
for (let i = 0; i < particleCount; i++) {
  positions.push((Math.random() - 0.5) * 20); // x
  positions.push(Math.random() * 10); // y
  positions.push((Math.random() - 0.5) * 20); // z
}
particles.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(positions, 3)
);
const particleMat = new THREE.PointsMaterial({
  color: 0x7aa4ff,
  size: 0.08,
  transparent: true,
  opacity: 0.6,
});
const particleSystem = new THREE.Points(particles, particleMat);
scene.add(particleSystem);

// ===========================
// CONTROLS
// ===========================
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// ===========================
// UNLOCK ANIMATION
// ===========================
let unlocked = false;
const quoteBox = document.getElementById("quoteBox");

function handleClick() {
  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  if (!unlocked) {
    unlocked = true;

    // bright glow pulse
    heartGlow.emissiveIntensity = 2;
    setTimeout(() => (heartGlow.emissiveIntensity = 1), 500);

    // show quote
    quoteBox.textContent = randomQuote;
    quoteBox.classList.add("show");
    setTimeout(() => quoteBox.classList.remove("show"), 3500);

    return;
  }

  // after unlock – normal quote display
  quoteBox.textContent = randomQuote;
  quoteBox.classList.add("show");
  setTimeout(() => quoteBox.classList.remove("show"), 2500);
}

// Listen to both click and touchstart
window.addEventListener("click", handleClick);
window.addEventListener("touchstart", handleClick);

// ===========================
// HEART PULSE ANIMATION
// ===========================
let pulseDirection = 1;
function pulseHeart() {
  const min = 0.5,
    max = 1.5;
  heart.material.emissiveIntensity += 0.01 * pulseDirection;
  if (
    heart.material.emissiveIntensity >= max ||
    heart.material.emissiveIntensity <= min
  ) {
    pulseDirection *= -1;
  }
  // heart.material.needsUpdate = true;
}

// ===========================
// PARTICLE ANIMATION
// ===========================
function animateParticles() {
  const positions = particleSystem.geometry.attributes.position.array;
  for (let i = 1; i < positions.length; i += 3) {
    positions[i] -= 0.02;
    if (positions[i] < 0) positions[i] = 10;
  }
  particleSystem.geometry.attributes.position.needsUpdate = true;
}

// ===========================
// MAIN ANIMATION LOOP
// ===========================
function animate() {
  requestAnimationFrame(animate);

  monument.rotation.y += 0.003;
  heart.rotation.z += 0.01;

  pulseHeart();
  animateParticles();

  controls.update();
  renderer.render(scene, camera);
}
animate();

// Responsive
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
