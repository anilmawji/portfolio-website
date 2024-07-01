import { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 30;
const PARTICLE_RADIUS = 4;
const PARTICLE_COLOR = "rgb(108, 250, 132)";
const MOUSE_PUSH_RADIUS = 5;
const RESET_PARTICLE_DELAY = 500;

interface Mouse {
  x: number,
  y: number,
  radius: number
}

class Particle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  pushForce: number;
  color: string;

  constructor(
    x: number,
    y: number,
    velocityX: number,
    velocityY: number,
    radius: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radius = radius;
    this.color = color;
    this.pushForce = this.radius/2;
  }

  tick(canvas: HTMLCanvasElement, mouse: Mouse, pushRadius: number = 10) {
    // Bounding box collision detection
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.velocityX = -this.velocityX;
    }
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.velocityY = -this.velocityY;
    }

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius + this.radius) {
      if (mouse.x < this.x && this.x < canvas.width - this.radius * pushRadius) {
        this.x += this.pushForce;
        this.velocityX = -this.velocityX;
      } else if (mouse.x > this.x && this.x > this.radius * pushRadius) {
        this.x -= this.pushForce;
        this.velocityX = -this.velocityX;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.radius * pushRadius) {
        this.y += this.pushForce;
        this.velocityY = -this.velocityY;
      } else if (mouse.y > this.y && this.y > this.radius * pushRadius) {
        this.y -= this.pushForce;
        this.velocityY = -this.velocityY;
      }
    }

    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
  }

  randomVelocity() {
    let velocityX = Math.random() * 0.5 + 0.5;
    let velocityY = Math.random() * 0.5 + 0.5;
    const negateX = Math.random() < 0.5;
    const negateY = Math.random() < 0.5;

    if (negateX) {
      velocityX = -velocityX;
    }
    if (negateY) {
      velocityY = -velocityY;
    }

    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  randomPosition(maxX: number, maxY: number) {
    this.x = Math.random() * (maxX - this.radius * 2) + this.radius;
    this.y = Math.random() * (maxY - this.radius * 2) + this.radius;
  }
}

const initParticleArray = (maxX: number, maxY: number): Particle[] => {
  let particles: Particle[] = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particle = new Particle(0, 0, 0, 0, PARTICLE_RADIUS, PARTICLE_COLOR);

    particle.randomVelocity();
    particle.randomPosition(maxX, maxY);
    particles.push(particle);
  }

  return particles;
};

const connectParticles = (particles: Particle[], context: CanvasRenderingContext2D, minDistance: number) => {
  context.lineWidth = 1;
  
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = dx*dx + dy*dy;

      if (distance <= minDistance) {
        const opacity = 1 - distance / minDistance;
        context.strokeStyle = `rgba(108, 250, 132, ${opacity})`;
        context.beginPath();
        context.moveTo(particles[i].x, particles[i].y);
        context.lineTo(particles[j].x, particles[j].y);
        context.stroke();
      }
    }
  }
}

interface PropTypes {
  className?: string;
}

const ParticleCanvas = ({ className }: PropTypes) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let timeoutId: number | undefined;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;

      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        particles.forEach(p => {
          if (p.x >= canvas.width || p.y >= canvas.height) {
            p.randomPosition(canvas.width, canvas.height);
          }
        });
      }, RESET_PARTICLE_DELAY);
    };

    const particles = initParticleArray(canvas.width, canvas.height);
    const minConnectDistance = (canvas.width/4) * (canvas.height/4);
    const mouse: Mouse = {
      x: 0,
      y: 0,
      radius: (canvas.height/80) * (canvas.width/80)
    }
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.tick(canvas, mouse, MOUSE_PUSH_RADIUS);
        p.render(context);
      });

      connectParticles(particles, context, minConnectDistance);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);

      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={className} />
  )
};

export default ParticleCanvas;
