import React from 'react';
import { useState, useEffect } from 'react';

const enum MouseState {
  UP,
  DOWN,
  LEAVE,
  CLICK
}

const enum TouchState {
  START,
  END
}

interface Props {
  className?: string;
  children?: React.ReactNode;
  trackMouseDown?: boolean;
  trackTouch?: boolean,
  trackClick?: boolean;
  toggleClick?: boolean;
  clickDelay?: number;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd?: (e: React.TouchEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ClickEventListener = (
  { className,
    children,
    trackMouseDown = false,
    trackTouch = false,
    trackClick = false,
    toggleClick = false,
    clickDelay = 300,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    onClick,
  }: Props) => {

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEvent = (eventType: MouseState) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    switch (eventType) {
      case MouseState.DOWN:
        setIsMouseDown(true);
        onMouseDown?.(e);
        break;
      case MouseState.UP:
        setIsMouseDown(false);
        onMouseUp?.(e);
        break;
      case MouseState.LEAVE:
        setIsMouseDown(false);
        onMouseLeave?.(e);
        break;
      case MouseState.CLICK:
        if (toggleClick) {
          setIsClicked(prevClicked => !prevClicked);
        } else {
          setIsClicked(true);
        }
        onClick?.(e);
        break;
    }
  }

  const handleTouchEvent = (eventType: TouchState) => (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    switch(eventType) {
      case TouchState.START:
        setIsMouseDown(true);
        onTouchStart?.(e);
        break;
      case TouchState.END:
        setIsMouseDown(false);
        onTouchEnd?.(e);
        break;
    }
  };

  useEffect(() => {
    if (!isClicked || toggleClick) {
      return;
    }
    const timeoutId = window.setTimeout(() =>
      setIsClicked(false), clickDelay
    );
    return () => {
      window.clearTimeout(timeoutId);
    }
  }, [isClicked, toggleClick, clickDelay]);

  const eventListenerProps: Props = {
    ...(trackMouseDown && {
      onMouseDown: handleMouseEvent(MouseState.DOWN),
      onMouseUp: handleMouseEvent(MouseState.UP),
      onMouseLeave: handleMouseEvent(MouseState.LEAVE),
    }),

    ...(trackTouch && {
      onTouchStart: handleTouchEvent(TouchState.START),
      onTouchEnd: handleTouchEvent(TouchState.END)
    }),

    ...(trackClick && {
      onClick: handleMouseEvent(MouseState.CLICK)
    }),
  }

  const combinedClassName = (
    `${className ?? ''}
     ${trackMouseDown ? (isMouseDown ? "mouseDown" : "mouseUp"): ''}
     ${isClicked ? "clicked" : ''}`
  ).trim();

  return (
    <div {...eventListenerProps} className={combinedClassName}>
      {children}
    </div>
  );
}

export default ClickEventListener;

export { MouseState, TouchState }