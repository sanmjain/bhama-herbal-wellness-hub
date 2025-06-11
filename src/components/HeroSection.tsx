
import { Leaf, Shield, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-herbal-50 to-white flex items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-herbal-200/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-herbal-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4 md:mb-6 hover:shadow-xl transition-all duration-300 group">
            <Leaf className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-2">
          <span className="text-primary bg-gradient-to-r from-primary to-herbal-600 bg-clip-text text-transparent">Bhama</span> Herbal
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Your trusted natural hub for herbal medicines and wellness products
        </p>
        
        {/* Feature cards with enhanced mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-16 max-w-5xl mx-auto px-2">
          <div className="text-center p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-herbal-200/50 hover:border-herbal-300/70 group">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-herbal-100 rounded-full mb-3 md:mb-4 group-hover:bg-herbal-200 transition-colors duration-300">
              <Leaf className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-foreground">100% Natural</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Pure herbal solutions from nature's goodness</p>
          </div>
          
          <div className="text-center p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-herbal-200/50 hover:border-herbal-300/70 group">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-herbal-100 rounded-full mb-3 md:mb-4 group-hover:bg-herbal-200 transition-colors duration-300">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-foreground">No Side Effects</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Safe and gentle treatments for all ages</p>
          </div>
          
          <div className="text-center p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-herbal-200/50 hover:border-herbal-300/70 group md:col-span-3 lg:col-span-1">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-herbal-100 rounded-full mb-3 md:mb-4 group-hover:bg-herbal-200 transition-colors duration-300">
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-foreground">Holistic Health</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Complete wellness solutions for mind and body</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
