"use client";

import { ReactNode, useRef, useEffect } from "react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
  itemWidth?: number; // デフォルトの幅（px）
}

/**
 * 横スクロール可能なカルーセルコンポーネント
 * スマホ対応のスクロールバーデザインを含む
 */
export function Carousel({ children, className = "", itemWidth = 280 }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 初期表示時に一番左にスクロール位置を設定
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className={`carousel ${className}`}>
      <div
        ref={scrollRef}
        className="carousel__scroll"
        style={
          {
            '--carousel-item-width': `${itemWidth}px`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}

interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * カルーセルのアイテムコンポーネント
 */
export function CarouselItem({ children, className = "" }: CarouselItemProps) {
  return (
    <div className={`carousel__item ${className}`}>
      {children}
    </div>
  );
}
