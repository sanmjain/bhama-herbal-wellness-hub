
import ContactButton from "./ContactButton";
import { MessageCircle, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const instagramHandle = "bhama_herbal"; // Replace with actual Instagram handle
  const phoneNumber = "+1234567890"; // Replace with actual phone number
  const emailAddress = "info@bhamaherbal.com"; // Replace with actual email

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-herbal-100 to-herbal-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          Get in <span className="text-primary">Touch</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to start your natural wellness journey? Connect with us through your preferred method.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <ContactButton
            type="whatsapp"
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
            icon={<MessageCircle className="w-6 h-6" />}
          >
            WhatsApp
          </ContactButton>
          
          <ContactButton
            type="instagram"
            href={`https://instagram.com/${instagramHandle}`}
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            }
          >
            Instagram
          </ContactButton>
          
          <ContactButton
            type="phone"
            href={`tel:${phoneNumber}`}
            icon={<Phone className="w-6 h-6" />}
          >
            Call Us
          </ContactButton>
          
          <ContactButton
            type="email"
            href={`mailto:${emailAddress}`}
            icon={<Mail className="w-6 h-6" />}
          >
            Email
          </ContactButton>
        </div>
        
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Experience Natural Healing
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the power of natural wellness. 
            Let us guide you toward a healthier, more balanced life with our time-tested herbal solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
