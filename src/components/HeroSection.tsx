
import { Leaf, Shield, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-herbal-50 to-white flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <Leaf className="w-16 h-16 text-primary mx-auto mb-6" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          <span className="text-primary">Bhama</span> Herbal
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Your trusted natural hub for herbal medicines and wellness products
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm">
            <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">100% Natural</h3>
            <p className="text-muted-foreground">Pure herbal solutions from nature's goodness</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Side Effects</h3>
            <p className="text-muted-foreground">Safe and gentle treatments for all ages</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Holistic Health</h3>
            <p className="text-muted-foreground">Complete wellness solutions for mind and body</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
