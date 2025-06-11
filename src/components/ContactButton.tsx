
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface ContactButtonProps {
  type: 'whatsapp' | 'instagram' | 'phone' | 'email';
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ContactButton = ({ type, href, children, icon }: ContactButtonProps) => {
  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const getButtonStyles = () => {
    switch (type) {
      case 'whatsapp':
        return "bg-[#25D366] hover:bg-[#20BA5A] text-white";
      case 'instagram':
        return "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white";
      case 'phone':
        return "bg-primary hover:bg-primary/90 text-primary-foreground";
      case 'email':
        return "bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-primary/20";
      default:
        return "bg-primary hover:bg-primary/90 text-primary-foreground";
    }
  };

  return (
    <Button 
      onClick={handleClick}
      className={`${getButtonStyles()} min-h-[48px] px-6 py-3 text-base font-medium rounded-lg transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105`}
    >
      {icon}
      {children}
    </Button>
  );
};

export default ContactButton;
