import { useEffect, useRef } from 'react'

interface PropTypes {
  draw: (ctx: CanvasRenderingContext2D) => void;
  resize: (ctx: CanvasRenderingContext2D) => void;
  establishContext?: (ctx: CanvasRenderingContext2D | null) => void;
  className?: string;
  fps?: number;
}

const Canvas = ({ draw, resize, establishContext, className, fps = 30, ...restProps}: PropTypes) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resizeCanvas = (ctx: CanvasRenderingContext2D) => {
    const parent = ctx.canvas.parentElement;
    if (!parent) return;

    ctx.canvas.width = parent.clientWidth;
    ctx.canvas.height = parent.clientHeight;
    resize(ctx);
  }

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx: CanvasRenderingContext2D | null = canvasRef.current.getContext('2d');
    if (!ctx) {
      console.warn("Canvas context is null. The component is not being rendered.");
      return;
    }
    if (establishContext) {
      establishContext(ctx);
    }

    let animationFrameId: number;
    let fpsInterval: number;
    let now: number;
    let then: number;
    let elapsed: number;

    const render = () => {
      animationFrameId = window.requestAnimationFrame(render);
      now = Date.now();
      elapsed = now - then;
      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        draw(ctx);
      }
    }
    fpsInterval = 1000 / fps;
    then = Date.now();
    render();

    resizeCanvas(ctx);
    window.addEventListener("resize", () => resizeCanvas(ctx));

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", () => resizeCanvas(ctx));
    }
  }, [canvasRef, draw, resize, resizeCanvas]);

  return <canvas ref={canvasRef} className={className} {...restProps} />
};

export default Canvas