import Canvas from './Canvas';
import { useState, useEffect } from 'react';
import { MouseState } from '../../hooks/useMouse';
import { Particle } from './Particle';
import { clamp, clampMin, isValidCssColor, getRgbColorValues } from '../../utils';

const MIN_CONNECT_DISTANCE = 40_000;
const MIN_PARTICLE_COUNT = 20;
const MAX_PARTICLE_COUNT = 70;
const PARTICLE_COUNT_FACTOR = 22_000;
const MIN_PARTICLE_SPEED = 0.45;
const MAX_PARTICLE_SPEED = 0.5;
const RESET_PARTICLE_DELAY = 500;
const MOUSE_MOVING_DELAY = 200;
const MOUSE_PUSH_FORCE = 3;

const initParticles = (
  context: CanvasRenderingContext2D,
  particleRadius: number,
  particleRgbColor: string
) => {
  const particles: Particle[] = [];
  const particleCount = clamp(
    context.canvas.height * context.canvas.width / PARTICLE_COUNT_FACTOR,
    MIN_PARTICLE_COUNT,
    MAX_PARTICLE_COUNT
  );

  for (let i = 0; i < particleCount; i++) {
    const p = new Particle(0, 0, 0, 0, particleRadius, particleRgbColor, MOUSE_PUSH_FORCE);
    p.randomVelocity(MIN_PARTICLE_SPEED, MAX_PARTICLE_SPEED);
    p.randomPosition(context.canvas.width, context.canvas.height);
    particles.push(p);
  }
  return particles;
}

const connectParticles = (
  context: CanvasRenderingContext2D,
  particles: Particle[],
  particleLinkColor: string,
  maxOpacity: number
) => {
  const colorValues = getRgbColorValues(particleLinkColor);
  const connectDistance = clampMin(
    (context.canvas.width / 3) * (context.canvas.height / 3),
    MIN_CONNECT_DISTANCE
  );
  context.lineWidth = 1;

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = dx*dx + dy*dy;

      if (distance <= connectDistance) {
        const opacity = maxOpacity - distance / connectDistance;
        context.strokeStyle = `rgba(${colorValues}, ${opacity})`;
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
  style?: React.CSSProperties;
  particleRadius: number;
  particleRgbColor: string;
  mousePushRadius?: number;
  maxOpacity?: number;
}

const ParticleCanvas = ({
  className,
  style,
  particleRadius,
  particleRgbColor,
  mousePushRadius = 0,
  maxOpacity = 1
}: PropTypes) => {

  if (!isValidCssColor(particleRgbColor)) return;

  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const mouse: MouseState = {
    x: 0,
    y: 0,
    radius: 0,
    moving: false
  }
  let particles: Particle[];
  let particleResetTimeoutId: number;
  let mouseMoveTimeoutId: number;

  if (context) {
    mouse.radius = (context.canvas.height / 80) * (context.canvas.width / 80);
    particles = initParticles(context, particleRadius, particleRgbColor);
  }

  const clear = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalAlpha = maxOpacity;
  }

  const draw = (ctx: CanvasRenderingContext2D) => {
    if (!particles) return;
    clear(ctx);

    particles.forEach(p => {
      p.tick(ctx.canvas, mouse, mousePushRadius);
      p.render(ctx);
    });
    connectParticles(ctx, particles, particleRgbColor, maxOpacity);
  }

  const resize = (ctx: CanvasRenderingContext2D) => {
    clearTimeout(particleResetTimeoutId);

    particleResetTimeoutId = window.setTimeout(() => {
      particles = initParticles(ctx, particleRadius, particleRgbColor);
      particles.forEach(p => {
        if (p.x >= ctx.canvas.width || p.y >= ctx.canvas.height) {
          p.randomPosition(ctx.canvas.width, ctx.canvas.height);
        }
      });
    }, RESET_PARTICLE_DELAY);
  }

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

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseMoveTimeoutId);
    }
  }, [handleMouseMove]);

  return (
    <Canvas
      draw={draw}
      resize={resize}
      className={className}
      style={style}
      fps={60}
      establishContext={(ctx: CanvasRenderingContext2D | null) => setContext(ctx)}
    />
  );
}

export default ParticleCanvas;