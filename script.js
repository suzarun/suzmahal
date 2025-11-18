// ===========================
// PERSONALIZATION VARIABLES
// ===========================
let PERSON_NAME = "Sujata";
let PERSONAL_QUOTE = `“You are my moonlight, ${PERSON_NAME}... and my forever.”`;
let PHOTO_URL = "./assets/image1.jpg";
const QUOTES = [
  `“Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.”`,
  `“You are my moonlight, ${PERSON_NAME}... and my forever.”`,
  `“In your smile, I see something more beautiful than the stars.”`,
  `“I’ve loved you for a thousand lifetimes and I’ll love you for a thousand more.”`,
  `“When I follow my heart, it leads me straight to you.”`,
  `“Every love story is beautiful, but ours is my favorite.”`,
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
