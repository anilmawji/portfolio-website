import { randRange } from "../../Utils";

interface MouseState {
  x: number,
  y: number,
  radius: number,
  moving: boolean
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
    color: string,
    pushForce: number,
  ) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radius = radius;
    this.color = color;
    this.pushForce = pushForce;
  }

  static isMouseInRect(mouse: MouseState, rect: DOMRect): boolean {
    return mouse.x >= rect.left &&
      mouse.x <= rect.right &&
      mouse.y >= rect.top &&
      mouse.y <= rect.bottom;
  }

  applyMousePush(canvas: HTMLCanvasElement, mouse: MouseState, pushRadius: number) {
    const rect = canvas.getBoundingClientRect();
    const isMouseInCanvas = Particle.isMouseInRect(mouse, rect);

    if (!isMouseInCanvas || !mouse.moving || pushRadius < 0) return;

    // Calculate mouse position relative to the canvas
    const canvasMouseX = mouse.x - rect.left;
    const canvasMouseY = mouse.y - rect.top;

    const dx = canvasMouseX - this.x;
    const dy = canvasMouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance >= mouse.radius + this.radius) return;

    if (canvasMouseX < this.x && this.x < canvas.width - pushRadius) {
      this.x += this.pushForce;
      this.velocityX = -this.velocityX;
    } else if (canvasMouseX > this.x && this.x > pushRadius) {
      this.x -= this.pushForce;
      this.velocityX = -this.velocityX;
    }
    if (canvasMouseY < this.y && this.y < canvas.height - pushRadius) {
      this.y += this.pushForce;
      this.velocityY = -this.velocityY;
    } else if (canvasMouseY > this.y && this.y > pushRadius) {
      this.y -= this.pushForce;
      this.velocityY = -this.velocityY;
    }
  }

  tick(canvas: HTMLCanvasElement, mouse: any, pushRadius: number) {
    // Bounding box collision detection with canvas boundaries
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.velocityX = -this.velocityX;
    }
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.velocityY = -this.velocityY;
    }
    this.applyMousePush(canvas, mouse, pushRadius);
  
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
  }

  randomVelocity(min: number, max: number) {
    const speed = randRange(min, max);
    let velocityX = speed;
    let velocityY = speed;

    if (Math.random() < 0.5) {
      velocityX = -velocityX;
    }
    if (Math.random() < 0.5) {
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

export type { MouseState }

export { Particle }