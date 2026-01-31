
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

export const GlassNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-center border-b border-white/10 backdrop-blur-sm bg-black/5">
      <div className="text-xl tracking-[0.2em] font-bold uppercase font-display">
        Glasshouse
      </div>
      
      <div className="hidden md:flex space-x-12 text-xs tracking-[0.15em] font-medium uppercase">
        {['Manifesto', 'Architecture', 'Gallery', 'Contact'].map((item) => (
          <a key={item} href="#" className="hover:text-mercury transition-colors relative group">
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-mercury transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <Search className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white p-6 border-b border-white/10 flex flex-col space-y-4 md:hidden">
            {['Manifesto', 'Architecture', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-sm tracking-widest uppercase py-2 border-b border-white/10">
                {item}
              </a>
            ))}
        </div>
      )}
    </nav>
  );
};

export default GlassNavigation;
