import { useEffect, useRef } from 'react';

interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  draw: (ctx: CanvasRenderingContext2D) => void;
  resize: (ctx: CanvasRenderingContext2D) => void;
  establishContext?: (ctx: CanvasRenderingContext2D | null) => void;
  className?: string;
  style?: React.CSSProperties;
  fps?: number;
}

const Canvas = ({ draw, resize, establishContext, className, style, fps = 30, ...restProps}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx: CanvasRenderingContext2D | null = canvasRef.current.getContext("2d");

    if (!ctx) {
      console.warn("Canvas context is null. The component will not be rendered.");
      return;
    }
    establishContext?.(ctx);

    let animationFrameId: number;
    let fpsInterval: number;
    let now: number;
    let then: number;
    let elapsed: number;

    const drawCanvas = () => {
      animationFrameId = window.requestAnimationFrame(drawCanvas);
      now = Date.now();
      elapsed = now - then;
      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        draw(ctx);
      }
    }

    const resizeCanvas = (runCallback: boolean) => {
      const parent = ctx.canvas.parentElement;
      if (!parent) return;
  
      ctx.canvas.width = parent.clientWidth;
      ctx.canvas.height = parent.clientHeight;

      if (runCallback) {
        resize(ctx);
      }
    }

    const handleResize = () => {
      resizeCanvas(true);
    }

    fpsInterval = 1000 / fps;
    then = Date.now();
    drawCanvas();
    resizeCanvas(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    }
  }, [canvasRef, fps, draw, resize]);

  return (
    <canvas ref={canvasRef} className={className} style={style} {...restProps} />
  );
}

export default Canvas;