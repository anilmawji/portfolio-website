import { randRange } from "../../utils";
import { MouseState } from "../../hooks/useMouse";

class Particle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  maxSpeed: number;
  radius: number;
  color: string;
  pushForce: number;

  constructor(
    x: number,
    y: number,
    velocityX: number,
    velocityY: number,
    maxSpeed: number,
    radius: number,
    color: string,
    pushForce: number,
  ) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.maxSpeed = maxSpeed;
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
    if (!Particle.isMouseInRect(mouse, rect) || !mouse.moving || pushRadius < 0) return;

    // Calculate mouse position relative to the canvas
    const canvasMouseX = mouse.x - rect.left;
    const canvasMouseY = mouse.y - rect.top;

    const dx = canvasMouseX - this.x;
    const dy = canvasMouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance >= mouse.radius + this.radius) {
      return;
    }
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
    const collideX = this.x + this.radius >= canvas.width || this.x - this.radius <= 0;
    const collideY = this.y + this.radius >= canvas.height || this.y - this.radius <= 0;

    // Bounding box collision detection with canvas boundaries
    if (collideX) {
      this.velocityX = -this.velocityX;
      this.x += this.velocityX;
      this.velocityY += this.randomVelocityAdjustment(); // Apply a small random adjustment to the velocity
    }
    if (collideY) {
      this.velocityY = -this.velocityY;
      this.y += this.velocityY;
      this.velocityY += this.randomVelocityAdjustment(); // Apply a small random adjustment to the velocity
    }
    this.applyMousePush(canvas, mouse, pushRadius);
  
    // Limit the maximum speed
    if (collideX || collideY) {
      const speed = Math.hypot(this.velocityX, this.velocityY);

      if (speed > this.maxSpeed) {
        const scale = this.maxSpeed / speed;
        this.velocityX *= scale;
        this.velocityY *= scale;
      }
    }
    if (!collideX) {
      this.x += this.velocityX;
    }
    if (!collideY) {
      this.y += this.velocityY;
    }
  }

  // Randomly adjust velocity between -0.5 and 0.5
  randomVelocityAdjustment() {
    return (Math.random() - 0.5) * 1;
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

export { Particle }