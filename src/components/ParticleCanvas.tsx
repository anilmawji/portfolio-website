import { useRef, useEffect } from 'react';
import { Particle, MouseState } from './Particle'

const RESET_PARTICLE_DELAY = 500;
const MIN_CONNECT_DISTANCE = 40000;
const MOUSE_PUSH_RADIUS = 5;
const MOUSE_MOVING_DELAY = 200;
const MAX_ALPHA = 0.8;

const initParticleArray = (
  numParticles: number,
  particleRadius: number, 
  particleColor: string,
  maxX: number,
  maxY: number
): Particle[] => {
  const particles: Particle[] = [];

  for (let i = 0; i < numParticles; i++) {
    const p = new Particle(0, 0, 0, 0, particleRadius, particleColor);
    p.randomVelocity();
    p.randomPosition(maxX, maxY);
    particles.push(p);
  }

  return particles;
}

const connectParticles = (
  particles: Particle[],
  context: CanvasRenderingContext2D,
  minDistance: number
) => {
  context.lineWidth = 1;
  
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = dx*dx + dy*dy;

      if (distance <= minDistance) {
        const opacity = MAX_ALPHA - distance / minDistance;
        context.strokeStyle = `rgba(108, 250, 132, ${opacity})`;
        context.beginPath();
        context.moveTo(particles[i].x, particles[i].y);
        context.lineTo(particles[j].x, particles[j].y);
        context.stroke();
      }
    }
  }
}

const getParticleCount = (canvas: HTMLCanvasElement): number => {
  return canvas.height * canvas.width / 20000;
}

const getMinConnectDistance = (canvas: HTMLCanvasElement): number => {
  let distance = (canvas.width/3) * (canvas.height/3);
  return distance < MIN_CONNECT_DISTANCE ? MIN_CONNECT_DISTANCE : distance;
}

interface PropTypes {
  className?: string;
  particleRadius: number;
  particleColor: string;
  particleGlowLevel?: number;
  blurLevel?: number;
}

const ParticleCanvas = ({
  className,
  particleRadius,
  particleColor,
  particleGlowLevel = 0,
  blurLevel = 0
}: PropTypes) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.style.filter = "url(#particleGaussian)";

    let particleResetTimeoutId: number | undefined;
    let particleCount = getParticleCount(canvas);
    let minConnectDistance = getMinConnectDistance(canvas);
    let particles = initParticleArray(
      particleCount, particleRadius, particleColor,
      canvas.width, canvas.height
    );

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;

      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      clearTimeout(particleResetTimeoutId);

      particleResetTimeoutId = setTimeout(() => {
        particleCount = getParticleCount(canvas);
        minConnectDistance = getMinConnectDistance(canvas);

        particles = initParticleArray(
          particleCount, particleRadius, particleColor,
          canvas.width, canvas.height
        );
        particles.forEach(p => {
          if (p.x >= canvas.width || p.y >= canvas.height) {
            p.randomPosition(canvas.width, canvas.height);
          }
        });
      }, RESET_PARTICLE_DELAY);
    }

    const clearCanvas = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.globalAlpha = MAX_ALPHA;
    }

    let animationFrameId: number;
    const mouse: MouseState = {
      x: 0,
      y: 0,
      radius: (canvas.height/80) * (canvas.width/80),
      moving: false
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clearCanvas();

      context.shadowBlur = particleGlowLevel;
      context.shadowColor = particleColor;

      particles.forEach(p => {
        p.tick(canvas, mouse, MOUSE_PUSH_RADIUS);
        p.render(context);
        //drawQuarterCircle(canvas);
      });

      context.shadowBlur = 0;
      context.shadowColor = "";

      connectParticles(particles, context, minConnectDistance);
    }

    let mouseMoveTimeoutId: number | undefined;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();

      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.moving = true;

      clearTimeout(mouseMoveTimeoutId);
      mouseMoveTimeoutId = setTimeout(() => {
        mouse.moving = false;
      }, MOUSE_MOVING_DELAY);
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);

      cancelAnimationFrame(animationFrameId);
      clearTimeout(particleResetTimeoutId);
      clearTimeout(mouseMoveTimeoutId);
    }
  }, []);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="particleGaussian">
            <feGaussianBlur stdDeviation={blurLevel} />
        </filter>
      </svg>
      <canvas ref={canvasRef} className={className} />
    </>
  )
};

export default ParticleCanvas;
