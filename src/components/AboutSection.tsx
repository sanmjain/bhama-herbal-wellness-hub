
const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 md:mb-8 px-2">
          About <span className="text-primary bg-gradient-to-r from-primary to-herbal-600 bg-clip-text text-transparent">Bhama Herbal</span>
        </h2>
        
        <div className="bg-herbal-50/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-herbal-200/50 mx-2 md:mx-0">
          <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-4 md:mb-6 px-2 md:px-4">
            Bhama Herbal is a trusted natural hub specializing in herbal medicines and wellness products. 
            Our brand stands for <strong className="text-primary font-semibold">purity</strong>, <strong className="text-primary font-semibold">natural healing</strong>, 
            and <strong className="text-primary font-semibold">holistic health solutions</strong> derived from Ayurvedic traditions 
            and nature's goodness.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-8 md:mb-12 px-2 md:px-4">
            We focus on promoting sustainable, plant-based treatments that have 
            <strong className="text-primary font-semibold"> no side effects</strong> and are suitable for 
            <strong className="text-primary font-semibold"> all age groups</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="text-left bg-white/60 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-herbal-200/30">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                To provide pure, effective herbal solutions that promote natural healing 
                and enhance overall well-being through the wisdom of Ayurveda.
              </p>
            </div>
            
            <div className="text-left bg-white/60 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-herbal-200/30">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Our Promise
              </h3>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                Every product is crafted with care, ensuring the highest quality standards 
                and complete safety for you and your family's health journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
