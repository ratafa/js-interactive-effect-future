const randomFloatBetween = (min, max) => {
  return Math.random() * (max - min + 1) + min
}

const calcDistance = (x1, y1, x2, y2) => {
  const distanceX = x2 -x1;
  const distanceY = y2 -y1;
  return Math.sqrt(distanceX * distanceY + distanceY * distanceY);
}

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

class Particles {
  constructor(x,y,radius, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
  }

  animate() {
    if(this.x < 0 || this.x > innerWidth || this.y < 0 || this.y > innerHeight) {
      this.x = randomFloatBetween(0, innerWidth);
      this.y = randomFloatBetween(0, innerHeight);
    }

    particles.forEach(particle => {
      const distance = calcDistance(particle.x, particle.y, this.x, this.y);
      if( distance < 400) {
        const from = {x: this.x, y: this.y}
        const to = {x: particle.x, y: particle.y}
        new Lines(from, to, distance).draw();
      }
    })

    this.x += this.velocity.x / 1.3;
    this.y += this.velocity.y / 1.3;

    this.draw();
  }
}

class Lines {
  constructor(from, to, distance) {
    this.from = from;
    this.to = to;
    this.distance = distance;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.from.x, this.from.y);
    ctx.lineTo(this.to.x, this.to.y);
    ctx.strokeStyle = `rgba(63, 239, 239, ${1 -this.distance / 400})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

const TOTAL = 15;
let particles = [];
for (let i = 0; i < TOTAL; i++) {
  const x =randomFloatBetween(0, innerWidth);
  const y =randomFloatBetween(0, innerHeight);
  const radius =randomFloatBetween(0.5, 1.5);
  const velocity = {
    x: randomFloatBetween(-2, 2),
    y: randomFloatBetween(-2, 2)
  }
  particles.push(new Particles(x,y,radius, velocity))
}

const render = () => {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  particles.forEach(particle => particle.animate());
  window.requestAnimationFrame(render)
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

render();

