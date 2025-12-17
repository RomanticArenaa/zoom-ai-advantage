import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

const TextReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  as: Component = 'div' 
}: TextRevealProps) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { 
          y: 100, 
          opacity: 0,
          clipPath: 'inset(100% 0% 0% 0%)'
        },
        { 
          y: 0, 
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          delay,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <Component 
      ref={textRef as any} 
      className={`overflow-hidden ${className}`}
    >
      {children}
    </Component>
  );
};

export default TextReveal;
