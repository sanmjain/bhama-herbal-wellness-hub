
import { Button } from "@/components/ui/button";

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
        return "bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[#25D366]/25 hover:shadow-[#25D366]/40";
      case 'instagram':
        return "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white shadow-pink-500/25 hover:shadow-pink-500/40";
      case 'phone':
        return "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/25 hover:shadow-primary/40";
      case 'email':
        return "bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-primary/20 shadow-herbal-300/25 hover:shadow-herbal-300/40 hover:border-primary/40";
      default:
        return "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/25 hover:shadow-primary/40";
    }
  };

  return (
    <Button 
      onClick={handleClick}
      className={`${getButtonStyles()} 
        w-full min-h-[52px] md:min-h-[60px] 
        px-4 md:px-6 py-3 md:py-4 
        text-sm md:text-base font-medium 
        rounded-xl md:rounded-2xl 
        transition-all duration-300 
        flex items-center justify-center gap-2 md:gap-3 
        shadow-lg hover:shadow-2xl 
        transform hover:scale-105 hover:-translate-y-1
        active:scale-95 active:translate-y-0
        focus:outline-none focus:ring-4 focus:ring-primary/20
        relative overflow-hidden
        group
        before:absolute before:inset-0 before:bg-white/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
        after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:translate-x-[-100%] after:transition-transform after:duration-700 hover:after:translate-x-[100%]
      `}
    >
      <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="relative z-10 font-semibold tracking-wide">
        {children}
      </span>
    </Button>
  );
};

export default ContactButton;
