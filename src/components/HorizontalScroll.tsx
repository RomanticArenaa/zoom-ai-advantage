import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

const HorizontalScroll = ({ children, className = '' }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollElement = scrollRef.current;
      const containerElement = containerRef.current;
      
      if (!scrollElement || !containerElement) return;

      const scrollWidth = scrollElement.scrollWidth;
      const containerWidth = containerElement.offsetWidth;

      gsap.to(scrollElement, {
        x: -(scrollWidth - containerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerElement,
          start: 'top top',
          end: () => `+=${scrollWidth - containerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={scrollRef} className="flex">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
