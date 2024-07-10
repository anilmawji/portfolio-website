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

  tick(canvas: HTMLCanvasElement, mouse: any, pushRadius: number = 10) {
    // Bounding box collision detection
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.velocityX = -this.velocityX;
    }
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.velocityY = -this.velocityY;
    }

    if (mouse.moving) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx*dx + dy*dy);

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
    let velocityX = 0.5;
    let velocityY = 0.5;

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

export type { MouseState };

export { Particle };