import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VectorBackgroundProps {
  variant?: 'hero' | 'services' | 'dark';
}

const VectorBackground = ({ variant = 'hero' }: VectorBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const shapes = containerRef.current?.querySelectorAll('.vector-shape');
      
      shapes?.forEach((shape, index) => {
        gsap.to(shape, {
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: 'none',
        });

        gsap.to(shape, {
          y: -50,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getColors = () => {
    switch (variant) {
      case 'dark':
        return { stroke: 'stroke-primary/20', fill: 'fill-primary/5' };
      case 'services':
        return { stroke: 'stroke-accent/30', fill: 'fill-accent/10' };
      default:
        return { stroke: 'stroke-primary/20', fill: 'fill-primary/5' };
    }
  };

  const colors = getColors();

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Circle */}
      <svg className="vector-shape absolute -top-40 -right-40 w-[600px] h-[600px] opacity-50" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" className={`${colors.stroke} ${colors.fill}`} strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" className={colors.stroke} strokeWidth="0.3" fill="none" />
        <circle cx="100" cy="100" r="40" className={colors.stroke} strokeWidth="0.2" fill="none" />
      </svg>

      {/* Grid Pattern */}
      <svg className="vector-shape absolute top-1/4 left-10 w-[300px] h-[300px] opacity-30" viewBox="0 0 100 100">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" className={colors.stroke} strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      {/* Hexagon */}
      <svg className="vector-shape absolute bottom-20 right-1/4 w-[200px] h-[200px] opacity-40" viewBox="0 0 100 100">
        <polygon 
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
          className={`${colors.stroke} ${colors.fill}`} 
          strokeWidth="0.5" 
        />
      </svg>

      {/* Dots Pattern */}
      <svg className="vector-shape absolute top-1/2 -left-20 w-[400px] h-[400px] opacity-20" viewBox="0 0 100 100">
        {[...Array(10)].map((_, i) => (
          [...Array(10)].map((_, j) => (
            <circle 
              key={`${i}-${j}`} 
              cx={5 + i * 10} 
              cy={5 + j * 10} 
              r="1" 
              className={colors.fill.replace('/5', '/30')} 
            />
          ))
        ))}
      </svg>

      {/* Triangle */}
      <svg className="vector-shape absolute bottom-1/3 left-1/3 w-[150px] h-[150px] opacity-30" viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" className={`${colors.stroke}`} strokeWidth="0.5" fill="none" />
      </svg>

      {/* Wavy Lines */}
      <svg className="vector-shape absolute top-10 left-1/2 w-[500px] h-[200px] opacity-20" viewBox="0 0 200 80">
        <path 
          d="M0,40 Q25,20 50,40 T100,40 T150,40 T200,40" 
          className={colors.stroke} 
          strokeWidth="0.5" 
          fill="none" 
        />
        <path 
          d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50" 
          className={colors.stroke} 
          strokeWidth="0.3" 
          fill="none" 
        />
      </svg>
    </div>
  );
};

export default VectorBackground;
