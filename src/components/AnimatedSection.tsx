import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  stagger?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.children;
    
    const getAnimationConfig = () => {
      switch (animation) {
        case 'fadeUp':
          return { y: 50, opacity: 0 };
        case 'fadeIn':
          return { opacity: 0 };
        case 'slideLeft':
          return { x: -100, opacity: 0 };
        case 'slideRight':
          return { x: 100, opacity: 0 };
        case 'scale':
          return { scale: 0.8, opacity: 0 };
        default:
          return { y: 50, opacity: 0 };
      }
    };

    gsap.fromTo(
      elements,
      getAnimationConfig(),
      {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, stagger]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
