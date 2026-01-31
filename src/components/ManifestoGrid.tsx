
import { Star } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Liquid Mercury',
    category: 'Finance',
    image: 'https://raw.githubusercontent.com/Glyphor-Fuse/glasshouse/main/public/images/project-mercury.png',
    gridArea: 'md:col-span-8 md:row-span-2',
    aspect: 'aspect-[16/9]'
  },
  {
    id: '02',
    title: 'Glass Structure',
    category: 'System',
    image: 'https://raw.githubusercontent.com/Glyphor-Fuse/glasshouse/main/public/images/project-glass.png',
    gridArea: 'md:col-span-4 md:row-span-1',
    aspect: 'aspect-square'
  },
  {
    id: '03',
    title: 'Void Space',
    category: 'Archive',
    image: 'https://raw.githubusercontent.com/Glyphor-Fuse/glasshouse/main/public/images/project-void.png',
    gridArea: 'md:col-span-4 md:row-span-1',
    aspect: 'aspect-square'
  },
];

export const ManifestoGrid = () => {
  return (
    <section className="py-24 px-6 border-t border-foreground/10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-foreground/10 pb-6">
            <h2 className="text-4xl md:text-6xl uppercase tracking-tighter font-bold">Curated Works</h2>
            <span className="hidden md:block font-mono text-xs tracking-widest text-muted-foreground">INDEX_01 // 2024</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          {projects.map((project) => (
            <div key={project.id} className={`group relative ${project.gridArea}`}>
                <div className={`relative w-full ${project.aspect} overflow-hidden bg-gray-100`}>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Architectural Labels */}
                    <div className="absolute top-4 left-4 font-mono text-[10px] text-white/70 uppercase tracking-widest mix-blend-difference">
                        FIG.{project.id}
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-start border-t border-foreground/10 pt-2">
                    <h3 className="text-lg uppercase tracking-widest font-medium">{project.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground uppercase">{project.category}</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoGrid;
