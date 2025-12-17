import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

const ParallaxSection = ({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up' 
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const yMovement = direction === 'up' ? -100 * speed : 100 * speed;
      
      gsap.to(sectionRef.current, {
        y: yMovement,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxSection;
