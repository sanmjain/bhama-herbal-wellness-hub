
import ContactButton from "./ContactButton";
import { MessageCircle, Phone, Mail, Sparkles } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const instagramHandle = "bhama_herbal"; // Replace with actual Instagram handle
  const phoneNumber = "+1234567890"; // Replace with actual phone number
  const emailAddress = "info@bhamaherbal.com"; // Replace with actual email

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-herbal-100 via-herbal-50 to-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-herbal-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-herbal-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-herbal-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-4 hover:shadow-md transition-all duration-300">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Connect With Us</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Get in <span className="text-primary bg-gradient-to-r from-primary to-herbal-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Ready to start your natural wellness journey? Connect with us through your preferred method and discover the power of herbal healing.
          </p>
        </div>
        
        {/* Contact buttons with enhanced mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="transform hover:scale-105 transition-all duration-300 hover:z-10 relative">
            <ContactButton
              type="whatsapp"
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
              icon={<MessageCircle className="w-5 h-5 md:w-6 md:h-6" />}
            >
              <span className="text-sm md:text-base">WhatsApp</span>
            </ContactButton>
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300 hover:z-10 relative">
            <ContactButton
              type="instagram"
              href={`https://instagram.com/${instagramHandle}`}
              icon={
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              }
            >
              <span className="text-sm md:text-base">Instagram</span>
            </ContactButton>
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300 hover:z-10 relative">
            <ContactButton
              type="phone"
              href={`tel:${phoneNumber}`}
              icon={<Phone className="w-5 h-5 md:w-6 md:h-6" />}
            >
              <span className="text-sm md:text-base">Call Us</span>
            </ContactButton>
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300 hover:z-10 relative">
            <ContactButton
              type="email"
              href={`mailto:${emailAddress}`}
              icon={<Mail className="w-5 h-5 md:w-6 md:h-6" />}
            >
              <span className="text-sm md:text-base">Email</span>
            </ContactButton>
          </div>
        </div>
        
        {/* Enhanced CTA section with better mobile optimization */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-herbal-200/50 hover:border-herbal-300/70 mx-2 md:mx-0">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              Experience Natural Healing
            </h3>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
          </div>
          
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 md:px-4">
            Join thousands of satisfied customers who have discovered the power of natural wellness. 
            Let us guide you toward a healthier, more balanced life with our time-tested herbal solutions.
          </p>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-herbal-200/50">
            <div className="text-center group">
              <div className="text-lg md:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center group">
              <div className="text-lg md:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Natural Products</div>
            </div>
            <div className="text-center group col-span-2 md:col-span-1">
              <div className="text-lg md:text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
