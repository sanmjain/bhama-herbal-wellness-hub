
const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
          About <span className="text-primary">Bhama Herbal</span>
        </h2>
        
        <div className="bg-herbal-50 rounded-2xl p-8 md:p-12 shadow-sm">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Bhama Herbal is a trusted natural hub specializing in herbal medicines and wellness products. 
            Our brand stands for <strong className="text-primary">purity</strong>, <strong className="text-primary">natural healing</strong>, 
            and <strong className="text-primary">holistic health solutions</strong> derived from Ayurvedic traditions 
            and nature's goodness.
          </p>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            We focus on promoting sustainable, plant-based treatments that have 
            <strong className="text-primary"> no side effects</strong> and are suitable for 
            <strong className="text-primary"> all age groups</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To provide pure, effective herbal solutions that promote natural healing 
                and enhance overall well-being through the wisdom of Ayurveda.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Promise</h3>
              <p className="text-foreground leading-relaxed">
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
