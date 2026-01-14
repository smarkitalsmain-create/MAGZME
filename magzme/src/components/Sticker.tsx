import { cn } from "@/lib/utils";

interface StickerProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: string;
  variant?: "float" | "float-delayed" | "float-slow" | "bounce";
}

export const Sticker = ({ 
  children, 
  className, 
  animationDelay,
  variant = "float" 
}: StickerProps) => {
  const animationClass = {
    float: "animate-float",
    "float-delayed": "animate-float-delayed",
    "float-slow": "animate-float-slow",
    bounce: "animate-bounce-gentle",
  }[variant];

  return (
    <div 
      className={cn(
        "sticker inline-block hover-wiggle cursor-pointer select-none",
        animationClass,
        className
      )}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {children}
    </div>
  );
};
