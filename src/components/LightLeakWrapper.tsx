
import { useEffect, useRef } from 'react';

export const LightLeakWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-background overflow-hidden selection:bg-mercury selection:text-black"
      style={{ '--mouse-x': '-100px', '--mouse-y': '-100px' } as React.CSSProperties}
    >
      {/* The Base Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* The Reveal Layer - Contains hidden grids and notes */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 mix-blend-difference opacity-0 md:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 100%)`
        }}
      />
      
      {/* Hidden Architectural Grid - Revealed by mask */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          maskImage: `radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black, transparent)`,
        }}
      >
        <div className="w-full h-full border-[0.5px] border-mercury/30 grid grid-cols-6 md:grid-cols-12 gap-4 px-4">
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-full border-r-[0.5px] border-mercury/20 flex flex-col justify-between py-4">
                    <span className="text-[10px] font-mono text-mercury/40 rotate-90 origin-left translate-x-2">AXIS-{i}</span>
                    <span className="text-[10px] font-mono text-mercury/40 rotate-90 origin-left translate-x-2">REF-{i*34}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LightLeakWrapper;
