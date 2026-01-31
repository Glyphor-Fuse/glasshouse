import { GlassNavigation } from "@/components/GlassNavigation";
import { LightLeakWrapper } from "@/components/LightLeakWrapper";
import { StructuralHero } from "@/components/StructuralHero";
import { ManifestoGrid } from "@/components/ManifestoGrid";

const Index = () => {
  return (
    <LightLeakWrapper>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-gray-300 selection:text-black">
        <GlassNavigation />
        <main>
          <StructuralHero />
          <ManifestoGrid />
        </main>
        
        <footer className="py-12 px-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="flex flex-col space-y-4">
            <h4 className="text-2xl font-bold tracking-tighter uppercase">Glasshouse</h4>
            <p className="text-sm text-muted-foreground max-w-xs">
              Curated productivity for the modern architect of thought.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-8">
             {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest hover:text-black hover:underline underline-offset-4 decoration-1">
                    {social}
                </a>
             ))}
          </div>
        </footer>
      </div>
    </LightLeakWrapper>
  );
};

export default Index;
